/* ============================================
   CHEF MARSEL — Recipe Scaling Engine
   ============================================
   All recipes standardized for a base main ingredient weight.
   Entering a different weight scales everything proportionally.
   ============================================ */

const RECIPES = {
  'stir-fry': {
    number: '01',
    name: 'The "Success" Stir-Fry',
    subtitle: 'Pork, Pepper & Onion',
    mainIngredient: 'pork',
    baseWeight: 200,
    inventory: [
      { name: 'Pork', amount: 200, unit: 'g', note: 'Thinly sliced, dusted with {potato_starch} Potato Starch' },
      { name: 'Potato Starch (for dusting)', amount: 15, unit: 'g', note: '1 Tablespoon / 15 SPOON', scaleKey: 'potato_starch' },
      { name: 'Bell Peppers', amount: 100, unit: 'g', note: '3-4 peppers' },
      { name: 'Onion', amount: 100, unit: 'g', note: '~1/2 medium' },
      { name: 'Oil', amount: 15, unit: 'g', note: '1 Tablespoon / 15 SPOON' },
    ],
    sauceTitle: 'The Sauce Mix',
    sauce: [
      { name: 'Soy Sauce',   amount: 15,   unit: 'g', tool: '15 SPOON (Level)' },
      { name: 'Sake',        amount: 15,   unit: 'g', tool: '15 SPOON (Level)' },
      { name: 'Mirin',       amount: 10,   unit: 'g', tool: '5 SPOON (x2)' },
      { name: 'Oyster Sauce',amount: 5,    unit: 'g', tool: '5 SPOON (Level)' },
      { name: 'Shiro Dashi', amount: 2.5,  unit: 'g', tool: '2.5 SPOON (Level)' },
      { name: 'Sugar',       amount: 1.5,  unit: 'g', tool: '2.5 SPOON (A bit over half)' },
    ],
    steps: [
      'Sear starch-dusted pork in oil (medium-high) until golden.',
      'Add onions (60s), then peppers (30s).',
      'Pour sauce in. Stir-fry for 45s.',
      'Pro Tip: If too thick, add 1 Tablespoon water to clear the glaze.',
    ],
  },

  'yakisoba': {
    number: '02',
    name: 'Shio Yakisoba',
    subtitle: 'Salt-Base Noodles',
    mainIngredient: 'pork',
    baseWeight: 200,
    inventory: [
      { name: 'Noodles', amount: 300, unit: 'g', note: '2 packs — Microwave for 60s first!' },
      { name: 'Pork', amount: 200, unit: 'g', note: 'No starch needed' },
      { name: 'Onion', amount: 100, unit: 'g', note: '' },
      { name: 'Peppers', amount: 100, unit: 'g', note: '' },
      { name: 'Garlic', amount: 6, unit: 'g', note: '~2 cloves, minced' },
      { name: 'Oil', amount: 15, unit: 'g', note: '1 Tablespoon / 15 SPOON' },
    ],
    sauceTitle: 'The "Gara" Mix',
    sauce: [
      { name: 'Sake',         amount: 30,  unit: 'g', tool: '15 SPOON (x2)' },
      { name: 'Gara Supa',    amount: 10,  unit: 'g', tool: '5 SPOON (x2 Level)' },
      { name: 'Lemon Juice',  amount: 10,  unit: 'g', tool: '5 SPOON (x2)' },
      { name: 'Black Pepper', amount: 5,   unit: 'g', tool: '5 SPOON (Level)' },
    ],
    steps: [
      'Fry pork and garlic until browned. Add onions and peppers (1 min).',
      'Add noodles. Pour Sake over them to steam open.',
      'Sprinkle Gara Supa and pepper. Stir-fry 2 mins until glossy.',
      'Off-heat: Stir in the lemon juice.',
    ],
  },

  'shogayaki': {
    number: '03',
    name: 'Ginger Pork (Shogayaki)',
    subtitle: 'The Aromatic Set-Meal Classic',
    mainIngredient: 'pork',
    baseWeight: 200,
    inventory: [
      { name: 'Pork', amount: 200, unit: 'g', note: 'Ultra-thin Loin, dusted with {potato_starch} Potato Starch' },
      { name: 'Potato Starch (for dusting)', amount: 15, unit: 'g', note: '1 Tablespoon / 15 SPOON', scaleKey: 'potato_starch' },
      { name: 'Onion', amount: 100, unit: 'g', note: '' },
      { name: 'Lettuce', amount: 132, unit: 'g', note: 'Cold bed on the plate — don\'t wilt it!' },
      { name: 'Ginger', amount: 20, unit: 'g', note: 'Thumb size, smashed and minced' },
      { name: 'Oil', amount: 22.5, unit: 'g', note: '1.5 Tablespoons / 15 SPOON x 1.5' },
    ],
    sauceTitle: 'The Ginger Sauce',
    sauce: [
      { name: 'Soy Sauce',   amount: 22.5, unit: 'g', tool: '15 SPOON (1 level + a splash)' },
      { name: 'Sake',        amount: 22.5, unit: 'g', tool: '15 SPOON (1 level + a splash)' },
      { name: 'Mirin',       amount: 15,   unit: 'g', tool: '15 SPOON (Level)' },
      { name: 'Sugar',       amount: 5,    unit: 'g', tool: '5 SPOON (Level)' },
      { name: 'Shiro Dashi', amount: 2.5,  unit: 'g', tool: '2.5 SPOON (Level)' },
    ],
    steps: [
      'Fry minced ginger in oil for 30s. Add onions and cook until soft.',
      'Add pork. Sear until browned.',
      'Pour sauce. Stir-fry 45s until it becomes a dark, glossy glaze.',
      'Serve next to the cold lettuce (don\'t wilt it!).',
    ],
  },

  'hotaruika-pasta': {
    number: '04',
    name: 'Hotaru-ika Pasta',
    subtitle: 'Firefly Squid & Spring Cabbage',
    mainIngredient: 'firefly squid',
    baseWeight: 160,
    inventory: [
      { name: 'Firefly Squid (Boiled)', amount: 160, unit: 'g', note: 'Remove eyes, beaks, and cartilage. Wash in Sake after cleaning.' },
      { name: 'Spaghetti', amount: 200, unit: 'g', note: 'Use a scale' },
      { name: 'Spring Cabbage', amount: 200, unit: 'g', note: 'Roughly chopped (~1/4 head)' },
      { name: 'Garlic', amount: 6, unit: 'g', note: '~2 cloves, minced' },
      { name: 'Red Pepper Flakes', amount: 5, unit: 'g', note: '1 Teaspoon / 5 SPOON (Level)' },
      { name: 'Mentsuyu (2x concentrate)', amount: 30, unit: 'g', note: '2 Tablespoons / 15 SPOON (x2)' },
      { name: 'Salted Butter', amount: 30, unit: 'g', note: '15 SPOON (x2 melted)' },
      { name: 'Salt (for boiling)', amount: 20, unit: 'g', note: '4 Teaspoons / 5 SPOON (x4)' },
    ],
    sauceTitle: 'The Wafu Base',
    sauce: [
      { name: 'Mentsuyu (2x)',     amount: 30,  unit: 'g', tool: '15 SPOON (x2)' },
      { name: 'Salted Butter',     amount: 30,  unit: 'g', tool: '15 SPOON (x2 melted)' },
      { name: 'Red Pepper Flakes', amount: 5,   unit: 'g', tool: '5 SPOON (Level)' },
    ],
    steps: [
      'Squid Prep: Remove eyes, beak, and cartilage from each squid. Wash in a little Sake to remove fishy smell.',
      'Boil 2L water with salt. Cook spaghetti per package minus 1 minute (al dente). Save the pasta water!',
      'Melt butter in a large pan over medium heat. Add minced garlic and red pepper flakes. Saut\u00e9 until golden.',
      'Add chopped cabbage, stir-fry until it softens. Add cleaned squid and cooked pasta.',
      'Pour in Mentsuyu. If dry, add 2\u20133 Tbsp pasta water for a silky sauce. Toss vigorously 30\u201345s until glossy.',
    ],
  },
};


