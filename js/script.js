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
        this.albums.sort( function ( alb1, alb2 ) {
          if ( alb2.year - alb1.year == 0 ) {
            let tempArr = [ alb1.title, alb2.title ];
            tempArr.sort();
            if ( alb1.title == tempArr[0] ) {
              return -1;
            } else {
              return 1;
            }
          }
          return alb2.year - alb1.year;
        })
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
