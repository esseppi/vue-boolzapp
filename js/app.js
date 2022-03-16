const app = new Vue({
  el: '#app',
  data: {
    activeIndex: 0,
    search: '',
    newMsg: {
      date: '',
      message: '',
      sent: true,
    },
    userLogged: {
      name: 'Salvatore',
      text: 'Ultimo messaggio inviato',
      img: 'img/avatar_8.jpg',
    },
    users: [
      {
        id: 0,
        name: 'Fabio',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_3.jpg',
      },
      {
        id: 1,
        name: 'Michele',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_2.jpg',
        messages: [
          {
            text: 'Lorem Lorem',
            sent: true,
          },
          {
            text: 'Lorem Lorem',
            sent: false,
          },
        ],
      },
      {
        id: 2,
        name: 'Alessandro L.',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_4.jpg',
      },
      {
        id: 3,
        name: 'Alessandro B.',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_8.jpg',
      },
      {
        id: 4,
        name: 'Claudia',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_5.jpg',
      },
      {
        id: 5,
        name: 'Federico',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_6.jpg',
      },
      {
        id: 6,
        name: 'Davide',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_7.jpg',
      },
    ],
    deskNotify: {
      title: 'Ricevi notifiche di nuovi messaggi',
      sub: 'Attiva notifiche desktop',
    },
    usersArray: [],
  },
  methods: {
    // filtro chat
    filterUsers(search) {
      if (search == '') {
        return this.users;
      } else {
        return this.users.filter((user) => {
          return user.name.toLowerCase().match(search.toLowerCase());
        });
      }
    },
    postSentMessage(newMessage) {
      console.log(...this.newMessage);
      this.newMessage = '';
    },
    postMessage(newMessage) {
      this.users[activeIndex].messages.push(newMessage);
    },
    // seleziona una chat da aprire
    selectedChat(key) {
      this.activeIndex = key;
    },
  },
});
