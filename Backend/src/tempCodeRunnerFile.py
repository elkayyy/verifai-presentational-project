
# def get_verifai_otp_response():
#     endpoint = 'https://websdk.verifai.com/v1/auth/token'
#     handover_base_url = '<YOUR HANDOVER URL>'

#     f = open("E:\\SoftwareEngineeringProject\\Soften\\Backend\\token.txt", "r")
#     api_token = f.read()

#     data = {
#         'document_type_whitelist': ['P', 'I'],
#         'handover_base_url': f'{handover_base_url}?s=',
#         'locale': 'en_US'
#     }
#     headers = {
#         'Authorization': f'Bearer {api_token}'
#     }

#     response = requests.post(endpoint, json=data, headers=headers)
#     return response


# if __name__ == '__main__':
#     otp_response = get_verifai_otp_response()
#     print(otp_response.content)