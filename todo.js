// const listItems = document.querySelectorAll('li');
// listItems.forEach(item => {
//      item.addEventListener('click', e => {
          
//      });
// });

const ul = document.querySelector('ul');

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
     const text = document.querySelector('input').value;
     
     const li = document.createElement('li');
     li.textContent = `${text}`;

     ul.append(li);
});