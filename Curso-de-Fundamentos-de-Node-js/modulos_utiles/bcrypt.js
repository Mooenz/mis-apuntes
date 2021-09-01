const bcrypt = require('bcrypt');

const passworld = '1234Segura';

bcrypt.hash(passworld, 10, function(error, hash) {
  console.log(hash);

  bcrypt.compare(passworld, hash, function(err, res) {
    console.log(res)
  });
});