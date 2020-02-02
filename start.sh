#! /usr/bin/env sh
set -e

echo "wait 5 seconds for DB to be ready"
sleep 5

echo "Running Migration"
sequelize db:migrate

echo "Seeding Data in DB"
node ./node_modules/.bin/babel-node scripts/seed.js
sequelize db:seed:all --debug

echo "Starting Server"
yarn run dev
