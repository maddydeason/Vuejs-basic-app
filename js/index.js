var card = new Vue({
    el: "#card",
    data: {
        title: "Books by Brandon Sanderson",
        items: [
            { text: "Way of Kings" },
            { text: "Mistborn" },
            { text: "Elantris" }
        ]
    },
    methods: {
        addItem: function() {
            var input = document.getElementById('itemForm');

            if (input.value !== '') {
                this.items.push({
                    text: input.value
                })
                input.value = '';
            }
        },
        deleteItem: function(index) {
            this.items.splice(index, 1);
        }
    }
})
