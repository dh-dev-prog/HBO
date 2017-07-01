function initHeader(){

  var headerMenu = {
    init: function(){
      this.navIcon = document.getElementById('navIcon');
      this.menu = document.getElementById('menu');
      this.header = document.querySelector('.headerMain-wrapper');

      this.navIcon.parentNode.addEventListener('click', function(){
        headerSearch.searchClose();
        headerMenu.navToggle();
      });
      this.largeWindow();
    },
    navToggle: function(){
      this.navIcon.classList.toggle('ion-navicon');
      this.navIcon.classList.toggle('ion-ios-close-empty');
      this.menu.classList.toggle('menu--open');
      this.header.classList.toggle('header__menu_open_border');
    },
    navClose: function() {
      if(window.innerWidth < '768') {
        this.navIcon.classList.remove('ion-ios-close-empty');
        this.navIcon.classList.add('ion-navicon');
        this.menu.classList.add('is_hidden');
      }
    },
    largeWindow: function(){
      if(window.innerWidth >= '768') {  //at parse time
        this.menu.classList.remove('group');
      }
    }
  };

  var headerSearch = {
    init: function(){
      this.iconSearch = document.getElementById('searchIcon');
      this.iconCircle = document.getElementById('searchCircle');
      this.search = document.getElementById('searchBar');
      this.iconSearch.parentNode.addEventListener('click', function(){
        headerMenu.navClose();
        headerSearch.searchToggle();
      });
    },
    searchToggle: function(){
      this.iconSearch.classList.toggle('ion-ios-search-strong');
      this.iconCircle.classList.toggle('ion-ios-circle-outline');
      this.iconSearch.classList.toggle('ion-ios-close-empty');
      this.search.classList.toggle('is_hidden');
      this.search.querySelector('.search__input').value = '';
      this.search.querySelector('.search__input').focus();
    },
    searchClose: function() {
      this.iconSearch.classList.remove('ion-ios-close-empty');
      this.iconSearch.classList.add('ion-ios-search-strong');
      this.iconCircle.classList.add('ion-ios-circle-outline');
      this.search.classList.add('is_hidden');
    }
  };
  headerMenu.init();
  headerSearch.init();
}

function initFooter(){
  var copyright = document.getElementById('year');
  var year = new Date();
  year = year.getFullYear();
  copyright.textContent = ' ' + year + ' ';
}



initHeader();
initFooter();
