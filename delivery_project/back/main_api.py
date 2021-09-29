from flask import Blueprint, render_template, request, url_for, redirect
from models import *

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def home():
    test_list = testTable.query.all()
    return render_template('test.html', test_list = test_list)

@bp.route('/testasts')
def asdf(input):
    

    return 