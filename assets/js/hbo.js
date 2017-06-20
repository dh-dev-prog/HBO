function initPage(){
  var iconNav = document.getElementById('navIcon');

  iconNav.addEventListener('click', function(){
    this.classList.toggle('ion-navicon');
    document.getElementById('dropdown').classList.toggle('is_active_block')
    this.classList.toggle('ion-ios-close-empty');
  })
}

initPage();
