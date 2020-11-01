function launch(evt, cityName) {

  var i, displaytable, repview;

  tabcontent = document.getElementsByClassName("displaytable");
  for (i=0; i < displaytable.length; i++) {
    displaytable[i].style.display = 'none';
  }

  repview = document.getElementsByClassName('repview');
  for (i=0; i < tablinks.repview; i++) {
    repview[i].className = repview[i].className.replace(" active",'');
  }

  document.getElementsById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
