const words = [
  { word: 'cristina', hint: 'pelirojo' },
  { word: 'adrian (adrimunoz06)', hint: 'delincuentes' },
  { word: 'nachojpeg', hint: 'peugeot' },
  { word: 'martitamarmota', hint: 'ojos' },
  { word: 'ioanis', hint: 'rumania' },
  { word: 'mysterguille (guille)', hint: 'ordenador' },

  { word: 'fútbol', hint: 'césped' },
  { word: 'playa', hint: 'sal' },
  { word: 'pizza', hint: 'masa' },
  { word: 'navidad', hint: 'nieve' },
  { word: 'programación', hint: 'teclas' },
  { word: 'cine', hint: 'sala' },
  { word: 'viajes', hint: 'mapas' },
  { word: 'coches', hint: 'ruedas' },
  { word: 'música', hint: 'eco' },
  { word: 'videojuegos', hint: 'vidas' },
  { word: 'supermercado', hint: 'pasillos' },
  { word: 'Donald Trump', hint: 'gorra' },
  { word: 'Eminem', hint: 'rap' },
  { word: 'Messi', hint: 'rosario' },
  { word: 'Cristiano Ronaldo', hint: 'salto' },
  { word: 'Shakira', hint: 'caderas' },
  { word: 'Taylor Swift', hint: 'eras' },
  { word: 'Bad Bunny', hint: 'conejo' },
  { word: 'Elon Musk', hint: 'cohetes' },
  { word: 'Ibai', hint: 'twitch' },
  { word: 'Aitana', hint: 'voz' },
  { word: 'Piqué', hint: 'defensa' },
  { word: 'Karol G', hint: 'azul' },
  { word: 'Rosalía', hint: 'motomami' },
  { word: 'MrBeast', hint: 'retos' },
  { word: 'diarrea', hint: 'urgente' },
  { word: 'pedos', hint: 'ruido' },
  { word: 'resaca', hint: 'agua' },
  { word: 'suegra', hint: 'comida' },
  { word: 'lunes', hint: 'odio' },
  { word: 'siesta', hint: 'sofá' },
  { word: 'insomnio', hint: 'techo' },
  { word: 'atasco', hint: 'claxon' },
  { word: 'multas', hint: 'papel' },
  { word: 'spoiler', hint: 'silencio' },
  { word: 'orgullo gay', hint: 'arcoíris' },
  { word: 'boda', hint: 'anillos' },
  { word: 'cumpleaños', hint: 'velas' },
  { word: 'fiesta', hint: 'confeti' },
  { word: 'amigos', hint: 'risas' },
  { word: 'familia', hint: 'mesa' },
  { word: 'vacaciones', hint: 'fuera' },
  { word: 'zombie', hint: 'lento' },
  { word: 'vampiro', hint: 'noche' },
  { word: 'pirata', hint: 'parche' },
  { word: 'ninja', hint: 'sombra' },
  { word: 'superhéroe', hint: 'capa' },
  { word: 'meme', hint: 'viral' },
  { word: 'crush', hint: 'nervios' },
  { word: 'examen', hint: 'blanco' },
  { word: 'copas', hint: 'hielo' },
  { word: 'karaoke', hint: 'vergüenza' },
  { word: 'cuñado', hint: 'experto' },
  { word: 'tinder', hint: 'catalogo' },
  { word: 'hacienda', hint: 'socio' },
  { word: 'dieta', hint: 'lunes' },
  { word: 'hipoteca', hint: 'cadena' },
  { word: 'autonomo', hint: 'superviviente' },
  { word: 'wifi', hint: 'oxigeno' },
  { word: 'madrugar', hint: 'tortura' },
  { word: 'ikea', hint: 'laberinto' },
  { word: 'taper', hint: 'herencia' },
  { word: 'vinted', hint: 'traperos' },
  { word: 'dentista', hint: 'hipoteca' },
  { word: 'peluquero', hint: 'calvo' },
  { word: 'cerveza', hint: 'zumo' },
  { word: 'aguacate', hint: 'oro' },
  { word: 'pension', hint: 'espejismo' },
  { word: 'influencer', hint: 'postureo' },
  { word: 'audios', hint: 'podcast' },
  { word: 'lavadora', hint: 'calcetines' },
  { word: 'despertador', hint: 'enemigo' },
  { word: 'after', hint: 'zombis' },
  { word: 'comunidad', hint: 'junta' },
  { word: 'ascensor', hint: 'silencio' },
  { word: 'curriculum', hint: 'literatura' },
  { word: 'domingo', hint: 'bajon' },
  { word: 'gasolinera', hint: 'atraco' },
  { word: 'terracita', hint: 'oficina' },
  { word: 'chanclas', hint: 'guiri' },
  { word: 'jefe', hint: 'marron' },
  { word: 'bateria', hint: 'agonía' },
  { word: 'croquetas', hint: 'madre' },
  { word: 'gazpacho', hint: 'bebible' },
  { word: 'filtro', hint: 'mentira' },
  { word: 'exnovia', hint: 'bloqueo' },
  { word: 'birra', hint: 'moneda' },
  { word: 'ticket', hint: 'basura' },
  { word: 'buffet', hint: 'orgullo' },
  { word: 'gymbro', hint: 'espejo' },
  { word: 'choni', hint: 'aro' },
  { word: 'itv', hint: 'examen' },
  { word: 'paracetamol', hint: 'comodín' },
  { word: 'palo selfie', hint: 'turista' },
  { word: 'rebaque', hint: 'centimos' },
];


