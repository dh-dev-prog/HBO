function initHeader(){
  var headerMenu = {
    init: function(){
      this.iconNav = document.getElementById('navIcon');
      this.menu = document.getElementById('menu');
      this.header = document.querySelector('.header');
      this.iconNav.parentNode.addEventListener('click', function(){
        headerSearch.searchClose();
        headerMenu.navToggle();
      });
    },
    navToggle: function(){
      this.iconNav.classList.toggle('ion-navicon');
      this.iconNav.classList.toggle('ion-ios-close-empty');
      this.menu.classList.toggle('is_hidden');
      this.header.classList.toggle('header--menu-open');
    },
    navClose: function() {
      this.iconNav.classList.remove('ion-ios-close-empty');
      this.iconNav.classList.add('ion-navicon');
      this.menu.classList.add('is_hidden');
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