/* ============================================
   DOM REFERENCES
   ============================================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const screenMenu   = $('#screen-menu');
const screenInput  = $('#screen-input');
const screenResult = $('#screen-result');

let currentDish = null;


/* ============================================
   NAVIGATION
   ============================================ */

function showScreen(screen) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
  window.scrollTo(0, 0);
}


/* ============================================
   SCREEN 1 → SCREEN 2
   ============================================ */

$$('.menu-card').forEach(card => {
  card.addEventListener('click', () => {
    const dishKey = card.dataset.dish;
    currentDish = RECIPES[dishKey];
    if (!currentDish) return;

    // Populate input screen
    $('#input-dish-label').textContent = `Dish ${currentDish.number}`;
    $('#input-dish-name').textContent = currentDish.name;
    $('#input-base-amount').textContent = `${currentDish.baseWeight}g ${currentDish.mainIngredient}`;
    $('#input-main-ingredient-name').textContent = currentDish.mainIngredient;
    $('#weight-input').value = '';
    $('#weight-input').placeholder = String(currentDish.baseWeight);

    showScreen(screenInput);
    setTimeout(() => $('#weight-input').focus(), 400);
  });
});


/* ============================================
   SCREEN 2 → BACK
   ============================================ */

$('#btn-back-to-menu').addEventListener('click', () => {
  showScreen(screenMenu);
});


