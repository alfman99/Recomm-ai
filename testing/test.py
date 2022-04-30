# Make sure you have the required packages:
#   pip install requests

import requests

url = 'https://api-us.restb.ai/vision/v2/multipredict'
payload = {
    # Add your client key
    'client_key': 'e143fec9cd9dd10fb5e9be190edbdbd2581f9505a98b38dfc1d8e970d8b33d0b',
    'model_id': 're_condition',
    # Add the image URL you want to process
    'image_url': 'https://i.imgur.com/sC36WMV.png'
}

# Make the segmentation request
response = requests.get(url, params=payload)

# The response is formatted in JSON
json_response = response.json()

print(json_response)