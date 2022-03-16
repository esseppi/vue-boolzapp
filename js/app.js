const app = new Vue({
  el: '#app',
  data: {
    activeIndex: 0,
    search: '',
    userLogged: {
      name: 'Sofia',
      text: 'Ultimo messaggio inviato',
      img: 'img/avatar_1.jpg',
    },
    deskNotify: {
      title: 'Ricevi notifiche di nuovi messaggi',
      sub: 'Attiva notifiche desktop',
    },
    usersArray: [],
  },
  methods: {
    fillArrays() {
      userz.forEach((element) => {
        this.usersArray.push(element);
      });
    },

    filterUsers(search) {
      if (search == '') {
        return this.usersArray;
      } else {
        return this.usersArray.filter((user) => {
          return user.name.toLowerCase().match(search.toLowerCase());
        });
      }
    },
    selectedChat(index) {
      this.activeIndex = index;
    },
  },
  created() {
    this.fillArrays();
  },
});
