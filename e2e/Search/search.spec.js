var Search = require('./search.po.js'),
    Menu   = require('../Menu/menu.po.js')

describe('Search tests', function() {

 Menu = new Menu();
 Search = new Search();

  browser.get('http://localhost:8080');

  it('The header will display All pokemons', function() {
     Menu.openMenu.click();
     Menu.getMenuItem('allPokemons').click(); 
     expect(Menu.getMenuTitle.getText()).toContain("ALL POKEMONS")
  });

  it('Should be 151 pokemons',function(){
      browser.waitForAngular();
      expect(Search.pokeid.count()).toBe(151);
  });

  it('Each pokemon should have id, name, image and type and order by descending', function() {
    
      expect(Search.pokeid.get(0).getText()).toBe('001');
      expect(Search.pokename.get(0).getText()).toBe('Bulbasaur');
      expect(Search.pokeimage.get(0).getAttribute('src')).toContain('001.png');
      expect(Search.poketype.get(0).getText()).toBe("Grass");
      expect(Search.poketype.get(1).getText()).toBe("Poison");

      //Order by ascending
      expect(Search.pokeid.get(1).getText()).toBe('002');
      expect(Search.pokeid.get(2).getText()).toBe('003');
      expect(Search.pokeid.get(3).getText()).toBe('004');
      expect(Search.pokeid.get(4).getText()).toBe('005');
  });

 
  it('After click on the order button the list must be order by descending' , function () {
     Search.arrowup.click();
     browser.waitForAngular();
     expect(Search.pokeid.first().getText()).toBe('151');
  })
  

  it('After click again on the order button the list must be order by ascending', function(){
    Search.arrowup.click();
    browser.waitForAngular();
    expect(Search.pokeid.first().getText()).toBe('001');
  })

  it('After I type something I should recieve the correct pokemon',function () {
    Search.searchInput.sendKeys("Bulbasaur");
    expect(Search.pokename.first().getText()).toBe('Bulbasaur');
  })
  
});