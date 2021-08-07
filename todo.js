const ul = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

ul.addEventListener('click', e => {
     // console.log(e.target.textContent);
     if(e.target.tagName === 'LI'){
          e.target.remove();
     }
});

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
     const text = document.querySelector('input').value;
     
     const li = document.createElement('li');
     li.textContent = `${text}`;

     ul.append(li);

     document.querySelector('input').value = '';
});