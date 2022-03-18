const app = new Vue({
  el: '#app',
  data: {
    activeIndex: 0,
    deleteAllChat: false,
    addChatShow: false,
    search: '',
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
            isShow: true,
          },
          {
            date: '2022-02-17T09:09:57.000+01:00',
            text: 'So rispondere solo: OK',
            sent: false,
            isShow: true,
          },
        ],
      },
      {
        id: '',
        name: 'Michele',
        text: '',
        lastLog: '',
        img: 'img/avatar_2.jpg',
        messages: [
          {
            date: '2022-02-17T03:11:57.000+01:00',
            text: 'Ciao usciamo?',
            sent: true,
            isShow: true,
          },
          {
            date: '2022-02-17T09:09:57.000+01:00',
            text: 'Ci penso',
            sent: false,
            isShow: true,
          },
        ],
      },
      {
        id: '',
        name: 'Alessandro L.',
        text: '',
        lastLog: '',
        img: 'img/avatar_4.jpg',
        messages: [
          {
            date: '2022-01-17T08:11:57.000+01:00',
            text: 'Ciao usciamo?',
            sent: true,
            isShow: true,
          },
          {
            date: '2022-02-17T04:09:57.000+01:00',
            text: 'Non mi va',
            sent: false,
            isShow: true,
          },
        ],
      },
      {
        id: '',
        name: 'Alessandro B.',
        text: '',
        lastLog: '',
        img: 'img/avatar_8.jpg',
        messages: [
          {
            date: '2022-02-17T03:11:57.000+01:00',
            text: 'Ciao usciamo?',
            sent: true,
            isShow: true,
          },
          {
            date: '2022-02-17T09:09:57.000+01:00',
            text: 'Dove Andiamo?',
            sent: false,
            isShow: true,
          },
        ],
      },
      {
        id: '',
        name: 'Claudia',
        text: '',
        lastLog: '',
        img: 'img/avatar_5.jpg',
        messages: [
          {
            date: '2022-02-17T03:11:57.000+01:00',
            text: 'Ciao usciamo?',
            sent: true,
            isShow: true,
          },
          {
            date: '2022-02-17T09:09:57.000+01:00',
            text: 'Va bene',
            sent: false,
            isShow: true,
          },
        ],
      },
      {
        id: '',
        name: 'Federico',
        text: '',
        lastLog: '',
        img: 'img/avatar_6.jpg',
        messages: [],
      },
      {
        id: '',
        name: 'Davide',
        text: '',
        lastLog: '',
        img: 'img/avatar_7.jpg',
        messages: [
          {
            date: '2022-02-17T03:11:57.000+01:00',
            text: 'Ciao usciamo?',
            sent: true,
            isShow: true,
          },
          {
            date: '2022-02-17T09:09:57.000+01:00',
            text: 'Non saprei',
            sent: false,
            isShow: true,
          },
        ],
      },
      {
        id: '',
        name: 'Giulio',
        text: '',
        lastLog: '',
        img: 'img/avatar_2.jpg',
        messages: [],
      },
      {
        id: '',
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
    // filtro chat agendo direttamente sull'object 'users'
    filterUsers(search) {
      if (search == '') {
        return this.users;
      } else {
        return this.users.filter((user) => {
          return user.name.toLowerCase().match(search.toLowerCase());
        });
      }
    },
    // modifico la data nel formato richiesto
    format(date) {
      let formattedDate = 'dd/MM/yyyy hh:mm';
      if (date != '') {
        return luxon.DateTime.fromISO(date).toFormat(formattedDate);
      }
    },
    // risposta automatica chiamata ad ogni sendMsg() nella chat indicizzata in QUEL momento
    reply(activeIndex) {
      let replyMsg = {
        date: luxon.DateTime.now().toISO().split('.')[0],
        text: 'ok',
        sent: false,
        isShow: true,
      };
      this.users[activeIndex].messages.push(replyMsg);
      this.scrollToBottom();
    },
    // invio messaggio e lo inserisco nell'object della chat indicizzata
    sendMsg(activeIndex) {
      const activeChat = this.users[this.activeIndex];
      let newMsg = {
        date: luxon.DateTime.now().toISO().split('.')[0],
        text: activeChat.messages.text,
        sent: true,
        isShow: true,
      };
      let str = this.users[this.activeIndex].messages.text;
      if (!str.replace(/\s/g, '').length) return;
      activeChat.messages.push(newMsg);
      this.users[this.activeIndex].messages.text = '';
      this.scrollToBottom();
      this.getLastMsg();
      this.getLastLog();
      // chiamata risposta dopo un secondo
      setTimeout(this.reply, 3000, activeIndex);
    },
    // scrolla verso il basso tutte le chat, è chiamata ad ogni nuovo sendMsg()
    scrollToBottom() {
      const container = this.$el.querySelector('.textArea');
      container.scrollTop = container.scrollHeight;
    },
    // seleziona una chat da aprire
    selectedChat(key) {
      this.activeIndex = key;
    },
    // recupero ultimo messaggio in una chat
    getLastMsg() {
      this.users.forEach((user) => {
        if (user.messages.length < 1) {
          user.text = '';
        } else {
          user.text = user.messages[user.messages.length - 1].text;
        }
      });
    },
    // recupero data di ultimo messaggio in una chat
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
    // generazione automatica di un id per ogni contatto
    makeId() {
      this.users.forEach((user, i) => {
        user.id = i;
        i++;
      });
    },
    // menu eliminazione messaggio singolo
    isShow(message) {
      message.isShow = !message.isShow;
    },
    // eliminazione messaggio singolo
    deleteMsg(messageIndex) {
      this.users[this.activeIndex].messages.splice(messageIndex, 1);
      this.getLastMsg();
      this.getLastLog();
    },
    // menu eliminazione tutta chat
    deleteAllMsg() {
      this.users[this.activeIndex].messages = [];
      this.getLastMsg();
      this.getLastLog();
    },
    // eliminazione tutta chat
    toggleInvisible() {
      this.deleteAllChat = !this.deleteAllChat;
    },
    // visibilità input per aggiunta nuova chat
    showAddContact() {
      this.addChatShow = !this.addChatShow;
    },

    // aggiungo nuovo contatto/chat
    addChat() {
      if (this.newImg == '' || this.newImg != undefined) {
        this.newImg = 'https://picsum.photos/seed/picsum/200/300';
      }
      console.log(this.newImg);
      let newUser = {
        id: this.users.length,
        name: this.newName,
        text: '',
        lastLog: '',
        img: this.newImg,
        messages: [],
      };
      if (this.newName.replace(/\s/g, '').length && this.newName != undefined) {
        this.users.push(newUser);
        this.showAddContact();
      } else return;
      this.newName = '';
      this.newImg = '';
    },
  },
  // recupero ultimi mesaggi e ultimi log al caricamento della pagina
  created() {
    this.getLastMsg();
    this.getLastLog();
    this.makeId();
  },
  updated() {
    this.getLastMsg();
  },
});
