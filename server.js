const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const path = require("path");

const app = express();

//Allow cross-origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

//set static folder
app.use(express.static('public'));
//when ever any route is hit, it will redirect to 
//react's index.html page in the public folder
//the folder afte we build
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public","index.html"));
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));