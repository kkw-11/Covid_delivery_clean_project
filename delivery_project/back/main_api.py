from flask import Blueprint, render_template, request, url_for, redirect, jsonify
from models import *
from collections import defaultdict
import json
import random
import requests
from haversine import haversine

bp = Blueprint('main', __name__, url_prefix='/api')

# 지역별로 위생등급을 받은 전체가게 수와 프랜차이점의 수를 반환하는 API
@bp.route('/regioncount', methods=['POST'])
def regioncount():
    result = {'data': {'all': defaultdict(int), 'franchise':defaultdict(int)}}
    clean_store = cleanTable.query.all()
    for store in clean_store:
        if store.addr1 == "서울특별시":
            result['data']['all'][store.addr2] += 1
            result['data']['all'][store.addr1] += 1
            if store.franchise == 0:
                result['data']['franchise'][store.addr2] += 1
                result['data']['franchise'][store.addr1] += 1
        else:
            result['data']['all'][store.addr1] += 1
            if store.franchise == 0:
                result['data']['franchise'][store.addr1] += 1
        result['data']['all']['전국'] += 1
        if store.franchise == 0:
            result['data']['franchise']['전국'] += 1

    return jsonify(result)

# 지역별로 위생가게의 등급별 수를 반환하는 API
@bp.route('/gradecount', methods=['POST'])
def gradecount():
    result = {'data': defaultdict(lambda : defaultdict(int))}
    store_list = cleanTable.query.all()
    for store in store_list:
        if store.addr1 == "서울특별시":
            result['data'][store.addr1][store.hg_asgn_lv] += 1
            result['data'][store.addr2][store.hg_asgn_lv] += 1
        else:
            result['data'][store.addr1][store.hg_asgn_lv] += 1
        result['data']['전국'][store.hg_asgn_lv] += 1
    return jsonify(result)

# 전국 프랜차이점의 수를 반환하는 API
@bp.route('/allfranchise', methods=['POST'])
def allfranchise():
    result = {
    "data": {
        "강남구": 2391,
        "강동구": 633,
        "강북구": 352,
        "강서구": 816,
        "강원도": 2559,
        "경기도": 28951,
        "경상남도": 7923,
        "경상북도": 5613,
        "관악구": 428,
        "광주광역시": 3206,
        "광진구": 460,
        "구로구": 486,
        "금천구": 257,
        "노원구": 525,
        "대구광역시": 5473,
        "대전광역시": 3550,
        "도봉구": 233,
        "동대문구": 379,
        "동작구": 284,
        "마포구": 529,
        "부산광역시": 7755,
        "서대문구": 493,
        "서울특별시": 21930,
        "서초구": 1734,
        "성동구": 611,
        "성북구": 794,
        "세종특별자치시": 829,
        "송파구": 1582,
        "양천구": 703,
        "영등포구": 1811,
        "용산구": 742,
        "울산광역시": 2882,
        "은평구": 605,
        "인천광역시": 6264,
        "전국": 115669,
        "전라남도": 3389,
        "전라북도": 3914,
        "제주특별자치도": 1331,
        "종로구": 869,
        "중구": 1407,
        "중랑구": 247,
        "충청남도": 5144,
        "충청북도": 3790
    }
}
    return jsonify(result)

# 지역별 위생가게 5개를 랜덤으로 반환하는 API
@bp.route('/storelist', methods=['POST'])
def storelist():
    result = {'data': defaultdict(list)}
    franchise = {'data': defaultdict(list)}
    store_list = cleanTable.query.filter(cleanTable.franchise == 0).all()
    franchise_list = cleanTable.query.filter(cleanTable.franchise == 1).all()
    for store in store_list:
        result['data']['전국'].append(store.bssh_nm)
        if store.addr1 == '서울특별시':
            result['data'][store.addr2].append(store.bssh_nm)
            result['data'][store.addr1].append(store.bssh_nm)
        else:
            result['data'][store.addr1].append(store.bssh_nm)

    for store in franchise_list:
        if store.addr1 == '서울특별시':
            franchise['data'][store.addr2].append(store.bssh_nm)

    for region in result['data']:
        _list = result['data'][region]
        _flist = franchise['data'][region]
        if len(_list) >= 5:
            result['data'][region] = random.sample(_list, 5)
        else:
            result['data'][region].extend(random.sample(_flist,5-len(_list)))

    return jsonify(result)

# 전국 가게 리스트 수를 반환하는 API
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

@bp.route('/allstorelist', methods=['POST'])
def allstorelist():
    data = request.get_json()
    start = (float(data['map1']), float(data['map2']))
    result = {'data': []}
    store_list = cleanTable.query.all()
    for store in store_list:
        goal = (float(store.latitude), float(store.longitude))
        distance = format(haversine(start, goal), ".2f")
        result['data'].append({"bssh_nm" : store.bssh_nm,
                                "hg_asgn_lv" : store.hg_asgn_lv,
                                "addr" : store.addr,
                                "franchise" : store.franchise,
                                "addr1" : store.addr1,
                                "addr2" : store.addr2,
                                "distance" : distance })
    return jsonify(result)