import json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, make_response, jsonify
)

from shelper.db import get_db

def getSecodnaryId(cookie):
    value = cookie[1:]

    db = get_db()

    print("cookie: " + cookie)
    print("value: " + str(value))

    client_id = db.execute(
        "SELECT client_id FROM client WHERE details = ?",
        (value,),
    ).fetchone()

    shelter_id = db.execute(
        "SELECT shelter_id FROM shelter WHERE details = ?",
        (value,),
    ).fetchone()

    if client_id is not None:
        return client_id['client_id']
    elif shelter_id is not None:
        return shelter_id['shelter_id']
