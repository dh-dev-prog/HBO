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
      this.linkHover();
    },
    navToggle: function(){
      this.navIcon.classList.toggle('ion-navicon');
      this.navIcon.classList.toggle('ion-ios-close-empty');
      this.menu.classList.toggle('menu--open');
      this.menu.classList.toggle('menu--open-border');
      this.menu.classList.remove('search--open');
      this.header.classList.toggle('menu--open-header-border');
    },
    navClose: function(){
      this.navIcon.classList.remove('ion-ios-close-empty');
      this.navIcon.classList.add('ion-navicon');
      this.menu.classList.remove('menu--open');
      this.menu.classList.remove('menu--open-border');
      this.header.classList.remove('menu--open-header-border');
    },
    linkHover: function(){
      var links = document.getElementsByClassName('menu__link');
      var explorer = document.querySelector('.categoryExplorer');

      if(window.innerWidth >= '768') {
        Array.prototype.forEach.call(links, function(link) {
          link.addEventListener('mouseover', function(){
            explorer.classList.add('categoryExplorer--open');
          });
        });
        document.querySelector('.headerMain-wrapper').addEventListener('mouseleave', function(){
          explorer.classList.remove('categoryExplorer--open');
        })
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
      headerMenu.menu.classList.toggle('search--open');
      document.querySelector('.header__logo').classList.toggle('header__logo_search--open');
      this.search.querySelector('.search__input').value = ''; //empty the value to clear content
      this.search.querySelector('.search__input').focus();    //and focus the input
    },
    searchClose: function() {
      this.iconSearch.classList.remove('ion-ios-close-empty');
      this.iconSearch.classList.add('ion-ios-search-strong');
      this.iconCircle.classList.add('ion-ios-circle-outline');
      this.search.classList.add('is_hidden');
      headerMenu.menu.classList.remove('search--open');
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
