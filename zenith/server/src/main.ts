import app from "./app";

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port: %s`, PORT);
});
