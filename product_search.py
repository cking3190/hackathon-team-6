import requests
import random
import threading
import concurrent.futures

def product_search():
  items = ["coffee", "sneakers", "sofa", "chair", "bike"]
  input_str = random.choices(items)

  payload = {'searchStr': input_str}
  r = requests.get('https://us-east-1.aws.data.mongodb-api.com/app/application-0-asolr/endpoint/search', params=payload)

  print(r.json())


if __name__ == "__main__":
	for i in range(200):
	    threads = list()
	    for index in range(25):
	        x = threading.Thread(target=product_search)
	        threads.append(x)
	        x.start()

	    for index, thread in enumerate(threads):
	           thread.join()