// DOM
const setupDiv = document.getElementById('setup');
const gameDiv = document.getElementById('game');
const endDiv = document.getElementById('end');

const playerNameInput = document.getElementById('playerNameInput');
const addPlayerBtn = document.getElementById('addPlayerBtn');
const playersChips = document.getElementById('playersChips');

const impostorsInput = document.getElementById('impostorsInput');
const startBtn = document.getElementById('startBtn');
const errorP = document.getElementById('error');

const turnTitle = document.getElementById('turnTitle');
const secretP = document.getElementById('secret');
const hintP = document.getElementById('hint');
const showBtn = document.getElementById('showBtn');
const nextBtn = document.getElementById('nextBtn');

const restartBtn = document.getElementById('restartBtn');
const starterNameEl = document.getElementById('starterName');

// LocalStorage keys
const LS_PLAYERS = 'impostor_players_v1';
const LS_IMPOSTORS = 'impostor_num_impostors_v1';

// State
let playerNames = [];
let players = []; // { name, role } role: "IMPOSTOR" | word
let turnIndex = 0;
let turnsSeen = 0;
let revealed = false;

let starterIndex = 0;
let currentHint = '';
let currentWord = '';

// Helpers
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickImpostors(total, count) {
  const set = new Set();
  while (set.size < count) set.add(Math.floor(Math.random() * total));
  return set;
}

function normalizeName(name) {
  return name.trim().replace(/\s+/g, ' ');
}

function saveSetupToStorage() {
  localStorage.setItem(LS_PLAYERS, JSON.stringify(playerNames));
  localStorage.setItem(LS_IMPOSTORS, String(impostorsInput.value || 1));
}

function loadSetupFromStorage() {
  try {
    const savedPlayers = JSON.parse(localStorage.getItem(LS_PLAYERS) || '[]');
    if (Array.isArray(savedPlayers)) playerNames = savedPlayers;
  } catch {
    playerNames = [];
  }

  const savedImpostors = Number(localStorage.getItem(LS_IMPOSTORS) || 1);
  impostorsInput.value = String(Number.isFinite(savedImpostors) ? savedImpostors : 1);
}

function renderChips() {
  playersChips.innerHTML = '';
  playerNames.forEach((name, idx) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.innerHTML = `
      <span>${name}</span>
      <button aria-label="Eliminar jugador">✕</button>
    `;
    chip.querySelector('button').addEventListener('click', () => {
      playerNames.splice(idx, 1);
      renderChips();
      updateImpostorsMax();
      errorP.textContent = '';
      saveSetupToStorage();
    });
    playersChips.appendChild(chip);
  });
}

