const {gql} = require("apollo-server")

const typeDefs = gql`

# Definine User Type
type User {
  id: ID!
  username: String!
  email: String!
  age: Int!
  uploads: [Video!]
  following: [User!]
}

# Define Video Type
type Video {
  id: ID!
  title: String!
  description: String
  url: String!
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
  users: [User!]!
  user(id: ID!): User
  videos: [Video!]!
  video(id: ID!): Video
  comments(videoId: ID!): [Comment!]!
}

# Root Mutation Type
type Mutation {
  addUser(username: String!, email: String!): User!
  addVideo(title: String!, description: String, url: String!, userId: ID!): Video!
  addComment(content: String!, videoId: ID!, userId: ID!): Comment!
}

`

module.exports = {typeDefs};