import functools
import re
from turtle import st

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, make_response, jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash

from shelper.db import get_db

bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@bp.route('/register/shelter', methods=('POST',))
def register_shelter():
    register_data = request.get_json()
    try:
        email = register_data['email']
        password = register_data['password']
        name = register_data['name']
    except KeyError:
        return {'message': 'Malformed data.'}, 400


    #TODO: data validation


    db = get_db()

    user_id = None
    try:
        user_id = db.execute(
            "INSERT INTO user_details (email, password) VALUES (?, ?) RETURNING user_id",
            (email, generate_password_hash(password)),
        ).fetchone()['user_id']
    except db.IntegrityError:
        error = f"User with email {email} is already registered."
        db.rollback()
        return {'message': error}, 400

    try:
        db.execute(
            "INSERT INTO shelter (name, details) VALUES (?, ?)",
            (name, user_id),
        )
    except db.IntegrityError:
        db.rollback()
        error = "Unknow error."
        return {'message': error}, 400

    if 'phone_number' in register_data:
        phone_number = register_data['phone_number']
        db.execute(
            "UPDATE user_details SET phone_number = ? WHERE user_id = ?",
            (phone_number, user_id)
        )

    if ('town_id' in register_data and
       'building_number' in register_data and
       'street_name' in register_data and
       'zip_code' in register_data):
        town_id = register_data['town_id']
        building_number = register_data['building_number']
        street_name = register_data['street_name']
        zip_code = register_data['zip_code']
        db.execute(
            "INSERT INTO building(town_id, building_number, street_name, zip_code) VALUES (?, ?, ?, ?)",
            (town_id, building_number, street_name, zip_code)
        )

    db.commit()
    return {'message': "Shelter registered successfully."}, 201

@bp.route('/register/client', methods=('POST',))
def register_client():
    register_data = request.get_json()
    try:
        email = register_data['email']
        password = register_data['password']
        name = register_data['name']
        surname = register_data['surname']
    except KeyError:
        return {'message': 'Malformed data.'}, 400


    #TODO: data validation


    db = get_db()

    user_id = None
    try:
        user_id = db.execute(
            "INSERT INTO user_details (email, password) VALUES (?, ?) RETURNING user_id",
            (email, generate_password_hash(password)),
        ).fetchone()['user_id']
        print(user_id)
    except db.IntegrityError:
        error = f"User with email {email} is already registered."
        db.rollback()
        return {'message': error}, 400

    try:
        db.execute(
            "INSERT INTO client(name, surname, details) VALUES (?,?,?)",
            (name, surname, user_id),
        )
    except db.IntegrityError:
        db.rollback()
        error = "Unknow error."
        return {'message': error}, 400

    if 'phone_number' in register_data:
        phone_number = register_data['phone_number']
        db.execute(
            "UPDATE user_details SET phone_number = ? WHERE user_id = ?",
            (phone_number, user_id)
        )

    if ('town_id' in register_data and
       'building_number' in register_data and
       'street_name' in register_data and
       'zip_code' in register_data):
        town_id = register_data['town_id']
        building_number = register_data['building_number']
        street_name = register_data['street_name']
        zip_code = register_data['zip_code']
        db.execute(
            "INSERT INTO building(town_id, building_number, street_name, zip_code) VALUES (?, ?, ?, ?)",
            (town_id, building_number, street_name, zip_code)
        )

    db.commit()
    return {'message': "Client registered successfully."}, 201


@bp.route('/login', methods=('POST',))
def login():
    register_data = request.get_json()
    try:
        email = register_data['email']
        password = register_data['password']
    except KeyError:
        return {'message': 'Malformed data.'}, 400

    db = get_db()
    error = None
    user = db.execute(
        'SELECT * FROM user_details WHERE email = ?', (email,)
    ).fetchone()


    if user is None:
        error = 'Incorrect email.'
    elif not check_password_hash(user['password'], password):
        error = 'Incorrect password.'

    shelter = None
    client = None

    if error is None:
        shelter = db.execute(
            "SELECT * from shelter where details = ?", (user['user_id'],)
        ).fetchone()

        if shelter is None:
            client = db.execute(
                "SELECT * from client where details = ?", (user['user_id'],)
            ).fetchone()

            if client is None:
                error = 'User not found.'


    if client is not None:
        letter = 'C'

    if shelter is not None:
        letter = 'S'

    if error is None:
        response = make_response(jsonify({'message': 'Logged in successfully.'}, 200))
        value = letter + str(user['user_id'])
        response.set_cookie('user_id', value)
        return response

    return {'message': error}, 401

def login_required(endpoint):
    @functools.wraps(endpoint)
    def wrapped_endpoint(**kwargs):
        if request.cookies.get('user_id') is None:
            return {'message': 'Please log in.'}, 401

        return endpoint(**kwargs)

    return wrapped_endpoint