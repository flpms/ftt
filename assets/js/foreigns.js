var foreigns = document.getElementsByClassName('foreigns');
var i = 0;

function toggleActive(item) {
  item.classList.toggle('active');
}

function hasClassActiveIn(item) {
  return item.classList.contains('active');
}

function removeOthers() {
  document.querySelectorAll('.translation.active').forEach(function (item) {
    toggleActive(item);
  });
}

function clickListener(elem, callback) {
  elem.addEventListener('click', callback, false);
}

function addStyle(item) {
  var target = item.target;
  var translationItem = target.nextSibling;
  var boundaries = target.getBoundingClientRect();

  if (hasClassActiveIn(translationItem)) {
    return toggleActive(translationItem);
  }

  removeOthers();
  clickListener(translationItem, addStyle);

  translationItem.style.marginTop = '-' + boundaries.height.toFixed() + 'px';
  translationItem.style.left = boundaries.x.toFixed() + 'px';

  toggleActive(translationItem);
}

for (i = 0; i < foreigns.length; i++) {
  clickListener(foreigns[i].getElementsByClassName('to-translate')[0], addStyle);
}
