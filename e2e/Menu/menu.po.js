/**
 * Page object for the Menu
 * @constructor
 */
var Menu = function () {
  this.openMenu  = element(by.id('js-menu-open'));
  this.closeMenu = element(by.id('js-menu-close'));
  this.menuItems = element.all(by.css('.menu-items'));
  this.getMenuTitle = element.all(by.binding('title'));

  this.getMenuItem = function (text) {
     return element(by.name(text));
  }

};

module.exports = Menu;