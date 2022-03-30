const messages = [
    "Carlos",
    "Valeria",
    "Miryan",
    "Liceth",
    "Karla",
    "Rosario"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };