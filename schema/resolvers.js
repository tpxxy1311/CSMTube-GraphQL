const {Users, Videos, Comments} = require("../dummydata")
const _ = require("lodash")

const resolvers = {
  //Query Resolvers
  Query: {
    //User Resolvers
    users: () => {
      return Users;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(Users, { id: Number(id) });
      return user;
    },
    //Video Resolvers
    videos: () => {
      return Videos;
    },
    video: (parent, args) => {
      const id = args.id;
      const video = _.find(Videos, { id: Number(id) });
      return video
    },
    //Comment Resolvers
    comments: (parent, args) => {
      const id = args.videoId;
      const comments = _.filter(Comments, { video: Number(id) });
      return comments;
    }
  },
  //Field Resolvers
  User: {
    uploads: (user) => Videos.filter(video => video.postedBy === user.id)
  },
  Video: {
    postedBy: (video) => Users.find(user => user.id === video.postedBy),
    comments: (video) => Comments.filter(comment => comment.video === video.id)
  },
  Comment: {
    postedBy: (comment) => Users.find(user => user.id === comment.postedBy),
    video: (comment) => Videos.find(video => video.id === comment.video)
  }
}

module.exports = {resolvers};