const faunadb = require('faunadb');
const Client = require('.');

const  { Create, Collection, Now } = faunadb.query;


const collection = 'cycles';

const Cycle = {
  create: async (data) => {
    data.payload = {...data.payload, date: Now() };
    
    try {
      return await Client.query(
        Create(
          Collection(collection),
          { data }
        )
      )
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }

    return null;
  }
}

module.exports = Cycle;
