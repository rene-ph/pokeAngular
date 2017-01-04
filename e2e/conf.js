exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    Menu: 'Menu/menu.spec.js',
    Search: 'Search/search.spec.js'
  }
  
}