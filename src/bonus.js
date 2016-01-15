function Bonus() {
  this.numberOfBowls = 0
  this.scoreCard = [];
}

Bonus.prototype.addPoints = function (numberOfPins) {
  if (this.scoreCard.length < this.numberOfBowls) {
    this.scoreCard.push(numberOfPins);
  }
};

Bonus.prototype.set = function (bonusType) {
  switch (bonusType) {
    case "strike":
      this.numberOfBowls = 2;
      break;
    case "spare":
      this.numberOfBowls = 1;
      break;
  }
};

Bonus.prototype.getTotal = function () {
  return this.scoreCard.reduce(function(a, b) { return a + b; }, 0);
};
