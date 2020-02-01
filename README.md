# PrimePhonic Backend Assignment Solution
> A simple app to generate a financial report based on streaming usage of users. As an output, this report should indicate how much money should be distributed to each label.

## Local Build Setup

To Install all system requirements:

- ```$npm install -g nodemon```
- ```$npm install -g sequelize-cli```

>- NB: Ensure all DB variables in the `config/config.js` is set.

To install Dependencies:

- ```$ yarn install```

To create DB, run:

- ```$ createdb db_name```

>- NB: use `primephonics` or the db name set in the `config/config.js` as instructed above.

To run DB migration, run:

- ```$ sequelize db:migrate```

To rollback migration, run:

- ```$ sequelize db:migrate:undo:all```

To seed DB with data from local users.csv, stream.csv and remote track json, run:

- ```$ node ./node_modules/.bin/babel-node scripts/seed.js```
- ```$ sequelize db:seed:all [--debug]```

To undo seed, run:

- ```$ sequelize db:seed:undo:all [--debug]```

Serve with hot reload at localhost:5400:

- ```$ yarn run dev```

## Production Build Setup

Build for production and launch server:

- ```$ yarn run build```
- ```$ yarn start```

## Environment & Setup info

- API is built on top of the [Express framework](https://expressjs.com/)

For more information, contact Abdulqahhar Aminujatto via <jattoade@gmail.com>

## API Documentation

>- *Server Root:* `/`
>- *API Root:* `/api/v1/*`

### API Features

* [**Stream**](#stream)

  - [Create Stream](#create-stream)
  - [Get Streams](#get-streams)
  - [Update Stream](#update-stream)
  - [Remove Stream](#remove-stream)
  - [Get Stream](#get-stream)

* [**Report**](#report)
  - [Get All Label Stream Report](#get-all-label-stream-report)

* [**User**](#user)
  - [Get Single User Report](#get-a-user-report)

## API Routes

>- *GET: Fetch All Label Report:* `/api/v1/report`
>- *GET: Fetch Single User Stream Report:* `/api/v1/users/:user_id`

>- *POST: Create Stream:* `/api/v1/streams`
>- *GET: Fetch All Streams:* `/api/v1/streams`
>- *GET: Fetch a Single Stream:* `/api/v1/stream/:stream_id`
>- *PUT/PATCH: Update a Stream:* `/api/v1/stream/:stream_id`
>- *DELETE: Update a Stream:* `/api/v1/stream/:stream_id`

### Sample success response

```json
{
    "status": "success",
    "message": "Found User Stream Report",
    "data": {
        ...
    }
}
```

### Sample error response

```json
{
    "status": "error",
    "message": "User Stream Report Not Found"
}
```

## Notes

>- Each response come with their status code
>- More Notes Coming