/* ============================================
   SCALING + FORMATTING HELPERS
   ============================================ */

function formatAmount(value) {
  if (value === 0) return '0';
  if (value >= 100) return Math.round(value) + 'g';
  if (value >= 10) return parseFloat(value.toFixed(1)) + 'g';
  if (value >= 1) return parseFloat(value.toFixed(1)) + 'g';
  return parseFloat(value.toFixed(2)) + 'g';
}

function formatSpoonTool(baseAmount, scaledAmount, baseTool) {
  const ratio = scaledAmount / baseAmount;
  if (Math.abs(ratio - 1) < 0.001) return baseTool;

  // Build a descriptive tool hint based on scaled amount
  const spoons = [];
  let remaining = scaledAmount;

  if (remaining >= 15) {
    const tbsp = Math.floor(remaining / 15);
    spoons.push(`${tbsp} x 15 SPOON`);
    remaining -= tbsp * 15;
  }
  if (remaining >= 5) {
    const tsp = Math.floor(remaining / 5);
    spoons.push(`${tsp} x 5 SPOON`);
    remaining -= tsp * 5;
  }
  if (remaining >= 2.5) {
    spoons.push('1 x 2.5 SPOON');
    remaining -= 2.5;
  }
  if (remaining > 0.1) {
    spoons.push(`+${parseFloat(remaining.toFixed(1))}g scale`);
  }

  return spoons.length > 0 ? spoons.join(' + ') : baseTool;
}


/* ============================================
   SCREEN 2 → SCREEN 3 (CALCULATE)
   ============================================ */

function calculate() {
  if (!currentDish) return;

  const input = parseFloat($('#weight-input').value);
  if (!input || input <= 0) {
    $('#weight-input').focus();
    return;
  }

  const ratio = input / currentDish.baseWeight;
  const pct = Math.round(ratio * 100);

  // Header
  $('#result-dish-label').textContent = `Dish ${currentDish.number}`;
  $('#result-dish-name').textContent = currentDish.name;
  $('#result-ratio').textContent = `Scaled to ${input}g — ${pct}% of base`;

  // Pre-compute all scaleKey values for cross-references (e.g. potato_starch in notes)
  const scaledValues = {};
  currentDish.inventory.forEach(item => {
    if (item.scaleKey) {
      scaledValues[item.scaleKey] = formatAmount(item.amount * ratio);
    }
  });

  // Inventory
  const invList = $('#result-inventory');
  invList.innerHTML = '';
  currentDish.inventory.forEach(item => {
    const scaled = item.amount * ratio;

    const li = document.createElement('li');
    let noteText = item.note || '';
    // Replace {key} placeholders with pre-computed scaled values
    noteText = noteText.replace(/\{(\w+)\}/g, (_, key) => scaledValues[key] || key);

    li.innerHTML = `
      <span class="ing-name">${item.name}${noteText ? `<span class="ing-note">${noteText}</span>` : ''}</span>
      <span class="ing-amount">${formatAmount(scaled)}</span>
    `;
    invList.appendChild(li);
  });

  // Sauce
  $('#result-sauce-title').textContent = currentDish.sauceTitle;
  const sauceTbody = $('#result-sauce tbody');
  sauceTbody.innerHTML = '';
  currentDish.sauce.forEach(item => {
    const scaled = item.amount * ratio;
    const toolText = formatSpoonTool(item.amount, scaled, item.tool);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="sauce-name">${item.name}</td>
      <td class="sauce-amount">${formatAmount(scaled)}</td>
      <td class="sauce-tool">${toolText}</td>
    `;
    sauceTbody.appendChild(tr);
  });

  // Steps
  const stepsList = $('#result-steps');
  stepsList.innerHTML = '';
  currentDish.steps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    stepsList.appendChild(li);
  });

  showScreen(screenResult);
}

$('#btn-calculate').addEventListener('click', calculate);

// Enter key on input triggers calculation
$('#weight-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    calculate();
  }
});


/* ============================================
   SCREEN 3 → BACK / RESTART
   ============================================ */

$('#btn-back-to-input').addEventListener('click', () => {
  showScreen(screenInput);
  setTimeout(() => $('#weight-input').focus(), 400);
});

$('#btn-restart').addEventListener('click', () => {
  currentDish = null;
  showScreen(screenMenu);
});
