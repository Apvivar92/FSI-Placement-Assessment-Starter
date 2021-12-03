// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!');

// First, tell us your name
let yourName = 'Paul Vivar'; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle
let totalQuant = 0; // Total count for ALL cookies

//GB, chip, sugar, and total quantity select
let gbQuant = document.querySelector('#qty-gb');
let chipQuant = document.querySelector('#qty-cc');
let sugQuant = document.querySelector('#qty-sugar');
let totQuant = document.querySelector('#qty-total');
// Code to update name display
document.getElementById('credit').textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function (e) {
  gb++;
  gbQuant.innerHTML = gb;
  totQuant.innerHTML = gb + cc + sugar;
});

// TODO: Write the code to be run when the "-" button for "Gingerbread" is clicked
document.getElementById('minus-gb').addEventListener('click', function (e) {
  if (gb > 0) {
    gb--;
    gbQuant.innerHTML = gb;
    totQuant.innerHTML = gb + cc + sugar;
  }
});

// TODO: Hook up event listeners for the rest of the buttons

//For CC cookie + and - buttons
document.getElementById('add-cc').addEventListener('click', function (e) {
  cc++;
  chipQuant.innerHTML = cc;
  totQuant.innerHTML = gb + cc + sugar;
});
document.getElementById('minus-cc').addEventListener('click', function (e) {
  if (cc > 0) {
    cc--;
    chipQuant.innerHTML = cc;
    totQuant.innerHTML = gb + cc + sugar;
  }
});

//For Sugar cookie
document.getElementById('add-sugar').addEventListener('click', function (e) {
  sugar++;
  sugQuant.innerHTML = sugar;
  totQuant.innerHTML = gb + cc + sugar;
});
document.getElementById('minus-sugar').addEventListener('click', function (e) {
  if (sugar > 0) {
    sugar--;
    sugQuant.innerHTML = sugar;
    totQuant.innerHTML = gb + cc + sugar;
  }
});
