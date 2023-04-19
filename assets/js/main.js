const { createApp } = Vue

createApp({
    data() {
        return {

            currentActive: 0,
            autoscroll: null,

            slides: [
                {
                active: true,
                image: 'assets/img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                active: false,
                image: 'assets/img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                active: false,
                image: 'assets/img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                active: false,
                image: 'assets/img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                active: false,
                image: 'assets/img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            
        }
    },
    created(){
        this.autoScrolling()
    },
    methods:{
        thumbOn() {
            if(this.slides[this.currentActive].active === true) {
                this.slides[this.currentActive].active = false;
            } else {
                this.slides[this.currentActive].active = true;
            }
        },
        back() {
            this.thumbOn();
            this.currentActive--;
            if(this.currentActive < 0) {
                this.currentActive = this.slides.length - 1;
            }
            this.thumbOn();
        },
        next() {
            this.thumbOn();
            this.currentActive++;
            if(this.currentActive === this.slides.length) {
                this.currentActive = 0;
            }
            this.thumbOn();
        },
        thumb(index) {
            this.thumbOn();
            this.currentActive = index;
            this.thumbOn();
        },
        autoScrolling() {
            this.autoscroll = setInterval( ()=>{
                this.next()
            }, 3000)
        },
    },

}).mount('#app')