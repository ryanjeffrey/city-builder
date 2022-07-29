// import functions and grab DOM elements
const dropdownSectionEl = document.getElementById('dropdown-section');
const statsSectionEl = document.getElementById('stats-section');
const imageSectionEl = document.getElementById('img-section');
const sloganSectionEl = document.getElementById('slogan-section');

const timesChangedEl = document.getElementById('times-changed');

const tropicalDropdownEl = document.getElementById('tropical-dropdown');
const metropolitanDropdownEl = document.getElementById('metropolitan-dropdown');
const countrysideDropdownEl = document.getElementById('countryside-dropdown');

const tropicalImageEl = document.getElementById('tropical-img');
const metropolitanImageEl = document.getElementById('metropolitan-img');
const countrysideImageEl = document.getElementById('countryside-img');

const sloganButton = document.getElementById('slogan-button');
const sloganInputEl = document.getElementById('slogan-input');

// let state
let timesTropicalChanged = 0;
let timesMetropolitanChanged = 0;
let timesCountrysideChanged = 0;

let slogans = ['The city that never sleeps', 'The golden city', 'The windy city'];

// set event listeners for dropdowns
tropicalDropdownEl.addEventListener('change', () => {
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
    tropicalImageEl.src = `/assets/${tropicalDropdownEl.value}.png`;
    timesTropicalChanged++;
    displayStats();
});

metropolitanDropdownEl.addEventListener('change', () => {
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
    metropolitanImageEl.src = `/assets/${metropolitanDropdownEl.value}.png`;
    timesMetropolitanChanged++;
    displayStats();
});

countrysideDropdownEl.addEventListener('change', () => {
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
    countrysideImageEl.src = `/assets/${countrysideDropdownEl.value}.png`;
    timesCountrysideChanged++;
    displayStats();
});

function displayStats() {
    timesChangedEl.textContent = `Tropical has been changed ${timesTropicalChanged} times. Metropolitan has been changed ${timesMetropolitanChanged} times. Countryside has been changed ${timesCountrysideChanged} times.`;
}