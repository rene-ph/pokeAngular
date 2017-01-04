/**
 * Page object for the Search
 * @constructor
 */
var Search = function () {
 this.pokeid = element.all(by.binding("pkmid"));
 this.pokename = element.all(by.binding("pkmname"));
 this.pokeimage = element.all(by.tagName('img'));
 this.poketype = element.all(by.repeater('types in type'));
 this.arrowup = element(by.className('arrow-up'));
 this.searchInput = element(by.model('find.searchText'));
};

module.exports = Search;