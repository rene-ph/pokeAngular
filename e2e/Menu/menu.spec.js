var Menu = require('./menu.po.js'),
    MenuMocks = require ('./menu.mock.js');

describe('Menu tests', function() {

  Menu = new Menu();
  MenuMocks = new MenuMocks();

  browser.get('http://localhost:8080');

  it('should appear the close icon after clicked open', function() {
    Menu.openMenu.click();
    expect(Menu.closeMenu.getText()).toBe('X');
  });

  it('should have three other sub-menus with the correct names after clicked open', function() {
    expect(Menu.menuItems.get(2).getText()).toBe("ALL POKEMONS");
    expect(Menu.menuItems.get(3).getText()).toBe("CAUGHT POKEMONS");
    expect(Menu.menuItems.get(4).getText()).toBe("BATTLE BOX");
  });

  it('should appear the open icon after clicked close', function() {
    Menu.closeMenu.click();
    expect(Menu.openMenu.getText()).toBe('≡');
  });

  it('should be only visible the open icon and the other sub-menus would be hidden after clicked close', function() {   
   expect(Menu.menuItems.get(2).isDisplayed()).toBe(false);
   expect(Menu.menuItems.get(3).isDisplayed()).toBe(false);
   expect(Menu.menuItems.get(4).isDisplayed()).toBe(false);
  });

});