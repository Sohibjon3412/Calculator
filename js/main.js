let elInp = document.querySelector('.calc__input');
let elClear = document.querySelector('.clear');
let elYetti = document.querySelector('.yetti');
let elTurt = document.querySelector('.turt');
let elBir = document.querySelector('.bir');
let elFoiz = document.querySelector('.foiz');
let elBoluv = document.querySelector('.boluv');
let elSakkiz = document.querySelector('.sakkiz');
let elBesh = document.querySelector('.besh');
let elIkki = document.querySelector('.ikki');
let elNol = document.querySelector('.nol');
let elKopaytiruv = document.querySelector('.kopaytiruv');
let elToqqiz = document.querySelector('.toqqiz');
let elOlti = document.querySelector('.olti');
let elUch = document.querySelector('.uch');
let elQoldiq = document.querySelector('.qoldiq');
let elBackspace = document.querySelector('.backspace');
let elAyiruv = document.querySelector('.ayiruv');
let elQoshuv = document.querySelector('.qoshuv');
let elTeng = document.querySelector('.teng');

elClear.addEventListener('click', () => {
  elInp.value = "";
})
elYetti.addEventListener('click', () => {
  elInp.value += 7;
})
elTurt.addEventListener('click', () => {
  elInp.value += 4;
})
elBir.addEventListener('click', () => {
  elInp.value += 1;
})
elBoluv.addEventListener('click', () => {
  if(elInp.value != "" && elInp.value.slice(-1) != "*" && elInp.value.slice(-1) != "/" && elInp.value.slice(-1) != "+" && elInp.value.slice(-1) != "-" && elInp.value.slice(-1) != "%"){
    elInp.value += "/";
  }
})
elSakkiz.addEventListener('click', () => {
  elInp.value += 8;
})
elBesh.addEventListener('click', () => {
  elInp.value += 5;
})
elIkki.addEventListener('click', () => {
  elInp.value += 2;
})
elNol.addEventListener('click', () => {
  elInp.value += 0;
})
elKopaytiruv.addEventListener('click', () => {
  if(elInp.value != "" && elInp.value.slice(-1) != "%" && elInp.value.slice(-1) != "/" && elInp.value.slice(-1) != "+" && elInp.value.slice(-1) != "-" && elInp.value.slice(-1) != "*"){
    elInp.value += "*";
  }
})
elToqqiz.addEventListener('click', () => {
  elInp.value += 9;
})
elOlti.addEventListener('click', () => {
  elInp.value += 6;
})
elUch.addEventListener('click', () => {
  elInp.value += 3;
})
elQoldiq.addEventListener('click', () => {
  elInp.value += ".";
})
elBackspace.addEventListener('click', () => {
  elInp.value = elInp.value.slice(0,-1);
})
elAyiruv.addEventListener('click', () => {
  if(elInp.value.slice(-1) != "-" && elInp.value.slice(-1) != "*" && elInp.value.slice(-1) != "/" && elInp.value.slice(-1) != "+"){
    elInp.value += "-";
  }
})
elQoshuv.addEventListener('click', () => {
  if(elInp.value.slice(-1) != "-" && elInp.value.slice(-1) != "" && elInp.value.slice(-1) != "*" && elInp.value.slice(-1) != "/" && elInp.value.slice(-1) != "+"){
    elInp.value += "+";
  }
})
elTeng.addEventListener('click', () =>  {
  elInp.value = eval(elInp.value);
})
