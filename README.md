# Car Example problem

How to filter nested queries in graphql?

Query:
```graphql
{
  country(id: 2) {
    id
    name
    stores {
      id
      name
      cars {
        id
        model
        storeId
        countryId
      }
    }
  }
}

```

Result:
```json
{
  "data": {
    "country": {
      "id": "2",
      "name": "Faroe Islands",
      "stores": [
        {
          "id": "1",
          "name": "Store #1",
          "cars": [
            {
              "id": "1",
              "model": "Some car model",
              "storeId": "1",
              "countryId": "1"
            },
            {
              "id": "2",
              "model": "New model",
              "storeId": "1",
              "countryId": "2"
            },
            {
              "id": "3",
              "model": "Another model",
              "storeId": "1",
              "countryId": "1"
            }
          ]
        },
        {
          "id": "3",
          "name": "Store #3",
          "cars": []
        },
        {
          "id": "4",
          "name": "Store #4",
          "cars": [
            {
              "id": "4",
              "model": "Another model Danish version",
              "storeId": "4",
              "countryId": "4"
            }
          ]
        }
      ]
    }
  }
}
```

As seen here, we are getting all cars connected to the store and ignoring the upper query. 
Expected result would only show the cars within that country and that store.

## Start
```
yarn install
yarn start
```
[Open Site](http://localhost:3000/graphiql?query=%7B%0A%20%20country(id%3A%202)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20stores%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20cars%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20model%0A%20%20%20%20%20%20%20%20storeId%0A%20%20%20%20%20%20%20%20countryId%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
