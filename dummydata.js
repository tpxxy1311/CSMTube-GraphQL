const Users = [
    {
      id: 1,
      name: "Max Mustermann",
      username: "max_muster17",
      email: "max.mustermann@csmtube.com",
      age: 30,
      uploads: [],
      following: []
    },
    {
      id: 2,
      name: "Erika Schulz",
      username: "erika.s",
      email: "erika.schulz@csmtube.com",
      age: 25,
      uploads: [],
      following: []
    },
    {
      id: 3,
      name: "David Lee",
      username: "davidlee",
      email: "david.lee@csmtube.com",
      age: 42,
      uploads: [],
      following: []
    },
    {
      id: 4,
      name: "Anna Kim",
      username: "anna_kim237",
      email: "anna.kim@csmtube.com",
      age: 28,
      uploads: [],
      following: []
    },
    {
      id: 5,
      name: "DAZN",
      username: "dazn_official",
      email: "dazn@csmtube.com",
      age: 35,
      uploads: [],
      following: []
    }  
]

const Videos = [
  {
    id: 1,
    title: "Highlights: Real Madrid - FC Bayern München",
    description: "Zusammenfassung des Championsleague Halbfinals vom 08.05.2024",
    postedBy: 5,
    views: 120000,
    comments: []
  },
  {
    id: 2,
    title: "GraphQL Grundlagenkurs",
    description: "Einführung in die Datenabfragesprache",
    postedBy: 2,
    views: 500,
    comments: []
  },
  {
    id: 3,
    title: "Reisevlog: Paris",
    description: "Mit dabei auf unserem Städetrip",
    postedBy: 1,
    views: 20,
    comments: []
  },
  {
    id: 4,
    title: "Koch-Tutorial: Pasta Carbonara",
    description: "Einfaches Rezept für ein leckeres Essen",
    postedBy: 3,
    views: 8000,
    comments: []
  },
  {
    id: 5,
    title: "Ich teste ein Drei Sterne Restaurant ",
    description: "Erster Eindruck und Bewertung",
    postedBy: 3,
    views: 1500,
    comments: []
  }
]

const Comments = [
    {
      id: 1,
      content: "Tolles Video!",
      postedBy: 3,
      video: 3
    },
    {
      id: 2,
      content: "Kannst du noch mehr Rezepte teilen?",
      postedBy: 4,
      video: 4
    },
    {
      id: 3,
      content: "Sehr gutes Tutorial für Anfänger",
      postedBy: 2,
      video: 2
    },
    {
      id: 4,
      content: "Kannst du auch einen Vergleichsvideo zu REST machen?",
      postedBy: 4,
      video: 2
    },
    {
      id: 5,
      content: "Schade! Hätte mich auf ein deutsches Finale gefreut",
      postedBy: 1,
      video: 1
    },
]

module.exports = { Users, Videos, Comments};