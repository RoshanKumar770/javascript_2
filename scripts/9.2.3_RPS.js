let score = JSON.parse(localStorage.getItem
  ('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updatescoreElement();

function playgame(playermove) {
  const ComputerMove = pickComputermove();
  let result = '';

  if (playermove === 'rock') {
    if (ComputerMove === 'rock') {
      result = 'That\'s a Tie';
    } else if (ComputerMove === 'paper') {
      result = 'You Lose';
    } else if (ComputerMove === 'scissors') {
      result = 'You Win';
    }
  } else if (playermove === 'paper') {
    if (ComputerMove === 'rock') {
      result = 'You Win';
    } else if (ComputerMove === 'paper') {
      result = 'That\'s a Tie';
    } else if (ComputerMove === 'scissors') {
      result = 'You Lose';
    }
  } else if (playermove === 'scissors') {
    if (ComputerMove === 'rock') {
      result = 'You Lose';
    } else if (ComputerMove === 'paper') {
      result = 'You Win';
    } else if (ComputerMove === 'scissors') {
      result = 'That\'s a Tie';
    }
  }

  if (result === 'You Win') {
    score.wins += 1;
  }
  else if (result === 'You Lose') {
    score.losses += 1;
  }
  else if (result === 'That\'s a Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updatescoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You <img src="assets/${playermove}-emoji.png" class="move-icon">
  <img src="assets/${ComputerMove}-emoji.png" class="move-icon"> Computer`;
}

function updatescoreElement() {
  document.querySelector('.js-score').innerHTML =
    `wins:${score.wins} , ties:${score.ties} , losses:${score.losses}`;
}
function pickComputermove() {
  const rand_no = Math.random();
  let ComputerMove = '';

  if (rand_no >= 0 && rand_no < 1 / 3) {
    ComputerMove = 'rock';
  } else if (rand_no >= 1 / 3 && rand_no < 2 / 3) {
    ComputerMove = 'paper';
  } else if (rand_no >= 2 / 3 && rand_no < 1) {
    ComputerMove = 'scissors';
  }
  return ComputerMove;
}