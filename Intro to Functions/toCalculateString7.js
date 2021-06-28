function moveTheItem(str = "") {
  let general = str.length;
  let part = str.length % 3;
  let index = 0;
  let res = "";

  for (let i = 0; i < parseInt(general / 3); i++) {
    let threeParticles = str.substr(index, 3);
    let turnAround = threeParticles[1] + threeParticles[2] + threeParticles[0];
    res += turnAround;
    threeParticles = "";
    turnAround = "";
    index += 3;
  }

  return res + str.slice(general - part, general);
}
console.log(moveTheItem("abc-def254"));
