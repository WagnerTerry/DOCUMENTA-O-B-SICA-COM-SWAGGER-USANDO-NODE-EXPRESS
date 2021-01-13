const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: "1.0.0",
    },
  },
  apis: ["app.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
// console.log(swaggerDocs);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /books:
 *  get:
 *      description: Get all books
 *      responses:
 *          200:
 *              description: Success
 */

app.get("/books", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Zelda",
    },
  ]);
});

/**
 * @swagger
 * /books:
 *  post:
 *      description: Create a new books
 *      parameters:
 *        - name: title
 *          descriptions: title of the book
 *          in: formData
 *          required: true
 *          type: string
 *      responses:
 *          201:
 *              description: Created
 */

app.post("/books", (req, res) => {
  res.status(201).send();
});

/**
 * @swagger
 * /books:
 *  put:
 *      description: update book
 *      responses:
 *          203:
 *              description: Updated
 */

app.put("/books", (req, res) => {
  res.status(203).send();
});

/**
 * @swagger
 * /books:
 *  delete:
 *      description: delete book
 *      responses:
 *          200:
 *              description: Deleted
 */

app.delete("/books", (req, res) => {
  res.send();
});

app.listen(5000, () => console.log("Listening on 5000"));