function updateImpostorsMax() {
  const max = Math.max(1, playerNames.length - 1);
  impostorsInput.max = String(max);

  const current = Number(impostorsInput.value || 1);
  if (current > max) impostorsInput.value = String(max);
  if (current < 1) impostorsInput.value = '1';
}

function goToEnd() {
  gameDiv.classList.add('hidden');
  endDiv.classList.remove('hidden');

  const starter = players[starterIndex];
  starterNameEl.textContent = starter?.name || '';
}

function goToSetup() {
  endDiv.classList.add('hidden');
  gameDiv.classList.add('hidden');
  setupDiv.classList.remove('hidden');

  secretP.classList.add('hidden');
  hintP.classList.add('hidden');
  hintP.textContent = '';

  revealed = false;
  showBtn.textContent = 'Ver';
  errorP.textContent = '';
  starterNameEl.textContent = '';
}

// Add player
function addPlayer() {
  const raw = playerNameInput.value;
  const name = normalizeName(raw);

  if (!name) return;

  const exists = playerNames.some(n => n.toLowerCase() === name.toLowerCase());
  if (exists) {
    errorP.textContent = 'Ese jugador ya existe.';
    return;
  }

  playerNames.push(name);
  playerNameInput.value = '';
  errorP.textContent = '';
  renderChips();
  updateImpostorsMax();
  saveSetupToStorage();
  playerNameInput.focus();
}

addPlayerBtn.addEventListener('click', addPlayer);
playerNameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addPlayer();
  }
});

impostorsInput.addEventListener('input', () => {
  updateImpostorsMax();
  saveSetupToStorage();
});

// Start game
startBtn.addEventListener('click', () => {
  const names = [...playerNames];
  const numImpostors = Number(impostorsInput.value);

  if (names.length < 3) {
    errorP.textContent = 'Añade al menos 3 jugadores.';
    return;
  }
  if (numImpostors < 1 || numImpostors >= names.length) {
    errorP.textContent = 'Número de impostores no válido.';
    return;
  }

  // 1) Elegimos quién empieza ANTES de enseñar roles
  starterIndex = Math.floor(Math.random() * names.length);

  // 2) Elegimos palabra/pista
  const selected = randomItem(words);
  currentWord = selected.word;
  currentHint = selected.hint;

  // 3) Elegimos impostores
  const impostors = pickImpostors(names.length, numImpostors);

  // 4) Construimos jugadores con roles
  players = names.map((name, i) => ({
    name,
    role: impostors.has(i) ? 'IMPOSTOR' : currentWord,
  }));

  // 5) El “turno de ver rol” empieza por el que empieza la partida
  turnIndex = starterIndex;
  turnsSeen = 0;
  revealed = false;

  setupDiv.classList.add('hidden');
  gameDiv.classList.remove('hidden');

  renderTurn();
});

function renderTurn() {
  const player = players[turnIndex];
  turnTitle.textContent = `Turno de ${player.name}`;

  secretP.textContent = player.role;

  secretP.classList.add('hidden');
  hintP.classList.add('hidden');
  hintP.textContent = '';

  revealed = false;
  showBtn.textContent = 'Ver';
}

showBtn.addEventListener('click', () => {
  revealed = !revealed;

  secretP.classList.toggle('hidden', !revealed);
  showBtn.textContent = revealed ? 'Ocultar' : 'Ver';

  // ✅ SOLO si:
  // - está revelado
  // - es impostor
  // - y es el jugador que empieza (starterIndex)
  const player = players[turnIndex];
  const isImpostor = player?.role === 'IMPOSTOR';
  const isStarter = turnIndex === starterIndex;

  if (revealed && isImpostor && isStarter) {
    hintP.textContent = `Pista: ${currentHint}`;
    hintP.classList.remove('hidden');
  } else {
    hintP.textContent = '';
    hintP.classList.add('hidden');
  }
});

nextBtn.addEventListener('click', () => {
  turnsSeen++;

  if (turnsSeen >= players.length) {
    goToEnd();
    return;
  }

  turnIndex = (turnIndex + 1) % players.length;
  renderTurn();
});

restartBtn.addEventListener('click', () => {
  goToSetup();
});

// INIT
loadSetupFromStorage();
renderChips();
updateImpostorsMax();
saveSetupToStorage();
