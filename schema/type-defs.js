const {gql} = require("apollo-server")

const typeDefs = gql`


type User {
    name: String!
    username: String!
    age: Int!
    nationality: String
    friends: [User!]!
    favoriteMovies: [Movie!]
}

type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

type Query{
    users: [User!]!
    user(id: ID!) : User
    movies: [Movie!]!
    movie(name: String!): Movie
}

input CreateUserInput{
    name: String!
    username: String!
    age: Int
    nationality: String = "Germany"
}

input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }


type Mutation{
    createUser(input: CreateUserInput): User
    updateUsername(input: UpdateUsernameInput): User
}

`

module.exports = {typeDefs};