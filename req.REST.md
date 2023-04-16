POST http://localhost:5500/api/item
Content-Type: application/json

{
    "item": "This is the first todo item"
}

###
GET http://localhost:5500/api/item
Content-Type: application/json


###
PUT http://localhost:5500/api/item/643ac80e80f501eff3c1a205

Content-Type: application/json
{
    "item": "This is the first todo item updated!"
}



###
DELETE http://localhost:5500/api/item/643abd0cb5553dddc3a5c8db

Content-Type: application/json
