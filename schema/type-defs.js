const {gql} = require("apollo-server")

const typeDefs = gql`

# Definine User Type
type User {
  id: ID!
  name: String!
  username: String!
  email: String!
  age: Int!
  uploads: [Video!]
}

# Define Video Type
type Video {
  id: ID!
  title: String!
  description: String
  postedBy: User!
  views: Int!
  comments: [Comment!]
}

# Define Comment Type
type Comment {
  id: ID!
  content: String!
  postedBy: User!
  video: Video!
}

# Root Query Type
type Query {
  users: [User!]
  user(id: ID!): User
  videos: [Video!]
  video(id: ID!): Video
  comments(videoId: ID!): [Comment!]
}

`

module.exports = {typeDefs};