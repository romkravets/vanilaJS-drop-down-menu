export function dropDown() {
   const btn = document.querySelector('.drop-down-menu__btn');
   const list = document.querySelector('.drop-down-menu__list');
   console.log(btn, list);

   btn.onclick = function() {
      list.classList.toggle('drop-down-menu__list_expand');
   }
}