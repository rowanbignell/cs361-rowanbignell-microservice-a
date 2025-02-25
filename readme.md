# Microservice A : Food Log

## How to Request
Microservice takes HTTP requests to the endpoints below.
All request bodies expect JSON.

### Get all Items
Send an `GET` request to `{{address}}/foodLog`.

### Get One Item
Send a `GET` request to `{{address}}/foodlog/{{id}}` where `id` is the id of the food log item to request.

### Add an Item
Send a `POST` request to `{{address}}/foodlog` with a body containing:
```
{
	"foodDate": {{foodDate}},
	"foodItem": {{foodItem}},
	"portionSize": {{portionSize}},
	"calories": {{calories}},
	"mealType": {{mealType}}
}
```
### Delete an Item
Send a `DELETE` request to `{{address}}/foodlog/{{id}}` where `id` is the id of the food log item.

### Edit an Item
Send a `PUT` request to `{{address}}/foodlog/{{id}}` where `id` is the id of the food log item, with a body containing:
```
{
	"foodDate": {{foodDate}},
	"foodItem": {{foodItem}},
	"portionSize": {{portionSize}},
	"calories": {{calories}},
	"mealType": {{mealType}}
}
```
## How to Recieve

### Get all Items

### Get One Item

### Add an Item

### Delete an Item

### Edit an Item

## UML Diagram

## Example Data

```
{
  "12345": {
    "foodDate": "2025-02-08",
    "foodItem": "Apple",
    "portionSize": "1 medium",
    "calories": 90,
    "mealType": "Snack"
  },
  "00000": {
    "foodDate": "1999-10-10",
    "foodItem": "Cereal",
    "portionSize": "3 large",
    "calories": 150,
    "mealType": "Breakfast"
  }
}
```
