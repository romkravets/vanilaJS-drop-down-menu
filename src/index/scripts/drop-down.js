export function dropDown(selector) {
   const menuParent = document.querySelector(selector);
   const btn = menuParent.querySelector('.drop-down-menu__btn');
   const list = menuParent.querySelector('.drop-down-menu__list');
   const options = menuParent.querySelectorAll('.drop-down-menu__option');

   for(let i = 0; i < options.length; i++) {
      options[i].onclick = function() {
         console.log(options[i].textContent);
         btn.textContent = options[i].textContent;
         list.classList.remove('drop-down-menu__list_expand');
      }
   }

   btn.onclick = function() {
      list.classList.toggle('drop-down-menu__list_expand');

   }
}