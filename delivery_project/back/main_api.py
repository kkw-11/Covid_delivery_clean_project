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
    result = {'data': {'all': defaultdict(int), 'franchise':defaultdict(int)}}
    clean_store = cleanTable.query.all()
    for store in clean_store:
        addr = str(store.addr)
        region_big, region_small = addr.split()[0], addr.split()[1]
        if region_big == "서울특별시":
            result['data']['all'][region_small] += 1
            result['data']['all'][region_big] += 1
            if store.franchise == 0:
                result['data']['franchise'][region_small] += 1
                result['data']['franchise'][region_big] += 1
        else:
            result['data']['all'][region_big] += 1
            if store.franchise == 0:
                result['data']['franchise'][region_big] += 1
        result['data']['all']['전국'] += 1
        if store.franchise == 0:
            result['data']['franchise']['전국'] += 1

    return jsonify(result)

@bp.route('/allstorecount', methods=['POST'])
def allstorecount():
    '''
    result = {'data': defaultdict(int) }
    all_store = allTable.query.all()
    for store in all_store:
        addr = str(store.addr1)
        try:
            region_big, region_small = addr.split()[0], addr.split()[1]
        except:
            continue
        if region_big == "서울특별시":
            result['data'][region_small] += 1
            result['data'][region_big] += 1
        else:
            result['data'][region_big] += 1
        result['data']['전국'] += 1
    '''
    result = {
    "data": {
        "강남구": 16119,
        "강동구": 5479,
        "강북구": 4277,
        "강서구": 7980,
        "강원도": 37239,
        "경기도": 186444,
        "경상남도": 63463,
        "경상북도": 54102,
        "관악구": 6092,
        "광주광역시": 22738,
        "광진구": 5697,
        "구로구": 5264,
        "금천구": 4004,
        "노원구": 5000,
        "대구광역시": 40186,
        "대전광역시": 24650,
        "도봉구": 3051,
        "동대문구": 5444,
        "동작구": 4241,
        "마포구": 10335,
        "부산광역시": 55188,
        "서대문구": 4982,
        "서울특별시": 161912,
        "서초구": 8302,
        "성동구": 4843,
        "성북구": 5234,
        "세종특별자치시": 4830,
        "송파구": 9593,
        "양천구": 4235,
        "영등포구": 8837,
        "용산구": 5757,
        "울산광역시": 19759,
        "은평구": 5089,
        "인천광역시": 41028,
        "전국": 870034,
        "전라남도": 35031,
        "전라북도": 32411,
        "제주특별자치도": 19476,
        "종로구": 8776,
        "중구": 8574,
        "중랑구": 4707,
        "충청남도": 40318,
        "충청북도": 31257
    }
}
    return jsonify(result)