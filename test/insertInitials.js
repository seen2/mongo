db.customers.insertMany([{
  "cno":1, "cust_name":"John Doe 1", "cust_phone":"9876543210", "location":"KOL","gender":"M"
},
{
  "cno":2, "cust_name":"Jane Doe 2", "cust_phone":"9876543211", "location":"KOL","gender":"F"
},
{
  "cno":3, "cust_name":"Jane Doe 3", "cust_phone":"9876543212", "location":"MUM","gender":"F"
},
{
  "cno":4, "cust_name":"John Doe 4", "cust_phone":"9876543213", "location":"DEL","gender":"M"
},
{
  "cno":5, "cust_name":"John Doe 5", "cust_phone":"8976543214", "location":"KOL","gender":"M"
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