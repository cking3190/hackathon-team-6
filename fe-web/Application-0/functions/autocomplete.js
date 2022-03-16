// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
    // Data can be extracted from the request as follows:
  var searchString = (query.searchStr) ? query.searchStr : 'Test';
  var pipeline = [
    {$search: {
      index: 'autocomplete',
      autocomplete: {
        query: searchString,
        path: 'Product Name'
      },
      highlight: { 
        path: "Product Name"
      }
    }},
    {$project: {
      "score": { $meta: "searchScore" },
      _id: 1,
      'Product Name': 1,
      "highlights": { "$meta": "searchHighlights" }
    }},
    {$limit: 10}];
  
  return context.services.get("mongodb-atlas").db("hack2022").collection("products").aggregate(pipeline).toArray();
  
};
