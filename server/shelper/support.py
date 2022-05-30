import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, make_response, jsonify
)
from datetime import date

from shelper.db import get_db

from shelper.auth import login_required

bp = Blueprint('support', __name__)

@bp.route('/towns', methods=('GET',))
def getTowns():
    db = get_db()

    try:
        towns = db.execute(
            "SELECT * from town",
        ).fetchall()
    except Exception:
        return {"message": 'Select failed'}, 400

    if towns is None:
        return {"message": 'Towns not found'}, 404

    towns_dict = []
    for town in towns:
        towns_dict.append(dict(town))

    return jsonify(towns_dict)

@bp.route('/sizes', methods=('GET',))
def getSizes():
    db = get_db()

    try:
        sizes = db.execute(
            "SELECT * from size",
        ).fetchall()
    except Exception:
        return {"message": 'Select failed'}, 400

    if sizes is None:
        return {"message": 'Sizes not found'}, 404

    sizes_dict = []
    for size in sizes:
        sizes_dict.append(dict(size))

    return jsonify(sizes_dict)

@bp.route('/types', methods=('GET',))
def getTypes():
    db = get_db()

    try:
        types = db.execute(
            "SELECT * from animal_type",
        ).fetchall()
    except Exception:
        return {"message": 'Select failed'}, 400

    if types is None:
        return {"message": 'Sizes not found'}, 404

    types_dict = []
    for type in types:
        types_dict.append(dict(type))

    return jsonify(types_dict)