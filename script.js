let input = document.querySelector('input'),list = document.querySelector('ol');  
input.addEventListener('keydown',function(el){if(el.keyCode === 13){if(input.value != ''){todo()}}else{''}})
function todo(){let li = document.createElement('li');li.textContent = input.value;li.style = `color:white;font-size: 30px; text-transform: uppercase;`;input.value = '';list.append(li);}
