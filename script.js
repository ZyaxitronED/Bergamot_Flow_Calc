
//Unwanted reset of the total price calculator
/*$(document).ready(function () {
  setInterval('checkClass()', 5000);
  

  setTimeout(function checkClass(){
    $(".totalPrice1").remove();
    },1000);

});*/

function checkClass(){
  $('.totalPrice1').remove();
}

//Controls everything in dropdown for types of oils
let optionList = document.getElementById('oilType').options;
let options = [
  {
    text: 'Basil',
    value: '0.02',
  },
  {
    text: 'Benzoin',
    value: '0.01'
  },
  {
    text: 'Bergamot FCF',
    value: '0.01'
  },
  {
    text: 'Cedarwood',
    value: '0.01'
  },
  {
    text: 'Cinnamon Leaf',
    value: '0.01'
  },
  {
    text: 'Clary Sage',
    value: '0.02'
  },
  {
    text: 'Cypress',
    value: '0.01'
  },
  {
    text: 'FCO 10ml',
    value: '0.15'
  },
  {
    text: 'FCO 5ml',
    value: '0.10'
  },
  {
    text: 'Frankincense',
    value: '0.04'
  },
  {
    text: 'Geranium Egypt',
    value: '0.02'
  },
  {
    text: 'Ginger',
    value: '0.01'
  },
  {
    text: 'Grapefruit',
    value: '0.01'
  },
  {
    text: 'Jasmine Absolute',
    value: '0.29'
  },
  {
    text: 'Lavender French Blended',
    value: '0.01'
  },
  {
    text: 'Lemongrass',
    value: '0.01'
  },
  {
    text: 'Lime',
    value: '0.01'
  },
  {
    text: 'Neroli',
    value: '0.25'
  },
  {
    text: 'Patchouli',
    value: '0.01'
  },
  {
    text: 'Peppermint',
    value: '0.01'
  },
  {
    text: 'Petitgrain',
    value: '0.01'
  },
  {
    text: 'Pine',
    value: '0.01'
  },
  {
    text: 'Rosemary',
    value: '0.01'
  },
  {
    text: 'Spearmint',
    value: '0.01'
  },
  {
    text: 'Sweet Orange',
    value: '0.01'
  },
  {
    text: 'Vanilla Absolute',
    value: '0.16'
  },
  {
    text: 'Vetiver',
    value: '0.04'
  },
  {
    text: 'Ylang Ylang Grade 1',
    value: '0.03'
  }
];

options.forEach(option =>
  optionList.add(
    new Option(option.text, option.value, option.selected)
  )
);

function oilSelected() {
   var oilOptions = document.getElementById('oilType');
   var selectedValue = oilOptions.options[oilOptions.selectedIndex].text;
   //addedOils.innerText = selectedValue;
}

//Controls price of number of drops * price of specific drop of oil
function priceGenerator() {

  var priceOutput = document.getElementById('priceOutput');
  //var dropInput = document.getElementById('dropInput'.value);
  //const dropInput = document.querySelector('input[name="dropInput"]').value;
  var dropInput = document.querySelector('[name="dropInput"]').value; //--THIS IS CAUSING ISSUE WITH ADDING CHECKBOXES; TRIES TO READ VALUE OF CHECKBOX; RETURNS NaN-- FIXED
  var optionPrice = oilType.value;

    priceOutput.value = (optionPrice*dropInput).toFixed(2);
//UNNEEDED ; ELSE STATEMENT DOES BOTH
/*if (dropInput == 0) {
  priceOutput.value = "£0";
} else {
  priceOutput.value = "£" + optionPrice * dropInput;
}*/

};

const divElelemts = document.querySelectorAll('.calculatorContainer');
divElelemts.forEach(priceGenerator);


//FAILED DIV DUPLICATION #1
/*var calc = document.querySelector('#calculatorContainer');
var clone = calc.cloneNode(true);

clone.id = 'calculatorContainer2';

calc.after(clone);*/

