import time
import requests
import json
import random
import urllib.parse



def get_random_calcs():
	max_long = -77.252572
	min_long = -93.785678
	max_lat = 41.393489
	min_lat = 34.143850
	return ([round(random.uniform(min_lat, max_lat),6),round(random.uniform(min_long, max_long),6)])

x = requests.get("https://us-east-1.aws.data.mongodb-api.com/app/application-0-asolr/endpoint/search?searchStr=coffee")
print(x)
count=0
while True:

	x = requests.get("https://us-east-1.aws.data.mongodb-api.com/app/application-0-asolr/endpoint/search?searchStr=coffee")
	print(json.loads(x.content)[0]['Product Name'])
	randomizer = random.randint(1, 100)
	if randomizer >= 50:
		ind = 1
	elif randomizer >= 30 and randomizer < 50:
		ind = 2
	elif randomizer >= 5 and randomizer < 30:
		ind = 3
	else:
		ind = 4

	buy_object = json.loads(x.content)[ind]
	asin = "123kj344"
	price = buy_object["selling Price"]["$numberDouble"]
	product_name = urllib.parse.quote(buy_object['Product Name'])
	latitude = get_random_calcs()[0]
	longitude = get_random_calcs()[1]
	# print("https://us-east-1.aws.data.mongodb-api.com/app/application-0-asolr/endpoint/addTransaction?asin={asin}&price={price}&lat={latitude}&lon={longitude}&product_name={product_name}".format(asin=asin, price=price,product_name=product_name, latitude=latitude, longitude=longitude))

	# data_api_endpoint = 'https://data.mongodb-api.com/app/data-flhyu/endpoint/data/beta/action/insertOne'
	# body = {
	#     "collection":"{{collection}}",
	#     "database":"{{database}}",
	#     "dataSource":"{{dataSource}}",
	#     "document": { 
	#         		'product_name': product_name,
	# 				'price' : price,
	# 				'location' : [latitude,longitude],
	# 				'asin': asin
	#     }
	# }
	x = requests.get("https://us-east-1.aws.data.mongodb-api.com/app/application-0-asolr/endpoint/addTransaction?asin={asin}&price={price}&lat={latitude}&lon={longitude}&product_name={product_name}".format(asin=asin, price=price, product_name=product_name, latitude=latitude, longitude=longitude)) 
	time.sleep(.5)

