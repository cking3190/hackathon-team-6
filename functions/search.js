// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
    // Data can be extracted from the request as follows:
  var searchString = (query.searchStr) ? query.searchStr : 'Test';
  var pipeline = [{
    '$search': {
      compound: {
        "filter": [{
              "range": {
                "path": "quantity",
                "gte": 1
              }
            }],
        must: [{
          text: {
            query: searchString,
            path: ['Product Name','About Product'],
            fuzzy: {
              maxEdits:1
            },
            "score": { 
              "boost": { 
                path: "likes",
                'undefined': 0
              }
            }
          }
        }]
      }
    }
  },{
    $project: {
        'Product Name': 1,
        'Product Url': 1,
        Category: 1,
        quantity: 1,
        'selling Price': 1,
        likes: 1,
        Image: 1,
        score: {$meta: 'searchScore'}
    }
  },{
      $limit:25
  }];
  
  return context.services.get("mongodb-atlas").db("hack2022").collection("products").aggregate(pipeline).toArray();
  
};
