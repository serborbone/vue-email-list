const root = new Vue({

    el: '#app',
    data: {

      emailRandom: [],

    },

    methods: {

        getEmail () {

            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

                .then((response) => {
                    
                    console.log(response);
                    this.emailRandom.push(response.data.response);

                })
                .catch(function (error) {
                
                console.log(error);
                })
                .then(function () {
                
                })

            }

        },

        callList () {

            setTimeout(this.getEmail, 500);

        }

    },
        

})