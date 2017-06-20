function initPage(){

  var iconNav = document.getElementById('navIcon');
  var iconSearch = document.getElementById('searchIconMix');

  function navToggle() {
    iconNav.classList.toggle('ion-navicon');
    iconNav.classList.toggle('ion-ios-close-empty');
    document.getElementById('menu').classList.toggle('is_active_block');
  }
  function navClose() {
    iconNav.classList.remove('ion-ios-close-empty');
    iconNav.classList.add('ion-navicon');
    document.getElementById('menu').classList.add('is_hidden');
    document.getElementById('menu').classList.remove('is_active_block');
  }
  function searchToggle(){
    document.getElementById('searchIcon').classList.toggle('ion-ios-search-strong');
    document.getElementById('searchCircle').classList.toggle('ion-ios-circle-outline');
    document.getElementById('searchIcon').classList.toggle('ion-ios-close-empty');
    document.getElementById('searchBar').classList.toggle('is_hidden');
  }
  function searchClose() {
    var searchBar = document.getElementById('searchBar');
    searchIcon.classList.remove('ion-ios-close-empty');
    document.getElementById('searchIcon').classList.add('ion-ios-search-strong');
    document.getElementById('searchCircle').classList.add('ion-ios-circle-outline');
    searchBar.className = 'search' + ' ' + 'is_hidden';

    iconSearch.firstChild.className = 'ion-ios-search-strong';
    iconSearch.lastChild.className = 'ion-ios-circle-outline';

  }

  iconNav.addEventListener('click', function(){
    searchClose()
    navToggle();
  });
  iconSearch.addEventListener('click', function(){
    navClose();
    searchToggle();
  });
}

initPage();
