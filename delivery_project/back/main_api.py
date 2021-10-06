from flask import Blueprint, render_template, request, url_for, redirect, jsonify
from models import *
from collections import defaultdict
import json

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def home():
    test_list = testTable.query.all()
    return render_template('test.html', test_list = test_list)

@bp.route('/testasts')
def asdf(input):
    return 

#####################################
# coivd 관련 코드 (추후 변경될 예정) #
####################################
from covid_crawler import getTodayCovid

@bp.post("/covidData")
def covid():
    data = getTodayCovid()
    return jsonify(data)

@bp.route('/gradecount', methods=['POST'])
def gradecount():
    result = {'data': defaultdict(int)}
    clean_store = cleanTable.query.all()
    for store in clean_store:
        addr = str(store.addr)
        region_big, region_small = addr.split()[0], addr.split()[1]
        if region_big == "서울특별시":
            result['data'][region_small] += 1
            result['data'][region_big] += 1
        else:
            result['data'][region_big] += 1
    return jsonify(result)