db.customers.insertMany([{
  "cno":1, "cust_name":"John Doe 1", "cust_phone":9876543210, "location":"KOL","gender":"M"
},
{
  "cno":2, "cust_name":"Jane Doe 2", "cust_phone":9876543211, "location":"KOL","gender":"F"
},
{
  "cno":3, "cust_name":"Jane Doe 3", "cust_phone":9876543212, "location":"MUM","gender":"F"
},
{
  "cno":4, "cust_name":"John Doe 4", "cust_phone":9876543213, "location":"DEL","gender":"M"
},
{
  "cno":5, "cust_name":"John Doe 5", "cust_phone":8976543214, "location":"KOL","gender":"M"
}

]);

db.items.insertMany([{
  "itemno":1, "itemname":"Ptem 1", "color":"BROWN", "weight":10000,"expire_date":ISODate("2023-08-09"),"price":20000,"shop_name":"XYZ"
},
{
  "itemno":2, "itemname":"Qtem 2", "color":"BLACK", "weight":700,"expire_date":ISODate("2022-09-09"),"price":10000,"shop_name":"ZYX"
},
{
  "itemno":3, "itemname":"Rtem 3", "color":"SAFFRON", "weight":300,"expire_date":ISODate("2023-08-09"),"price":10000,"shop_name":"ABC"
},
{
  "itemno":4, "itemname":"Stem 4", "color":"WHITE", "weight":3000,"expire_date":ISODate("2023-08-09"),"price":30000,"shop_name":"ABC"
},
{
  "itemno":5, "itemname":"Atem 5", "color":"BLUE", "weight":3000,"expire_date":ISODate("2023-08-09"),"price":70000,"shop_name":"ABCXYZ"
}

]);

db.cust_items.insertMany([{
  "cno":1, "itemno":1, "quantity_purchased":9, "date_purchase":ISODate("2022-09-08"),
},
{
  "cno":1, "itemno":2, "quantity_purchased":3, "date_purchase":ISODate("2022-07-08"),
},
{
  "cno":3, "itemno":3, "quantity_purchased":7, "date_purchase":ISODate("2022-09-08"),
},
{
  "cno":2, "itemno":3, "quantity_purchased":9, "date_purchase":ISODate("2022-03-08"),
},
{
  "cno":1, "itemno":5, "quantity_purchased":6, "date_purchase":ISODate("2022-01-08"),
}

]);

// -------------------------------------------------------------------------------------------------------------------------

// 1. Delete the items whose price is more than 50000.

db.items.deleteMany({"price": {$gt:50000}});

// 2. Find the names of the customer who is located in same location as that of other customer.

db.customers.aggregate([{$project:{cust_name:1,location:1}},{$group:{_id:"$location","coustemers_sm_location":{$push:"$cust_name"}}},{$project:{cust_name:1}}])

//3. Display the names of items which is black, white & brown in color.

db.items.find({"color":{$in:["BLACK","WHITE","BROWN"]}},{itemname:1,_id:0}) //can also use regex for case insensetive

// 4. Display the names of all the items whose names lies between ‘p’ and‘s’.

db.items.find({"itemname":/^[P-S].*/i},{itemname:1,_id:0})

// 5. Find the item which is having less weight.

db.items.find({},{itemname:1,_id:0}).sort({"weight":1}).limit(1)

// 7. Count total number of items which is going to expire in next month

db.items.aggregate([{$project:{expire_limit:{$dateAdd:{startDate:ISODate(),unit:"month",amount:1}},itemname:1,expire_date:1}},{expire_date:{$lte:("$expire_limit")}},{$project:{itemname:1,_id:0}}]);


// 8. List all customers whose phone number starts with ‘99’

db.customers.aggregate([{
  $project: {
      cust_name: 1,
      mobile_str: {
          $toString: '$cust_phone'
      }
  }
}, {
  $match: {
      mobile_str: RegExp('^99.*')
  }
}, {
  $project: {
      cust_name: 1
  }
}]);

// 9. Display total value (qty*price) for all items.

db.items.aggregate([
  {
    '$lookup': {
      'from': 'items', 
      'localField': 'itemno', 
      'foreignField': 'itemno', 
      'as': 'quant_price'
    }
  }, {
    '$project': {
      'quantity_purchased': 1, 
      'mapped': {
        'item': {
          '$arrayElemAt': [
            '$quant_price', 0
          ]
        }
      }
    }
  }, {
    '$project': {
      '_id': 0, 
      'itemno': '$mapped.item.itemno', 
      'QuantMultPrice': {
        '$multiply': [
          '$mapped.item.price', '$quantity_purchased'
        ]
      }
    }
  }
])


// 10. List customer details who has purchased maximum number of items

db.items.aggregate([
  {
    '$lookup': {
      'from': 'customers', 
      'localField': 'cno', 
      'foreignField': 'cno', 
      'as': 'cst_itm'
    }
  }, {
    '$project': {
      'cst_dtl': {
        '$arrayElemAt': [
          '$cst_itm', 0
        ]
      }, 
      'quantity_purchased': 1
    }
  }, {
    '$group': {
      '_id': '$cst_dtl', 
      'maxBought': {
        '$max': '$quantity_purchased'
      }
    }
  }
])
