function toggleIconsFullSccreen(){
  var icon_fullscreen = document.getElementById("icon_fullscreen"); 
  var icon_windowed = document.getElementById("icon_windowed");

  var product_central = document.getElementById("product_central");

  if (icon_windowed.style.display == 'none') {
    icon_fullscreen.style.display = 'none';
    icon_windowed.style.display = 'block';

    product_central.style.width = '100%';
    product_central.style.zIndex = '1';
    product_central.style.left = '0';
  }else{
    icon_fullscreen.style.display = 'block';
    icon_windowed.style.display = 'none';

    product_central.style.width = '75%';
    toggleIconsArrows();
    toggleIconsArrows();
  }
}

function toggleIconsArrows(){
  var icon_rigth = document.getElementById("icon_rigth");
  var icon_left = document.getElementById("icon_left");

  var icon_fullscreen = document.getElementById("icon_fullscreen"); 
  var icon_windowed = document.getElementById("icon_windowed");

  var product_central = document.getElementById("product_central");
  var config_left = document.getElementById("config_left");
  var config_right = document.getElementById("config_rigth");

  product_central.style.width = '75%';
  icon_fullscreen.style.display = 'block';
  icon_windowed.style.display = 'none';

  if (icon_left.style.display == 'none'){
    icon_rigth.style.display = 'none';
    icon_left.style.display = 'block';

    product_central.style.left = '25%';
    config_left.style.left = '0';
    config_right.style.right = '-25%';
  }else{
    icon_rigth.style.display = 'block';
    icon_left.style.display = 'none';

    product_central.style.left = '0';
    config_left.style.left = '-25%';
    config_right.style.right = '0';
  }
}

function toggleMenu(){
  var config_left = document.getElementById("config_left");
  var config_right = document.getElementById("config_rigth");
  var product_central = document.getElementById("product_central"); 

  var icon_menu_hamburguer = document.getElementById("icon-menu-hamburguer");

  if (icon_menu_hamburguer.checked) {
    config_left.style.zIndex = "-1";
    config_right.style.zIndex = "-1";
    product_central.style.zIndex = "-1";
  }else{
    config_left.style.zIndex = "1";
    config_right.style.zIndex = "1";
    product_central.style.zIndex = "1";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.querySelectorAll('.assets_footer');

  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function() {
      dropdown.classList.toggle('clicked');
    });
  });
});


function toggleIconsMenu1(){
  var icon_arrow_up = document.getElementById("icon_top_menu1"); 
  var icon_arrow_down = document.getElementById("icon_down_menu1");

  if(icon_arrow_up.style.display == 'none'){
    icon_arrow_up.style.display = 'block';
    icon_arrow_down.style.display = 'none';
  }else{
    icon_arrow_up.style.display = 'none';
    icon_arrow_down.style.display = 'block';
  }  
}

function toggleIconsMenu2(){
  var icon_arrow_up = document.getElementById("icon_top_menu2"); 
  var icon_arrow_down = document.getElementById("icon_down_menu2");

  if(icon_arrow_up.style.display == 'none'){
    icon_arrow_up.style.display = 'block';
    icon_arrow_down.style.display = 'none';
  }else{
    icon_arrow_up.style.display = 'none';
    icon_arrow_down.style.display = 'block';
  } 
}

function toggleIconsMenu3(){
  var icon_arrow_up = document.getElementById("icon_top_menu3"); 
  var icon_arrow_down = document.getElementById("icon_down_menu3");

  if(icon_arrow_up.style.display == 'none'){
    icon_arrow_up.style.display = 'block';
    icon_arrow_down.style.display = 'none';
  }else{
    icon_arrow_up.style.display = 'none';
    icon_arrow_down.style.display = 'block';
  } 
}