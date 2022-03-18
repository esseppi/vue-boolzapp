const app = new Vue({
  el: '#app',
  data: {
    // LISTA CONTATTI
    users: [
      {
        id: '',
        isShow: true,
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
        isShow: true,
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
        isShow: true,
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
        isShow: true,
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
        isShow: true,
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
        isShow: true,
        name: 'Federico',
        text: '',
        lastLog: '',
        img: 'img/avatar_6.jpg',
        messages: [],
      },
      {
        id: '',
        isShow: true,
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
        isShow: true,
        name: 'Giulio',
        text: '',
        lastLog: '',
        img: 'img/avatar_2.jpg',
        messages: [],
      },
      {
        id: '',
        isShow: true,
        name: 'Claudio',
        text: '',
        lastLog: '',
        img: 'img/avatar_3.jpg',
        messages: [],
      },
    ],
    // indice di selezione chat
    activeIndex: 0,
    // interruttori visibilità
    deleteAllChat: false,
    addChatShow: false,
    showAddContact: 0,
    // dichiarazione variabili da usare nei metodi
    search: '',
    newImg: '',
    newName: '',
    // dati da inserire nel DOM
    deskNotify: {
      title: 'Ricevi notifiche di nuovi messaggi',
      sub: 'Attiva notifiche desktop',
    },
    // frasi di risposta random
    randomSentences: [
      'ciao bello di papà',
      'come stai?',
      'è da molto che non ci sentiamo',
      'mi manchi pure tu',
      'bello esco',
      'tu non esci?',
    ],
    // user loggato
    userLogged: {
      name: 'Salvatore',
      text: 'Ultimo messaggio inviato',
      img: 'img/avatar_8.jpg',
    },
  },
  methods: {
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
      this.getLastMsg();
      this.getLastLog();
      setTimeout(this.scrollToBottomMsg, 100);
      // chiamata risposta dopo un secondo
      setTimeout(this.reply, 1000, activeIndex);
    },
    // risposta automatica chiamata ad ogni sendMsg() nella chat indicizzata in QUEL momento
    reply(activeIndex) {
      let replyMsg = {
        date: luxon.DateTime.now().toISO().split('.')[0],
        text: this.randomSentences[
          Math.floor(Math.random() * this.randomSentences.length)
        ],
        sent: false,
        isShow: true,
      };
      this.users[activeIndex].messages.push(replyMsg);
      this.scrollToBottomMsg();
    },
    // aggiungo nuovo contatto/chat
    addChat() {
      let newUser = {
        id: this.users.length,
        isShow: true,
        name: this.newName,
        text: '',
        lastLog: '',
        img: this.newImg,
        messages: [],
      };
      if (this.newName.replace(/\s/g, '').length && this.newName != undefined) {
        this.users.push(newUser);
        this.showAddContact();
        this.newName = '';
        this.newImg = '';
      } else return;
      setTimeout(this.scrollToBottomContact, 100);
    },
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
    // scrolla verso il basso tutte le chat, è chiamata ad ogni nuovo sendMsg()
    scrollToBottomMsg() {
      const container = this.$el.querySelector('.textArea');
      container.scrollTop = container.scrollHeight;
    }, // scrolla verso il basso tutte le chat, è chiamata ad ogni nuovo sendMsg()
    scrollToBottomContact() {
      let containers = this.$el.querySelector('ul');
      containers.scrollTop = containers.scrollHeight;
    },
    // seleziona una chat da aprire
    selectedChat(key) {
      this.activeIndex = key;
      console.log(key);
      console.log(this.activeIndex);
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
    // modifico la data nel formato richiesto
    format(date) {
      let formattedDate = 'dd/MM/yyyy hh:mm';
      if (date != '') {
        return luxon.DateTime.fromISO(date).toFormat(formattedDate);
      }
    },
    // generazione automatica di un id per ogni contatto
    makeId() {
      this.users.forEach((user, i) => {
        user.id = i;
        i++;
        console.log(i);
      });
    },
    // menu eliminazione messaggio singolo
    isShow(message) {
      message.isShow = !message.isShow;
      setTimeout(this.isShow, 5000, message);
    },
    // eliminazione messaggio singolo
    deleteMsg(messageIndex) {
      this.users[this.activeIndex].messages.splice(messageIndex, 1);
      this.getLastMsg();
      this.getLastLog();
    },
    // menu eliminazione tutti i messaggi in chat
    deleteAllMsg() {
      this.users[this.activeIndex].messages = [];
      this.getLastMsg();
      this.getLastLog();
    },
    // eliminazione della chat corrente
    deleteThisChat() {
      this.users[this.activeIndex].isShow =
        !this.users[this.activeIndex].isShow;
      this.activeIndex = 0;
      // if (this.activeIndex == this.users.length - 1) {
      //   activeIndex = this.activeIndex--;
      // } else if (this.activeIndex < this.users.length - 1) {
      //   activeIndex = this.activeIndex++;
      // }
    },
    // eliminazione tutta chat
    toggleInvisible() {
      this.deleteAllChat = !this.deleteAllChat;
    },
    // visibilità input per aggiunta nuova chat
    showAddContact() {
      this.addChatShow = !this.addChatShow;
    },
  },
  // recupero ultimi mesaggi e ultimi log al caricamento della pagina
  created() {
    this.getLastMsg();
    this.getLastLog();
    this.makeId();
  },
});
