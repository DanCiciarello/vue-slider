const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

// ------------------------------------------------------- //

const appVue = new Vue ({
    el: "#app",

    // App data ----------------------------
    data: {
        slides: slides,
        currentSlideImage: slides[0].image,
        currentSlideTitle: slides[0].title,
        currentSlideText: slides[0].text,
        indexSlide: 0,
    },

    // App methods ----------------------------
    methods: {

        // Freccia next slide
        nextSlide: function() {
            // Incremento l'indice della slide
            this.indexSlide++;
            // Controllo se è arrivata alla fine dell'array
            if (this.indexSlide >= this.slides.length) {
                // Nel caso, faccio tornare l'indice all'inizio dell'array
                this.indexSlide = 0;
            }
            // Imposto le variabili dell'immagine mostrata
            this.currentSlideImage = this.slides[this.indexSlide].image;
            this.currentSlideTitle = this.slides[this.indexSlide].title;
            this.currentSlideText = this.slides[this.indexSlide].text;
            
        },

        // Freccia prev slide
        prevSlide: function() {
            // Controllo se l'indice è arrivato all'inizio dell'array
            if (this.indexSlide === 0) {
                // Nel caso, faccio tornare l'indice alla fine dell'array
                this.indexSlide = this.slides.length - 1;
            } 
            // Altrimenti decremento l'indice
            else {
                this.indexSlide--;
            }
            // Imposto le variabili dell'immagine mostrata
            this.currentSlideTitle = this.slides[this.indexSlide].title;
            this.currentSlideText = this.slides[this.indexSlide].text;
            this.currentSlideImage = this.slides[this.indexSlide].image;
        },

        // Bonus: mostra immagine al click sulla thumb
        selectedImage: function(index) {
            // Recupero l'indice dal click
            this.indexSlide = index;
            // Imposto le variabili dell'immagine mostrata
            this.currentSlideTitle = this.slides[this.indexSlide].title;
            this.currentSlideText = this.slides[this.indexSlide].text;
            this.currentSlideImage = this.slides[this.indexSlide].image;
        }
    },

});