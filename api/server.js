const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");

const app = jsonServer.create();

const dbPath = path.join(__dirname, "db.json");
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

// Omogući CORS
app.use(cors());
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
