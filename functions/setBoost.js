exports = function({ query, headers, body}, response) {
  var asin = (query.asin) ? query.asin : 'Test';
  var boost = (query.boost) ? parseFloat(query.boost) : 1;

  var filter = { 'Uniq Id': asin };
  var updateDoc = {
      $set: {
        boost: boost
      }
    };
    
  context.services.get("mongodb-atlas").db("hack2022").collection("products").updateOne(filter, updateDoc);
  return 'Boost updated!';
};