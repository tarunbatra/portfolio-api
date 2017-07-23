# portfolio-api
[![Heroku][heroku-image]][heroku-url]

Sample API involving Portfolio, Trades, Stocks

## API
| Method  | Route              | Return                             |
|:--------|:-------------------|:-----------------------------------|
| GET     | `/`                | Return portfolio                   |
| GET     | `/trades/:id`      | Trade represented by `id`          |
| GET     | `/holdings`        | Holdings at this point of time     |
| POST    | `/addTrade`        | Add a trade                        |
| POST    | `/updateTrade/:id` | Update a trade represented by `id` |
| POST    | `/removeTrade/:id` | Remove a trade represented by `id` |


## Environment Variables
| Variable   | Default                         | Description                       |
|:-----------|:--------------------------------|:----------------------------------|
| PORT       | `3000`                          | Port the server should listen to  |
| MONGO_URL  | `mongodb://localhost/portfolio` | Port the server should listen to  |

## Run
```js
npm start
```

## Test
```js
npm test
```
[heroku-image]: https://heroku-badge.herokuapp.com/?app=port-folio-api
[heroku-url]: http://port-folio-api.herokuapp.com
