export function dropDown(selector) {
   const menuParent = document.querySelector(selector);
   const btn = menuParent.querySelector('.drop-down-menu__btn');
   const list = menuParent.querySelector('.drop-down-menu__list');
   console.log(btn, list);

   btn.onclick = function() {
      list.classList.toggle('drop-down-menu__list_expand');
   }
}