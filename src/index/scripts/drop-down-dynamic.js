const DROP_DOWN_MENU = 'drop-down-menu';
const BTN_CLASS_NAME = 'drop-down-menu__btn';
const LIST_CLASS_NAME = 'drop-down-menu__list';

export function dropDownDynamic(selector, options) {
   const menuParent = document.querySelector(selector);
   let btn;
   let list;

   function render() {
      btn = document.createElement('button');
      list = document.createElement('ul');
      btn.textContent = 'Toggle';
      menuParent.classList.add(DROP_DOWN_MENU);
      btn.classList.add(BTN_CLASS_NAME);
      list.classList.add(LIST_CLASS_NAME);

      menuParent.appendChild(btn);
      menuParent.appendChild(list);

   }

   function renderList() {
      for(let i = 0; i < options.length; i++) {
         let li = document.createElement('li');
         let option = document.createElement('button');

         li.classList.add('drop-down-menu__item');
         option.classList.add('drop-down-menu__option');

         option.textContent = options[i];

         li.appendChild(option);
         list.appendChild(li);
      }
   }

   function hendleEvents() {
      list.addEventListener('click', function(event) {
         console.log(event.target.textContent);
         btn.textContent = event.target.textContent;
         list.classList.remove('drop-down-menu__list_expand');
      })

      btn.addEventListener('click', function() {
         list.classList.toggle('drop-down-menu__list_expand');
      });
   }

   render();
   renderList();
   hendleEvents()
}