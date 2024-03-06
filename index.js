const express = require('express');
const app = express();

express.listen(3000, () => {
  console.log('listening on port 3000')
})