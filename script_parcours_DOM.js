console.log(document.getElementsByTagName('p').length);
console.log(document.getElementById('coucou').innerHTML);
console.log(document.getElementsByTagName('a')[2].href);
console.log(document.getElementsByClassName('compte-moi').length);
console.log(document.querySelectorAll('li.compte-moi').length);
var list = document.getElementsByTagName('ol');
var count = 0;
for (var i = 0; i < list.length; i++) {
  count += list[i].querySelectorAll('li.compte-moi').length;
}
console.log(count);
console.log(document.getElementsByTagName('div')[0].getElementsByTagName('ul')[1].getElementsByTagName('li')[0].innerHTML);
