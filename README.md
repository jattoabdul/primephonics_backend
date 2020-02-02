# PrimePhonic Backend Assignment Solution
> A simple app to generate a financial report based on streaming usage of users. As an output, this report should indicate how much money should be distributed to each label.

## Method 1: Docker Build and Run Setup

To Install all system requirements and run app:

- Install Docker
- ```$docker-compose up --build```
- Run app on port `5500` e.g. [`http://localhost:5500`]

## Method 2: Local Build Setup

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

## Method 3: Production Build Setup

Build for production and launch server:

- ```$ yarn run build```
- ```$ yarn start```

## Environment & Setup info

- API is built on top of the [Express framework](https://expressjs.com/)

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
    "message": "Found User Stream Report",
    "data": {
        ...
    }
}
```

### Sample error response

```json
{
    "error": "User ID Invalid"
}
```

## Notes

### Assumptions

>- Application will be run in a private VPC  or behind an API gateaway that handles authentication.
>- That the metadata API will have a 99.99% uptime. In case of failure/downtime, I have the options to implement an exponetial backoff or to schedule jobs that run and retries to fetch data.

### Possible Improvements

>- We can use background jobs to run our db sync script, at way we always have updated stream data.
>- Caching Result to avoid DB Hits every time ,especially when things haven't changed, we can return data from a Redis Cache.

For more information, contact Abdulqahhar Aminujatto via <jattoade@gmail.com>
