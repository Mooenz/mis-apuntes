const messages = ["Jose", "Ana", "Jeisca", "Diego", "Laura", "Kevin", "Paulina", "Manuel", "Carlos"];

const randomMSG = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMSG };
