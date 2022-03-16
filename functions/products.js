exports = function({ query, headers, body}, response) {
    // Data can be extracted from the request as follows:
  var productString= (query.productID) ? query.productID : 'Test';
  return context.services.get("mongodb-atlas").db("hack2022").collection("products").findOne({"Uniq Id": productString })
};