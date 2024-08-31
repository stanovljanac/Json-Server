const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = jsonServer.create();

// const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(
  cors({
    origin: "https://first-react-code.vercel.app/*", // Or specify your front-end URL
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(middlewares);
app.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// Exportuj server
module.exports = app;
