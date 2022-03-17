const app = new Vue({
  el: '#app',
  data: {
    activeIndex: 0,
    search: '',
    newMsg: {
      data: '',
      text: '',
      sent: true,
    },
    replyMsg: {
      data: '',
      text: 'Ok',
      sent: false,
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
        messages: [
          {
            text: 'Ciao prova a scrivere un messaggio!',
            sent: true,
          },
          {
            text: 'So rispondere solo: OK',
            sent: false,
          },
        ],
      },
      {
        id: 1,
        name: 'Michele',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_2.jpg',
        messages: [
          {
            text: 'Ciao prova a scrivere un messaggio!',
            sent: true,
          },
          {
            text: 'So rispondere solo: OK',
            sent: false,
          },
        ],
      },
      {
        id: 2,
        name: 'Alessandro L.',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_4.jpg',
        messages: [],
      },
      {
        id: 3,
        name: 'Alessandro B.',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_8.jpg',
        messages: [],
      },
      {
        id: 4,
        name: 'Claudia',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_5.jpg',
        messages: [],
      },
      {
        id: 5,
        name: 'Federico',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_6.jpg',
        messages: [],
      },
      {
        id: 6,
        name: 'Davide',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_7.jpg',
        messages: [],
      },
      {
        id: 7,
        name: 'Giulio',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_2.jpg',
        messages: [],
      },
      {
        id: 8,
        name: 'Claudio',
        text: 'Ultimo messaggio inviato',
        img: 'img/avatar_3.jpg',
        messages: [],
      },
    ],
    // dati notifica desktop
    deskNotify: {
      title: 'Ricevi notifiche di nuovi messaggi',
      sub: 'Attiva notifiche desktop',
    },
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
    // risposta
    reply() {
      this.users[this.activeIndex].messages.push({ ...this.replyMsg });
    },
    // invio messaggio
    sendMsg() {
      if (this.newMsg.text.length < 1) return;
      this.users[this.activeIndex].messages.push({ ...this.newMsg });
      this.scrollToBottom();
      this.newMsg.text = '';
      // chiamata risposta dopo un secondo
      setTimeout(this.reply, 3000);
    },
    getSentTime(log) {
      return dayjs(log.date).format('HH:mm');
    },
    scrollToBottom() {
      const container = this.$el.querySelector('.textArea');
      container.scrollTop = container.scrollHeight;
    },
    // seleziona una chat da aprire
    selectedChat(key) {
      this.activeIndex = key;
    },
  },
});
