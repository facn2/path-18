const app = require('./server.js');

const PORT = process.env.PORT || 9876;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
