import requests
from flask import Flask
from flask import request

app = Flask(__name__)

documentTypes = []
uploadedTypes = []
countryWhiteList = []
countryBlackList = []
faceMatching = False
privacy = False
localeSelected = "en_US"


@app.route("/otp")
def otp():
    otp_response = get_verifai_otp_response()
    return {"otp": [otp_response.json()["token"]]}


@app.route("/result/<session_id>")
def result(session_id=0):
    f = open("token.txt", "r")
    internal_token = f.read()
    endpoint = 'https://websdk.verifai.com/v1/session/' + \
               str(session_id) + '/verifai-result'
    headers = {
        'Authorization': f'Bearer {internal_token}'
    }

    response = requests.get(endpoint, headers=headers)
    return response.json()


@app.route("/modifyLocale", methods=['POST'])
def modifyLocale():
    result = request.json
    if result != 0:
        global localeSelected
        localeSelected = result
    return ""


@app.route("/modifyFace", methods=['POST'])
def modifyFace():
    result = request.json
    global faceMatching
    faceMatching = result
    return ""


@app.route("/modifyPrivacy", methods=['POST'])
def modifyPrivacy():
    result = request.json
    global privacy
    privacy = result
    return ""


@app.route("/modifyCountryWhiteList", methods=['POST'])
def modifyCountryWhiteList():
    result = request.json
    if result != 0:
        global countryWhiteList
        countryWhiteList = result
    else:
        #global countryWhiteList
        countryWhiteList = []
    return ""


@app.route("/modifyCountryBlackList", methods=['POST'])
def modifyCountryBlackList():
    result = request.json
    if result != 0:
        global countryBlackList
        countryBlackList = result
    return ""


@app.route("/modify", methods=['POST'])
def modifyDocumentTypes():
    result = request.json
    if result != 0:
        global documentTypes
        documentTypes = result
    return ""


@app.route("/modifyUpload", methods=['POST'])
def modifyUploadTypes():
    result = request.json
    if result != 0:
        global uploadedTypes
        uploadedTypes = result
    return ""


def get_verifai_otp_response():
    endpoint = 'https://websdk.verifai.com/v1/auth/token'
    handover_base_url = 'http://localhost:3000/hand'

    f = open("token.txt", "r")
    api_token = f.read()
    if len(countryWhiteList) == 0:
        data = {
            'document_type_whitelist': documentTypes,
            'uploadTypes': uploadedTypes,
            'handover_base_url': f'{handover_base_url}?s=',
            'locale': localeSelected,
            'country_choices_blacklist': countryBlackList,
            'enable_facematch': faceMatching,
            'allow_edit_privacy_filters': privacy
        }
    else:
        data = {
            'document_type_whitelist': documentTypes,
            'uploadTypes': uploadedTypes,
            'handover_base_url': f'{handover_base_url}?s=',
            'locale': localeSelected,
            'country_choices_whitelist': countryWhiteList,
            'country_choices_blacklist': countryBlackList,
            'enable_facematch': faceMatching,
            'allow_edit_privacy_filters': privacy
        }
    headers = {
        'Authorization': f'Bearer {api_token}'
    }

    response = requests.post(endpoint, json=data, headers=headers)
    return response


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
