const dotenv = require('dotenv');
dotenv.config();

const faunadbClient = process.env.FAUNADB_CLIENT;
const faunadbHost = process.env.FAUNADB_DB;

module.exports = {
	faunadbClient,
	faunadbHost
}