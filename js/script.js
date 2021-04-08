// Attraverso una chiamata ajax all’API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.

const app = new Vue ({
  el: '#main-app',
  data: {
    albums: [],
    genres: [],
    filterGenre: 'All',
  },
  methods: {
    getAlbums() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then( (arr) => {
        this.albums = arr.data.response;
        this.removeDupesGenre();
      });
    },

    removeDupesGenre() {
      this.albums.forEach( (item) => {
        if ( this.genres.includes(item.genre) == false ) {
          this.genres.push(item.genre);
        }
      });
    },
  },
  mounted() {
    this.getAlbums();
  },
});
