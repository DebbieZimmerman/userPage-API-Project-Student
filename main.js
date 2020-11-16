const api = new APIManager()
console.log(api)
const load = function() {
    api.getUser()
    api.getQuote()
    api.getPokemon()
    api.getMeat()
}

const render = new Renderer()
const display = function(){
    render._renderUsers(api.data.user)
    render._renderFriends(api.data.friends)
    render._renderQuote(api.data.quote)
    render._renderPokemon(api.data.pokemon)
    render._renderMeat(api.data.meat)
}
