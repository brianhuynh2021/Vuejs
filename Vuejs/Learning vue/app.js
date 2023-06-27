const app = Vue.createApp({
    //template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'The Final Empire01',
            author: 'Brian Huynh',
            age: 45
        }
    },
    methods: {
        changeTitle(bookTitle) {
            this.title = 'Change the book tilte to tested ' + bookTitle
        }
    }
})

app.mount("#app")