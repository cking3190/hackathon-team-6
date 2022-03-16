// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
  
  var asin = (query.asin) ? query.asin : 'Test';
  var price = (query.price) ? parseFloat(query.price) : 19.99;
  var product_name = (query.product_name) ? query.product_name : 'Test';
  var lat = (query.lat) ? parseFloat(query.lat) : 0;
  var lon = (query.lon) ? parseFloat(query.lon) : 0;
  
  var rec = {
    asin: asin,
    price: price,
    product_name: product_name,
    location: [lat, lon]
  };
  
  context.services.get("mongodb-atlas").db("hack2022").collection("transactions").insertOne(rec);
  
  return 'added!';
};
