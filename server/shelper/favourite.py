import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, make_response, jsonify
)
from datetime import date

from shelper.db import get_db

from shelper.auth import login_required

from shelper.cookie_reader import getSecodnaryId

bp = Blueprint('favourite', __name__)

@bp.route('/favourite', methods=('POST',))
@login_required
def addFavourite():
    favourite_data = request.get_json()
    try:
        animal_id = favourite_data['animal_id']
    except Exception:
        return {'message': 'Malformed data.'}, 400

    auth_cookie = request.cookies.get('user_id')
    client_id = getSecodnaryId(auth_cookie)

    db = get_db()

    try:
        animal = db.execute(
            "Select * from animal where animal_id = ?",
            (animal_id,),
        ).fetchone()
    except Exception:
        return {'message': 'Select failed'}, 400

    if animal is None:
        return {'message': 'Animal not found'}, 404

    try:
        db.execute(
            "INSERT INTO client_animal_favourites(animal_id, client_id) VALUES(?,?)",
            (animal_id, client_id),
        )
    except Exception:
        return {"message": 'Insert failed'}, 400

    db.commit()
    return {'message': 'Successfully created'}, 201

@bp.route('/favourite', methods=('DELETE',))
@login_required
def deleteFavourite():
    auth_cookie = request.cookies.get('user_id')
    client_id = getSecodnaryId(auth_cookie)

    animal_data = request.get_json()
    try:
        animal_id = animal_data['animal_id']
    except Exception:
        return {'message': 'Malformed data.'}, 400

    db = get_db()

    try:
        row = db.execute(
            "Select * from client_animal_favourites where animal_id = ? and client_id = ?",
            (animal_id, client_id),
        ).fetchone()
    except Exception:
        return {'message': 'Select failed'}, 400

    if row is None:
        return {'message': 'Favourite not found'}, 404

    try:
        db.execute(
            "DELETE FROM client_animal_favourites WHERE animal_id = ? AND client_id = ?",
            (animal_id, client_id),
        )
    except Exception:
        return {'message': 'Delete failed'}, 400

    db.commit()
    return {'message': 'Successfully deleted'}, 200

@bp.route('/favourites', methods=('GET',))
@login_required
def getFavourites():
    auth_cookie = request.cookies.get('user_id')
    client_id = getSecodnaryId(auth_cookie)

    db = get_db()

    try:
        favourites = db.execute(
            "SELECT * FROM client_animal_favourites WHERE client_id = ?",
            (client_id,),
        ).fetchall()
    except Exception:
        return {'message': 'Select failed'}, 400

    if favourites is None:
        return {'message': 'Favourites not found'}, 404

    favourites_dict = []

    for favourite in favourites:
        animal = db.execute(
            "SELECT animal.*, town.town_id FROM animal LEFT JOIN shelter ON shelter.shelter_id = animal.shelter_id left join user_details on user_details.user_id = shelter.details left join building on building.building_id = user_details.building left join town on town.town_id = building.town_id  WHERE animal_id = ?",
            (favourite['animal_id'],),
        ).fetchone()

        if animal is None:
            return {'message': 'Animal not found'}, 404

        favourites_dict.append(dict(animal))

    return jsonify(favourites_dict)


    