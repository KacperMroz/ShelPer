import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, make_response, jsonify
)
from datetime import date

from shelper.db import get_db

from shelper.auth import login_required

bp = Blueprint('visit', __name__)

@bp.route('/visit', methods=('POST',))
@login_required
def addVisit():
    visit_data = request.get_json()
    print(visit_data)
    try:
        date = visit_data['date']
        shelter_id = visit_data['shelter_id'] 
        animal_id = visit_data['animal_id']
    except Exception:
        return {'message': 'Malformed data.'}, 400
    
    try:
        client_id = request.cookies.get('user_id')
    except Exception:
        return {'message': 'Unauthorized'}, 401

    db = get_db()

    try:
        visit_id = db.execute(
            "INSERT INTO visit(date, shelter_id, animal_id, client_id) VALUES(?,?,?,?) RETURNING visit_id",
            (date, shelter_id, animal_id, client_id),
        ).fetchone()['visit_id']
    except Exception:
        return {"message": 'Insert failed'}, 400

    db.commit()
    return {"visit_id": visit_id}, 201

@bp.route('/visit/<int:visit_id>', methods=('GET',))
@login_required
def getVisit(visit_id):
    db = get_db()

    try:
        client_id = request.cookies.get('user_id')
    except Exception:
        return {'message': 'Unauthorized'}, 401

    visit = db.execute(
        "SELECT * FROM visit WHERE visit_id = ?",
        (visit_id,),
    ).fetchone()

    if visit is None:
        return {'message': 'Visit not found'}, 404

    print(visit['client_id'])

    if visit['client_id'] != int(client_id):
        return {'message': 'Forbidden'}, 403

    return dict(visit)

@bp.route('/visit/<int:visit_id>', methods=('PUT',))
@login_required
def updateVisit(visit_id):
    visit_data = request.get_json()
    try:
        date = visit_data['date']
        animal_id = visit_data['animal_id']
    except Exception:
        return {'message': 'Malformed data.'}, 400

    try:
        client_id = request.cookies.get('user_id')
    except Exception:
        return {'message': 'Unauthorized'}, 401

    db = get_db()

    try:
        visit = db.execute(
            "Select * FROM visit WHERE visit_id = ?",
            (visit_id,),
        ).fetchone()
    except Exception:
        return {"message": 'Select failed'}, 400

    if visit is None:
        return {'message': 'Visit not found'}, 404

    if visit['client_id'] != int(client_id):
        return {'message': 'Forbidden'}, 403

    try:
        visit = db.execute(
            "UPDATE visit SET date = ?, animal_id = ? WHERE visit_id = ? RETURNING *",
            (date, animal_id, visit_id),
        ).fetchone()
    except Exception:
        return {"message": 'Update failed'}, 400

    db.commit()
    return dict(visit)

@bp.route('/visit/<int:visit_id>', methods=('DELETE',))
@login_required
def deleteVisit(visit_id):
    try:
        user_id = request.cookies.get('user_id')
    except Exception:
        return {'message': 'Unauthorized'}, 401

    db = get_db()

    try:
        visit = db.execute(
            "SELECT * FROM visit WHERE visit_id = ?",
            (visit_id,),
        ).fetchone()
    except Exception:
        return {"message": 'Select failed'}, 400

    if visit is None:
        return {'message': 'Visit not found'}, 404

    if visit['client_id'] != int(user_id) and visit['shelter_id'] != int(user_id):
        return {'message': 'Forbidden'}, 403

    try:
        db.execute(
            "DELETE FROM visit WHERE visit_id = ?",
            (visit_id,),
        )
    except Exception:
        return {"message": 'Delete failed'}, 400

    db.commit()
    return {'message': 'Visit deleted'}, 200

@bp.route('/visits/client', methods=('GET',))
@login_required
def getVisitsClient():
    try:
        user_id = request.cookies.get('user_id')
    except Exception:
        return {'message': 'Unauthorized'}, 401

    db = get_db()

    try:
        visits = db.execute(
            "SELECT * FROM visit WHERE client_id = ?",
            (user_id,),
        ).fetchall()
    except Exception:
        return {"message": 'Select failed'}, 400

    visits_dict = []

    for visit in visits:
        visits_dict.append(dict(visit))

    return jsonify(visits_dict)

@bp.route('/visits/shelter', methods=('GET',))
@login_required
def getVisitsShelter():
    try:
        user_id = request.cookies.get('user_id')
    except Exception:
        return {'message': 'Unauthorized'}, 401

    db = get_db()

    try:
        visits = db.execute(
            "SELECT * FROM visit WHERE shelter_id = ?",
            (user_id,),
        ).fetchall()
    except Exception:
        return {"message": 'Select failed'}, 400

    visits_dict = []

    for visit in visits:
        visits_dict.append(dict(visit))

    return jsonify(visits_dict)