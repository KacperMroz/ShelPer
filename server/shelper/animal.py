from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, make_response, jsonify
)
from datetime import date

from shelper.db import get_db

bp = Blueprint('animal', __name__)

@bp.route('/animal', methods=('POST',))
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
    except KeyError:
        return {'message': 'Malformed data.'}, 400

    # TODO: Data validation

    today = date.today()

    db = get_db()

    animal_id = db.execute(
        "INSERT INTO animal(name, age, weight, description, healthy, sex, color, advert_date, breed_id, size_id, shelter_id, animal_type_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?) RETURNING animal_id",
        (name, age, weight, description, healthy, male, color, today, breed_id, size_id, shelter_id,animal_type_id),
        ).fetchone()['animal_id']
        
    return animal_id

@bp.route('/animal/<int:animal_id>', methods=('GET',))
def getAnimal(animal_id):

    db = get_db()

    animal = db.execute(
        "SELECT * FROM animal WHERE animal_id = ?",
        (animal_id,),
    ).fetchone()

    return animal

@bp.route('/animal/<int:animal_id>', methods=('PUT',))
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
    except BaseException:
        return {'message': 'Malformed data.'}, 400

    # TODO: Data validation
    # TODO: Check if user is allowed to update the animal

    try:
        db.execute(
            "UPDATE animal SET name = ?, age = ?, weight = ?, description = ?, healthy = ?, sex = ?, color = ?, breed_id = ?, size_id = ?, animal_type_id = ? where animal_id = ? ",
            (name, age, weight, description, healthy, male, color, breed_id, size_id, animal_type_id, animal_id),
        )
    except BaseException:      
        return {'message': 'Something went wrong while updating'}, 400 

    return 'updateAnimal'

@bp.route('/animal/<int:animal_id>', methods=('DELETE',))
def deleteAnimal(animal_id):
    db = get_db()

    # TODO: Check if user is allowed to delete the animal

    try:
        db.execute(
            "DELETE FROM animal WHERE animal_id = ?",
            (animal_id,),
        )
    except BaseException:
        return {'message': 'Something went wrong while deleting'}, 400

    return 'deleteAnimal'

@bp.route('/animals', methods=('GET',))
def getAnimals():
    return 'animals'

    

