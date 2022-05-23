import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, make_response, jsonify
)
from datetime import date

from shelper.db import get_db

from shelper.auth import login_required

bp = Blueprint('animal', __name__)


@bp.route('/animal', methods=('POST',))
@login_required
def addAnimal():
    animal_data = request.get_json()
    try:
        name = animal_data['name']
        age = animal_data['age']
        weight = animal_data['weight']
        description = animal_data['description']
        healthy = animal_data['healthy']
        male = animal_data['male']
        color = animal_data['color']
        breed_id = animal_data['breed_id']
        size_id = animal_data['size_id']
        shelter_id = request.cookies.get('user_id')
        animal_type_id = animal_data['animal_type_id']
    except Exception:
        return {'message': 'Malformed data.'}, 400

    # TODO: Data validation

    today = date.today()

    db = get_db()

    try:
        animal_id = db.execute(
            "INSERT INTO animal(name, age, weight, description, healthy, male, color, advert_date, breed_id, size_id, shelter_id, animal_type_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?) RETURNING animal_id",
            (name, age, weight, description, healthy, male, color, today, breed_id, size_id, shelter_id, animal_type_id),
        ).fetchone()['animal_id']
    except Exception:
        return {"message": 'Insert failed'}, 400

    db.commit()
    return {"animal_id": animal_id}, 201


@bp.route('/animal/<int:animal_id>', methods=('GET',))
def getAnimal(animal_id):
    db = get_db()

    animal = db.execute(
        "SELECT * FROM animal WHERE animal_id = ?",
        (animal_id,),
    ).fetchone()

    if animal is None:
        return {'message': 'Animal not found'}, 404

    return dict(animal)


@bp.route('/animal/<int:animal_id>', methods=('PUT',))
@login_required
def updateAnimal(animal_id):
    animal_data = request.get_json()
    try:
        name = animal_data['name']
        age = animal_data['age']
        weight = animal_data['weight']
        description = animal_data['description']
        healthy = animal_data['healthy']
        male = animal_data['male']
        color = animal_data['color']
        breed_id = animal_data['breed_id']
        size_id = animal_data['size_id']
        animal_type_id = animal_data['animal_type_id']
        shelter_id = request.cookies.get('user_id')
    except BaseException:
        return {'message': 'Malformed data.'}, 400

    # TODO: Data validation
    db = get_db()

    try:
        actual_shelter_id = db.execute(
            "SELECT shelter_id FROM animal WHERE animal_id = ?",
            (animal_id,),
        ).fetchone()['shelter_id']
    except Exception:
        return {'message': 'Animal not found'}, 404

    if actual_shelter_id != int(shelter_id):
        return {'message': 'You are not allowed to update this animal'}, 401

    try:
        animal = db.execute(
            "UPDATE animal SET name = ?, age = ?, weight = ?, description = ?, healthy = ?, male = ?, color = ?, breed_id = ?, size_id = ?, animal_type_id = ? where animal_id = ? RETURNING *",
            (name, age, weight, description, healthy, male, color, breed_id, size_id, animal_type_id, animal_id),
        ).fetchone()
    except BaseException:
        return {'message': 'Something went wrong while updating'}, 400

    db.commit()
    return dict(animal)


@bp.route('/animal/<int:animal_id>', methods=('DELETE',))
@login_required
def deleteAnimal(animal_id):
    shelter_id = request.cookies.get('user_id')

    # TODO: Check if user is allowed to delete the animal
    db = get_db()

    try:
        actual_shelter_id = db.execute(
            "SELECT shelter_id FROM animal WHERE animal_id = ?",
            (animal_id,),
        ).fetchone()['shelter_id']
    except Exception:
        return {'message': 'Animal not found'}, 404

    if actual_shelter_id != int(shelter_id):
        return {'message': 'You are not allowed to update this animal'}, 401

    try:
        db.execute(
            "DELETE FROM animal WHERE animal_id = ?",
            (animal_id,),
        )
    except BaseException:
        return {'message': 'Something went wrong while deleting'}, 400

    db.commit()
    return {'message': 'Animal deleted'}, 200


@bp.route('/animals', methods=('GET',))
def getAnimals():
    db = get_db()

    animals = db.execute(
        "SELECT animal.*, building.town_id FROM animal " +
        "LEFT JOIN shelter ON animal.shelter_id = shelter.shelter_id " +
        "LEFT JOIN user_details ON shelter.details = user_details.user_id " +
        "LEFT JOIN building ON user_details.building = building.building_id ",
    ).fetchall()

    animals_dict = []

    for animal in animals:
        animals_dict.append(dict(animal))

    return jsonify(animals_dict)
