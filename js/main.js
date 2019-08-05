document.addEventListener("DOMContentLoaded", function() {
    //variables
    const menuIcon = document.getElementsByClassName('menu-icon-container')[0];
    const menu = document.getElementsByClassName('menu__mobile')[0];
    const menuClose = document.getElementsByClassName('menu__close')[0];
    const pwFieldIcon = document.getElementsByClassName('pw-field-icon')[0];
    const pwField= document.getElementsByClassName('pw-field')[0];

    //trigger mobile nav menu
    menuIcon.addEventListener('click', function(e) {
        menu.classList.add('is-active');
    })

    //prevent anchor click and remove mobile menu
    menuClose.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.remove('is-active');
    })

    //show/hide password input
    pwFieldIcon.addEventListener('click', function(e) {
        if (pwField.type === 'password') {
            pwField.type = 'text';
        } else {
            pwField.type = 'password';
        }
    })
  });