var GDPRAlert = document.querySelector('.gdpr-alert');
var button = document.querySelector('.gdpr-alert button');

if (localStorage["accepted"]) {
 GDPRAlert.style.display = 'none';
}

clickListener(button, function() {
 GDPRAlert.style.display = 'none';
 localStorage.setItem('accepted', true);
});
