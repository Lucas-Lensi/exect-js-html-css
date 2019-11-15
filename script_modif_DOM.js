function changeTitles(){
  document.querySelectorAll('h1.jumbotron-heading')[0].textContent = "Ce que j'ai appris à THP";
  document.querySelectorAll('p.lead')[0].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

function changeCallToActions(){
  let btn = document.querySelectorAll('a.btn-primary')[0];
  btn.href = 'http://www.thehackingproject.org';
  btn.innerHTML = 'OK je veux tester !'
  let sec_btn = document.querySelectorAll('a.btn-secondary')[0];
  sec_btn.href = 'https://www.pole-emploi.fr/accueil/';
  sec_btn.innerHTML = 'Non Merci'
}

function changeLogoName() {
  let title = document.getElementsByTagName('strong')[0];
  title.textContent = 'The THP Experience';
  title.style.fontSize = '2em'
}

function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  for (let index = 0; index < imagesArray.length; index++){
    document.getElementsByTagName('img')[index].src = imagesArray[index];
  }
}

function deleteLastCards(){
  [1,2,3].forEach(function(){
    let row = document.getElementsByClassName('row' )[1];
    let cards = document.querySelectorAll('div.col-md-4');
    let last = cards[cards.length - 1];
    row.removeChild(last);
  });
}

function changeCardsText(){
  let textArray = [
    "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
    "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
    "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
  ];
  for(let index in textArray){
    document.getElementsByClassName('card-text')[index].textContent = textArray[index];
  }
}

function changeViewButtons(){
  let btn = document.getElementsByClassName('btn-group');
  for (let i = 0; i < btn.length; i++){
    btn[i].childNodes[1].classList.remove('btn-outline-secondary');
    btn[i].childNodes[1].classList.add('btn-success');
  }
}

function makePyramide(){
  document.getElementsByClassName('row')[1].insertAdjacentHTML("afterend",
    '<div class="row"></div>');
  document.getElementsByClassName('row')[2].appendChild(document.getElementsByClassName('col-md-4')[2]);
}

changeTitles()
changeCallToActions()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsText()
changeViewButtons()
makePyramide()
