// import functions and grab DOM elements
const dropdownSectionEl = document.getElementById('dropdown-section');
const statsSectionEl = document.getElementById('stats-section');
const imageSectionEl = document.getElementById('img-section');
const sloganSectionEl = document.getElementById('slogan-section');

const tropicalDropdownEl = document.getElementById('tropical-dropdown');
const metropolitanDropdownEl = document.getElementById('metropolitan-dropdown');
const countrysideDropdownEl = document.getElementById('countryside-dropdown');

const tropicalImageEl = document.getElementById('tropical-img');
const metropolitanImageEl = document.getElementById('metropolitan-img');
const countrysideImageEl = document.getElementById('countryside-img');

// let state
let timesTropicalChanged = 0;
let timesMetropolitanChanged = 0;
let timesCountrysideChanged = 0;

// set event listeners 
tropicalDropdownEl.addEventListener('change', () => {
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
    tropicalImageEl.src = `/assets/${tropicalDropdownEl.value}.png`;
    timesTropicalChanged++;
    console.log('Tropical has been changed ' + timesTropicalChanged + ' times.');
});

metropolitanDropdownEl.addEventListener('change', () => {
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
    metropolitanImageEl.src = `/assets/${metropolitanDropdownEl.value}.png`;
    timesMetropolitanChanged++;
    console.log('Metropolitan has been changed ' + timesMetropolitanChanged + ' times.');
});

countrysideDropdownEl.addEventListener('change', () => {
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
    countrysideImageEl.src = `/assets/${countrysideDropdownEl.value}.png`;
    timesCountrysideChanged++;
    console.log('Countryside has been changed ' + timesCountrysideChanged + ' times.');
});
