const app = new Vue({
  el: '#app',
  data: {
    activeIndex: 0,
    search: '',
    userLogged: {
      name: 'Salvatore',
      text: 'Ultimo messaggio inviato',
      img: 'img/avatar_8.jpg',
    },
    users: [
      {
        name: 'Fabio',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_3.jpg',
      },
      {
        name: 'Michele',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_2.jpg',
      },
      {
        name: 'Alessandro L.',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_4.jpg',
      },
      {
        name: 'Alessandro B.',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_8.jpg',
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
      {
        name: 'Davide',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_7.jpg',
      },
      {
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
    filterUsers(search) {
      if (search == '') {
        return this.users;
      } else {
        return this.users.filter((user) => {
          return user.name.toLowerCase().match(search.toLowerCase());
        });
      }
    },
    // seleziona una chat da aprire
    selectedChat(index) {
      this.activeIndex = index;
    },
  },
});
