// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {

  var asin = (query.asin) ? query.asin : '1';
  var price = (query.price) ? query.price : 1.00;
  var product_name = (query.product_name) ? query.product_name : '1';
  var lat = (query.lat) ? query.lat : '1';
  var lon = (query.lon) ? query.lon : '1';
  
  var newRec = {
    asin: asin,
    price: price,
    product_name: product_name,
    location: [lat, lon]
  };
  
  context.services.get("mongodb-atlas").db("hack2022").collection("transactions").insertOne(newRec);
};
