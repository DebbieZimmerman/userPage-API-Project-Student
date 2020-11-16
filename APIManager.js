class APIManager {
    constructor() {
        this.data = {
            user: {
            },
            friends: [],
            quote: "",
            pokemon: {
            },
            meat: ""
        }
    }
    
    // gets user and friends
    getUser() {
        $.ajax({
           method: "GET",
           url: 'https://randomuser.me/api/?results=8',
            success: (info) => {
                this.data.user.firstName = info.results[0].name.first,
                this.data.user.lastName = info.results[0].name.last,
                this.data.user.city = info.results[0].location.city,
                this.data.user.state = info.results[0].location.state,
                this.data.user.picture = info.results[0].picture.medium
                for(let result of info.results) {
                    name = result.name.first + ' ' + result.name.last
                    this.data.friends.push(name)
                }
                this.data.friends.splice(0, 1)
            },
            error: function (xhr, text, error){
                alert(text)
            }
        })
    }

    getQuote() {
        $.ajax({
           method: "GET",
           url: 'https://api.kanye.rest',
            success: (info) => {
                this.data.quote = info.quote 
            },
            error: function (xhr, text, error){
                alert(text)
            }
        })
    }

    getPokemon() {
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 149)}`,
            success: (info) => {
                this.data.pokemon.name = info.name
                this.data.pokemon.picture = info.sprites.front_default
            },
            error: function (xhr, text, error){
                alert(text)
            }
        })
    }
    
    getMeat() {
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1&format=html',
            success: (info) => {
                info = info.replace('<p>','')
                info = info.replace('</p>','')
                this.data.meat = info
            },
            error: function (xhr, text, error){
                alert(text)
            }
        })
    }
}
