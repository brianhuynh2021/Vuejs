const app = Vue.createApp({
    //template: '<h2>I am the template</h2>'
    data() {
        // return {
        //     showBooks: true,
        //     title: 'The Final Empire01',
        //     author: 'Brian Huynh',
        //     age: 45,
        //     x: 0,
        //     y: 0
        // }
        return {
            url: "http://www.thenetninja.co.uk",
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patric rothfuss', img: 'assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'branson sanderson', img: 'assets/2.jpg', isFav: false},
                { title: 'the final empire', author: 'brian huynh', img: 'assets/3.jpg', isFav: true},
                { title: 'never go back', author: 'ross keimo', img: 'assets/4.jpg', isFav: false}
            ]
        }

    },
    methods: {
        changeTitle(bookTitle) {
            this.title = 'Change the book tilte to tested ' + bookTitle
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book)=> book.isFav)
        }
    },
})

app.mount("#app")