const express = require("express");
const app = express();
const db = require("./database/database");
const api = require("./routes/routes");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const yamljs = require("yamljs");
const swaggerDocs = yamljs.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`server is up at AZURE!!`);
});

app.use(cors());
app.use("/api", api);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});



