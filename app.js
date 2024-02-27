import express from 'express';
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('<h1>esm JavaScritpt</h1>');
})


app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
})
