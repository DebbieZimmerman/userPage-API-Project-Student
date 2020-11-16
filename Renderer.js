
class Renderer {

    _renderUsers(user) {
        const source = $('#user-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({user})
        $('.user-container').empty().append(newHTML)
    }

    _renderFriends(friends) {
        const source = $('#friends-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({friends})
        $('.friends-container').empty().append(newHTML)

    }

    _renderQuote(quoteInfo) {
        const source = $('#quote-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({quoteInfo})
        $('.quote-container').empty().append(newHTML)
    }

    _renderPokemon(pokemon) {
        const source = $('#pokemon-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({pokemon})
        $('.pokemon-container').empty().append(newHTML)
    }

    _renderMeat(meat) {
        const source = $('#meat-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({meat})
        $('.meat-container').empty().append(newHTML)
    }

    // render(data) {
    //     //invokes all the individual _render methods
    // }
}


