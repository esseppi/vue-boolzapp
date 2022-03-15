const app = new Vue({
  el: '#app',
  data: {
    users: [
      {
        name: 'Michele',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_2.jpg',
      },
      {
        name: 'Fabio',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_3.jpg',
      },
      {
        name: 'Alessandro L.',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_4.jpg',
      },
      {
        name: 'Claudia',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_5.jpg',
      },
      {
        name: 'Federico',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_6.jpg',
      },
      {
        name: 'Davide',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_7.jpg',
      },
    ],
    userLogged: {
      name: 'Sofia',
      text: 'Ultimo messaggio inviato',
      img: 'img/avatar_1.jpg',
    },
  },
});
