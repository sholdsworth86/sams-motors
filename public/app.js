'use strict';

//import './filter-transmission.js';
//import './filter-transmission.js';

console.log('check it homie');

//variables
var itemsToFilter = document.querySelectorAll("#itemsToFilter li");
//let vehicleCards = document.querySelectorAll('.vehicle-card');
var vehicleCard = document.querySelector('.vehicle-card');
var msg = document.querySelector('#display-msg');
var clickedItem = void 0;

var es0 = document.querySelector('#engine-size-0');
var es1 = document.querySelector('#engine-size-1');
var es2 = document.querySelector('#engine-size-2');
var es3 = document.querySelector('#engine-size-3');
var es4 = document.querySelector('#engine-size-4');
var es5 = document.querySelector('#engine-size-5');
var es6 = document.querySelector('#engine-size-6');

var range0_Min = 0.0;
var range0_Max = 0.9;
var range1_Min = 1.0;
var range1_Max = 1.9;
var range2_Min = 2.0;
var range2_Max = 2.9;
var range3_Min = 3.0;
var range3_Max = 3.9;
var range4_Min = 4.0;
var range4_Max = 4.9;
var range5_Min = 5.0;
var range5_Max = 5.9;
var range6_Min = 6.0;
var range6_Max = 6.9;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// val = 5.9;
// if(val >= range0_Min && val <= range0_Max) {
//     console.log(`val is ${val} ... = the ZERO range!`);
// } else if(val >= range1_Min && val <= range1_Max) {
//     console.log(`val is ${val} ... = the ONE range!`);
// } else if(val >= range2_Min && val <= range2_Max) {
//     console.log(`val is ${val} ... = the TW0 range!`);
// } else if(val >= range3_Min && val <= range3_Max) {
//     console.log(`val is ${val} ... = the THREE range!`);
// } else if(val >= range4_Min && val <= range4_Max) {
//     console.log(`val is ${val} ... = the FOUR range!`);
// } else if(val >= range5_Min && val <= range5_Max) {
//     console.log(`val is ${val} ... = the FIVE range!`);
// } else if(val >= range6_Min && val <= range6_Max) {
//     console.log(`val is ${val} ... = the SIX range!`);
// } else {
//     console.log('value OOR');
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//setup click event handlers on our checkboxes
var checkBoxes = document.querySelectorAll(".filter input");

for (var i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener("click", filterItems);
    //checkBoxes[i].checked = true;     
};

// event handler
function filterItems(e) {
    clickedItem = e.target; //clickedItem.value = checked box 

    if (clickedItem.checked == true) {
        hideOrShowItems(clickedItem.value, "hideItem", "showItem");
        hideOrShowItems(vehicleCard, "hideItem", "showItem");
    } else if (clickedItem.checked == false) {
        hideOrShowItems(clickedItem.value, "showItem", "hideItem");
    } else {
        // deal with the indeterminate state if needed
        console.log('oh dear... what\'s going on eya then?? ....');
    }
}

// add or remove classes to show or hide our content
function hideOrShowItems(itemType, classToRemove, classToAdd) {

    for (var i = 0; i < itemsToFilter.length; i++) {
        var currentItem = itemsToFilter[i];

        //THIS LOGIC WILL NEED CHANGING HERE ON A PER FILTER BASIS (DON'T WORRY ABOUT IT TOO MUCH - GOING TO SETUP OWN MIN & MAX PROPS PER EACH ELEMENT IN REACT)
        //SO HOPEFULL CN COMPARED DIRECTLY ON A NUMBER VALUE (IF IT's A STRING CPNVERT WITH Number(numberString) method)
        if (currentItem.getAttribute("data-type") === itemType && clickedItem.name === currentItem.textContent.substr(8, 3)) {
            removeClass(currentItem.parentElement.parentElement, classToRemove);
            addClass(currentItem.parentElement.parentElement, classToAdd);
        }

        //console.log(currentItem);

        //Allow all filters to be de-selected (for now at least and figure out how they all will work in conjunction and weather or not to restrict to at least one
        //if only one filter is selected i.e. set the currently checked last one to disabled until another selection is made then re-enable)
        //keep the warning message as a generic one for if any combination doesnt return any results)
        if (es0.checked === false && es1.checked === false && es2.checked === false && es3.checked === false && es4.checked === false && es5.checked === false && es6.checked === false) {

            msg.innerHTML = 'Sorry, none of your selected options are available at this time';
            msg.style.display = 'block';
        } else if (es0.checked === true || es1.checked === true || es2.checked === true || es3.checked === true || es4.checked === true || es5.checked === true || es6.checked === true) {
            msg.style.display = 'none';
        }
    }
}

// Helper functions for adding and removing class values
//add class
function addClass(element, classToAdd) {
    var currentClassValue = element.className;

    if (currentClassValue.indexOf(classToAdd) == -1) {
        if (currentClassValue == null || currentClassValue === "") {
            element.className = classToAdd;
        } else {
            element.className += " " + classToAdd;
        }
    }
}

//remove class        
function removeClass(element, classToRemove) {
    var currentClassValue = element.className;

    if (currentClassValue == classToRemove) {
        element.className = "";
        return;
    }

    var classValues = currentClassValue.split(" ");
    var filteredList = [];

    for (var i = 0; i < classValues.length; i++) {
        if (classToRemove != classValues[i]) {
            filteredList.push(classValues[i]);
        }
    }

    element.className = filteredList.join(" ");
}
