import express from "express";

const app = express();
const PORT = 3000;

type NameTag = {
  firstName: string,
}

app.get("/greet/:name", (req, res) => {
  const name: string = req.params.name;

  const nameTag: NameTag = {
    firstName: name
  };

  return res.send(
    `Hello, ${nameTag.firstName}! Your digital name-tag is ready.`
  );
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
