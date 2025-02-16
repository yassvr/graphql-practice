const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Basic GraphQL schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Resolver for the query
const root = {
  message: () => 'Hello World!'
};

// Create express server
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Server running at http://localhost:4000/graphql');
});