//FAILED DIV DUPLICATION #2
/*let i = 1
const original = document.getElementById('calculatorContainer');
const onClick = () => console.log('clicked')
original.onclick = onClick

const clone = original.cloneNode(true);
i++
clone.id = `calculatorContainer${i}`;
clone.onclick = onClick;
original.parentNode.appendChild(clone);*/

//Referencing wrong container
/*var original = document.getElementById('calculatorContainer');
var originalInput = document.getElementById('dropInput');

function repeat() {
var clone = original.cloneNode(true);
clone.id = "calculatorContainer" + ++i; 
original.parentNode.appendChild(clone);

var cloneInput = originalInput.cloneNode(true);
cloneInput.id = "dropInput" + ++i;
};*/

function remove(el) {
  var element = el;

  element.parentNode.removeChild(element);
};

/*function removeClosest(){
  $(this).prev('input').remove();
};*/

var i = 0;
var addedOils = document.getElementById('addedOils');
var optionValue = document.getElementById('oilType').options.text;
var removeButton = document.getElementById('removeButton');
var priceCollumn = document.getElementById('priceCollumn');
var valueKeeper = document.getElementById('valueKeeper');

removeButton.style.visibility='hidden';

//Adds current oil selection, number of drops, and price to the 'added oils' section of page if all fields are filled
function addOil() {
  var oilOptions = document.getElementById('oilType');
  var selectedValue = oilOptions.options[oilOptions.selectedIndex].text;

  if (dropInput.value == "") {
    alert('Please fill in all of the fields before adding an oil.');
    return false;
  } else {
    var clonedAddedOils = addedOils.cloneNode(true);
    //var clonedPriceCollumn = priceCollumn.cloneNode(true);
    var clonedValueKeeper = valueKeeper.cloneNode(true);
    //var clonedRemoveButton = removeButton.cloneNode(true);

    clonedAddedOils.id = "addedOils" + ++i;
    addedOils.parentNode.appendChild(clonedAddedOils);
    clonedAddedOils.innerText = dropInput.value + " drops of " + selectedValue + " = " + priceOutput.value;
    clonedAddedOils.setAttribute('onclick', 'this.remove()');
    //clonedAddedOils.setAttribute('onclick', 'removeClosest()');
    //clonedAddedOils.classList.remove('collumn');


    /*clonedPriceCollumn.id = "priceCollumn" + ++i;
    priceCollumn.parentNode.appendChild(clonedPriceCollumn);*/

    clonedValueKeeper.id = "valueKeeper" + ++i;
    clonedValueKeeper.classList.add('totalPrice1');
    valueKeeper.parentNode.appendChild(clonedValueKeeper);
    clonedValueKeeper.setAttribute('onclick', 'this.parentNode.remove()');

    //Button not currently working - added remove functionality to cloned text instead
    /*clonedRemoveButton.id = "removeButton" + ++i;
    removeButton.parentNode.appendChild(clonedRemoveButton);*/


    /*clonedPriceCollumn.innerText = priceOutput.value;
    clonedPriceCollumn.setAttribute('onclick', 'this.remove()');
    clonedPriceCollumn.classList.remove('collumn');*/

    clonedValueKeeper.value = dropInput.value;
  }
};

//test to see if cloned div has inputs cloned with it and carries input values for addition
//not able to reference both input value and innerhtml as one
/*function cloneDiv() {
  var oilOptions = document.getElementById('oilType');
  var selectedValue = oilOptions.options[oilOptions.selectedIndex].text;
  var clone = document.getElementById('addedOils');
  var clonedClone = clone.cloneNode(true);

  clonedClone.id = "addedOils" + ++i;
  clone.parentNode.appendChild(clonedClone);
  clonedClone.setAttribute('onclick', 'this.remove()');

  addedOils.innerText = dropInput.value + " drops of " + selectedValue + " = " + priceOutput.value;

}*/

