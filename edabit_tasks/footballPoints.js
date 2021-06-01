function footballPoints(wins, draws, losses) {
  return wins * 3 + draws * 1 + losses * 0;
}

console.log(footballPoints(5, 0, 1)); // 15
