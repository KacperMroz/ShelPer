import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, make_response, jsonify
)
from datetime import date

from shelper.db import get_db

from shelper.auth import login_required

bp = Blueprint('user', __name__)

@bp.route('/user/client/<int:user_id>', methods=('GET',))
def getUserClient(user_id):
    db = get_db()

    try:
        user = db.execute(
            "SELECT * from client as c left join user_details as ud on ud.user_id = c.details left join building as b on ud.building = b.building_id left join town as t on t.town_id = b.town_id where c.client_id = ?",
            (user_id,),
        ).fetchone()
    except Exception:
        return {"message": 'Select failed'}, 400

    if user is None:
        return {"message": 'User not found'}, 404

    return jsonify(dict(user))

@bp.route('/user/shelter/<int:user_id>', methods=('GET',))
def getUserShelter(user_id):
    db = get_db()

    try:
        user = db.execute(
            "SELECT * from shelter as s left join user_details as ud on ud.user_id = s.details left join building as b on ud.building = b.building_id left join town as t on t.town_id = b.town_id where s.shelter_id = ?",
            (user_id,),
        ).fetchone()
    except Exception:
        return {"message": 'Select failed'}, 400

    if user is None:
        return {"message": 'User not found'}, 404

    return jsonify(dict(user))
    
@bp.route('/user/shelters', methods=('GET',))
def getShelters():
    db = get_db()

    try:
        shelters = db.execute(
            "SELECT * from shelter as s left join user_details as ud on ud.user_id = s.details left join building as b on ud.building = b.building_id left join town as t on t.town_id = b.town_id",
        ).fetchall()
    except Exception:
        return {"message": 'Select failed'}, 400

    if shelters is None:
        return {"message": 'Shelters not found'}, 404

    shelter_dict = []

    for shelter in shelters:
        shelter_dict.append(dict(shelter))

    return jsonify(shelter_dict)