//testing to see if cloned form can carry value of oil in input for calculation
//first test worked but if original clone is removed then user is unable to clone further forms -- FIXED

//var formContainer = document.getElementById('formContainer');
var formName = this.document.getElementsByClassName('form');
//var formNameCheck = formName.includes(selectedValue);
var form = document.getElementById('formOils');

function formClone() {
  var oilOptions = document.getElementById('oilType');
  var selectedValue = oilOptions.options[oilOptions.selectedIndex].text;

  if (dropInput.value == "" || formName.name == selectedValue) {

    alert('Please fill in all of the fields before adding an oil.');
    return false;

  }else{
    
    //changed to query selector as these were editing the original rather than cloning; cloning would only happen after most recent oil addition
    /*var label = document.getElementById('label');
    var input = document.getElementById('input');*/    
    var clonedForm = form.cloneNode(true);

    clonedForm.id = "formOils" + ++i;
    form.parentNode.appendChild(clonedForm);
    clonedForm.querySelector('label').innerHTML = dropInput.value + " drops of " + selectedValue + " = " + priceOutput.value;
    clonedForm.querySelector('input').value = priceOutput.value;
    clonedForm.querySelector('button').style.visibility = 'visible';
    clonedForm.setAttribute('name', selectedValue);
    console.log(formName.name);
    console.log(selectedValue);
    
    return true;

  }

}

function priceAddition() {
/*var priceAddition = document.getElementsByClassName('priceAddition');
var totalPrice = document.getElementsByClassName('totalPrice');
//var sum = 0;

for(i = 0; i < priceAddition.length; i++) {
  sum += parseFloat(priceAddition[i].textContent);
}
  var totalValue = document.getElementById('totalValue');

  totalValue.innerText = '£' + sum;
  console.log(sum);

  var sum = 0.0;

    $('.totalPrice').each(function() {

    sum = parseInt(this.value);

    totalValue.innerText = '£' + sum;
    console.log(sum);

});*/

  var arr = document.getElementsByClassName('totalPrice');
  var tot = 0.00;
  var totalValue = document.getElementById('totalValue');

  if(document.getElementById("5mlAmBot").checked) {
    tot += 0.55;
  }
  if(document.getElementById("10mlAmBot").checked) {
    tot += 0.66;
  }
  if(document.getElementById("5mlRainBot").checked) {
    tot += 1.30;
  }
  if(document.getElementById("5mlLab").checked) {
    tot += 0.06;
  }
  if(document.getElementById("10mlLab").checked) {
    tot += 0.10;
  }
  if(document.getElementById("CotBag").checked) {
    tot += 0.80;
  }
  if(document.getElementById("BusCard").checked) {
    tot += 0.20;
  }

  for (var i=0; i<arr.length;i++) {

  if(parseFloat(arr[i].value))
    tot += parseFloat(arr[i].value);
  }

  totalValue.innerText = "£" + (tot).toFixed(2);
  console.log(tot);

}

/*function insertDecimal(num) {
  return Number((num / 100).toFixed(2));
}*/


//only adding to the total and not removing if unchecked -- FIXED
//moved this function to priceAddition() instead to update when unchecked
/*function check() {

  var add = 0;

  if(document.getElementById("5mlAmBot").checked) {
    add += 0.55;
  }
  if(document.getElementById("10mlAmBot").checked) {
    add += 0.66;
  }
  if(document.getElementById("5mlRainBot").checked) {
    add += 1.30;
  }
  if(document.getElementById("5mlLab").checked) {
    add += 0.06;
  }
  if(document.getElementById("10mlLab").checked) {
    add += 0.10;
  }
  if(document.getElementById("CotBag").checked) {
    add += 0.80;
  }
  if(document.getElementById("BusCard").checked) {
    add += 0.20;
  }
}*/