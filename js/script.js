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

console.log(slides);

// ------------------------------------------------------- //

const appVue = new Vue ({
    el: "#app",

    // App data
    data: {
        slides: slides,
        currentSlideImage: slides[0].image,
        currentSlideTitle: slides[0].title,
        currentSlideText: slides[0].text,
        indexSlide: 0,
    },

    // App methods
    methods: {
        nextSlide: function() {
            this.indexSlide++;
            if (this.indexSlide >= this.slides.length) {
                this.indexSlide = 0;
            }
            this.currentSlideImage = this.slides[this.indexSlide].image;
            this.currentSlideTitle = this.slides[this.indexSlide].title;
            this.currentSlideText = this.slides[this.indexSlide].text;
            
        },
        prevSlide: function() {
            if (this.indexSlide === 0) {
                console.log(this.indexSlide);
                this.indexSlide = this.slides.length - 1;
            } else {
                this.indexSlide--;
            console.log(this.indexSlide);
            }
            this.currentSlideTitle = this.slides[this.indexSlide].title;
            this.currentSlideText = this.slides[this.indexSlide].text;
            this.currentSlideImage = this.slides[this.indexSlide].image;
        },
    },

});