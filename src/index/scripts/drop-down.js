export function dropDown(selector) {
   const menuParent = document.querySelector(selector);
   const btn = menuParent.querySelector('.drop-down-menu__btn');
   const list = menuParent.querySelector('.drop-down-menu__list');
   const options = menuParent.querySelectorAll('.drop-down-menu__option');

   list.addEventListener('click', function(event) {
      console.log(event.target.textContent);
      btn.textContent = event.target.textContent;
      list.classList.remove('drop-down-menu__list_expand');
   })

   btn.addEventListener('click', function() {
      list.classList.toggle('drop-down-menu__list_expand');

   });
}