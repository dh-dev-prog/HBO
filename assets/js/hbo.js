function initPage(){

  var iconNav = document.getElementById('navIcon');
  var iconSearch = document.getElementById('searchIcon');
  var iconCircle = document.getElementById('searchCircle');

  var menu = document.getElementById('menu');
  var search = document.getElementById('searchBar');

  function navToggle() {
    iconNav.classList.toggle('ion-navicon');
    iconNav.classList.toggle('ion-ios-close-empty');
    menu.classList.toggle('is_hidden');
  }
  function navClose() {
    iconNav.classList.remove('ion-ios-close-empty');
    iconNav.classList.add('ion-navicon');
    menu.classList.add('is_hidden');
  }
  function searchToggle(){
    iconSearch.classList.toggle('ion-ios-search-strong');
    iconCircle.classList.toggle('ion-ios-circle-outline');
    iconSearch.classList.toggle('ion-ios-close-empty');
    search.classList.toggle('is_hidden');
    search.querySelector('.search__input').value = '';
    search.querySelector('.search__input').focus();
  }
  function searchClose() {
    iconSearch.classList.remove('ion-ios-close-empty');
    iconSearch.classList.add('ion-ios-search-strong');
    iconCircle.classList.add('ion-ios-circle-outline');
    search.classList.add('is_hidden');
  }

  iconNav.parentNode.addEventListener('click', function(){
    searchClose()
    navToggle();
  });
  iconSearch.parentNode.addEventListener('click', function(){
    navClose();
    searchToggle();
  });
}

initPage();
