const app = new Vue({
  el: '#app',
  data: {
    activeIndex: 0,
    search: '',
    newMsg: {
      date: '',
      text: '',
      sent: true,
    },
    replyMsg: {
      date: '',
      text: 'Ok',
      sent: false,
    },
    userLogged: {
      name: 'Salvatore',
      text: 'Ultimo messaggio inviato',
      img: 'img/avatar_8.jpg',
    },
    // lista utenti
    users: [
      {
        id: 0,
        name: 'Fabio',
        text: '',
        lastLog: '',
        img: 'img/avatar_3.jpg',
        messages: [
          {
            date: '2022-02-17T03:11:57.000+01:00',
            text: 'Ciao prova a scrivere un messaggio!',
            sent: true,
          },
          {
            date: '2022-02-17T09:09:57.000+01:00',
            text: 'So rispondere solo: OK',
            sent: false,
          },
        ],
      },
      {
        id: 1,
        name: 'Michele',
        text: '',
        lastLog: '',
        img: 'img/avatar_2.jpg',
        messages: [
          {
            date: '2022-02-17T03:11:57.000+01:00',
            text: 'Ciao usciamo?',
            sent: true,
          },
          {
            date: '2022-02-17T09:09:57.000+01:00',
            text: 'Ci penso',
            sent: false,
          },
        ],
      },
      {
        id: 2,
        name: 'Alessandro L.',
        text: '',
        lastLog: '',
        img: 'img/avatar_4.jpg',
        messages: [
          {
            date: '2022-01-17T08:11:57.000+01:00',
            text: 'Ciao usciamo?',
            sent: true,
          },
          {
            date: '2022-02-17T04:09:57.000+01:00',
            text: 'Non mi va',
            sent: false,
          },
        ],
      },
      {
        id: 3,
        name: 'Alessandro B.',
        text: '',
        lastLog: '',
        img: 'img/avatar_8.jpg',
        messages: [
          {
            date: '2022-02-17T03:11:57.000+01:00',
            text: 'Ciao usciamo?',
            sent: true,
          },
          {
            date: '2022-02-17T09:09:57.000+01:00',
            text: 'Dove Andiamo?',
            sent: false,
          },
        ],
      },
      {
        id: 4,
        name: 'Claudia',
        text: '',
        lastLog: '',
        img: 'img/avatar_5.jpg',
        messages: [
          {
            date: '2022-02-17T03:11:57.000+01:00',
            text: 'Ciao usciamo?',
            sent: true,
          },
          {
            date: '2022-02-17T09:09:57.000+01:00',
            text: 'Va bene',
            sent: false,
          },
        ],
      },
      {
        id: 5,
        name: 'Federico',
        text: '',
        lastLog: '',
        img: 'img/avatar_6.jpg',
        messages: [],
      },
      {
        id: 6,
        name: 'Davide',
        text: '',
        lastLog: '',
        img: 'img/avatar_7.jpg',
        messages: [
          {
            date: '2022-02-17T03:11:57.000+01:00',
            text: 'Ciao usciamo?',
            sent: true,
          },
          {
            date: '2022-02-17T09:09:57.000+01:00',
            text: 'Non saprei',
            sent: false,
          },
        ],
      },
      {
        id: 7,
        name: 'Giulio',
        text: '',
        lastLog: '',
        img: 'img/avatar_2.jpg',
        messages: [],
      },
      {
        id: 8,
        name: 'Claudio',
        text: '',
        lastLog: '',
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
    format(date) {
      let formattedDate = 'dd/MM/yyyy hh:mm';
      if (date != '') {
        return luxon.DateTime.fromISO(date).toFormat(formattedDate);
      }
    },
    // risposta
    reply() {
      let replyMsg = {
        date: luxon.DateTime.now().toISO().split('.')[0],
        text: 'ok',
        sent: false,
      };
      this.users[this.activeIndex].messages.push(replyMsg);
    },
    // invio messaggio
    sendMsg() {
      const activeChat = this.users[this.activeIndex];
      let newMsg = {
        date: luxon.DateTime.now().toISO().split('.')[0],
        text: activeChat.messages.text,
        sent: true,
      };
      if (this.users[this.activeIndex].messages.text.length < 1) return;
      activeChat.messages.push(newMsg);
      this.users[this.activeIndex].messages.text = '';
      this.scrollToBottom;
      this.getLastMsg();
      this.getLastLog();
      // chiamata risposta dopo un secondo
      setTimeout(this.reply, 1000);
    },
    scrollToBottom() {
      const container = this.$el.querySelector('.textArea');
      container.scrollTop = container.scrollHeight;
    },
    // seleziona una chat da aprire
    selectedChat(key) {
      this.activeIndex = key;
    },
    getLastMsg() {
      this.users.forEach((user) => {
        if (user.messages.length < 1) {
          user.text = '';
        } else {
          user.text = user.messages[user.messages.length - 1].text;
        }
      });
    },
    getLastLog() {
      this.users.forEach((user) => {
        if (
          user.messages.length < 1 ||
          user.messages[user.messages.length - 1].date == undefined
        ) {
          user.lastLog = '';
        } else {
          user.lastLog = user.messages[user.messages.length - 1].date;
        }
      });
    },
    makeId() {
      this.users.forEach((user, i) => {
        user.id = i;
        i++;
      });
    },
    isShow() {
      this.isShow = true;
    },
  },
  created() {
    this.getLastMsg();
    this.getLastLog();
    this.makeId();
  },
  updated() {
    this.getLastMsg();
  },
});
