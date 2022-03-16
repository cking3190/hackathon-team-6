// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
  
  var asin = (query.asin) ? query.asin : 'Test';
  var price = (query.price) ? query.price : 19.99;
  var product_name = (query.product_name) ? query.product_name : 'Test';
  var lat = (query.lat) ? query.lat : 0;
  var lon = (query.lon) ? query.lon : 0;
  
  var rec = {
    asin: asin,
    price: parseFloat(price),
    product_name: product_name,
    location: [parseFloat(lat), parseFloat(lon)]
  };
  
  context.services.get("mongodb-atlas").db("hack2022").collection("transactions").insertOne(rec);
  
  return 'added!';
};
