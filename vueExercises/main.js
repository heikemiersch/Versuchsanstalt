const app = new Vue({
    el: "#app",
    data: {
        isTrue: true,
        message: "Hello Vue",
        number: 30,
        x: 0,
        y: 0
    },
    methods: {
        // toggleIsTrue: function () {
        //     this.isTrue = !this.isTrue
        // },
        // methodThatReturnsSomething: function () {
        //     return "Blahblah"
        // }
        add: function (inc) {
            this.number += inc
        },
        substract: function (dec) {
            this.number -= dec
        },
        updateXY: function (event) {
            this.x = event.offsetX
            this.y = event.offsetY
        },
        createAlert() {
            alert("alt + enter pressed")
        }
    }
});