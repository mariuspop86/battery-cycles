const faunadb = require('faunadb');
const { faunadbClient, faunadbHost } = require("../constant/faunadb");

const faunaClient = new faunadb.Client({ 
  secret: faunadbClient, 
  domain: faunadbHost, 
  scheme: 'https', 
  port: 443 
})

module.exports = faunaClient;
