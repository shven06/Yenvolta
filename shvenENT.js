const navbar = document.getElementById('navbar');
function open_sidebar_menu() {
  navbar.classList.add('show');
}
function close_sidebar_menu() {
  navbar.classList.remove('show');
}  
function goto_About(){
  window.location.href = "SEabout.html";
}
function goto_Home(){
  window.location.href = "SEhome.html";
}
function goto_RnD(){
  window.location.href = "SErNd.html";
}

