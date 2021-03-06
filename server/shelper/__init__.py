import os

from flask import Flask
from flask_cors import CORS


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app, supports_credentials=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'shelper.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(os.path.join(app.instance_path,"../../client/public/photos"))
        os.makedirs(app.instance_path)
    except OSError:
        pass



    from . import db
    db.init_app(app)

    from . import auth
    app.register_blueprint(auth.bp)

    from . import animal
    app.register_blueprint(animal.bp)

    from . import visit
    app.register_blueprint(visit.bp)

    from . import favourite
    app.register_blueprint(favourite.bp)

    from . import user
    app.register_blueprint(user.bp)

    from . import support
    app.register_blueprint(support.bp)

    return app
