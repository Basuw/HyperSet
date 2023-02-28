const player = {
    name: ""
};

const socket = io();


const username = document.querySelector('#username').value;
const form = document.querySelector('#form');

form.on('submit', (e) => {
    e.preventDefault();

    player.username = usernameInput.value;
    socket.emit('playerData', player);
});

console.log("coucou");
