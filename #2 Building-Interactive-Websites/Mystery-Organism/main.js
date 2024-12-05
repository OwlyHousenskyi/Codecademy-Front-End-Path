// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

const pAequorFactory = (number, arrayDNABases) => {
  return {
    specimenNum: number,
    dna: arrayDNABases,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      let commonBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          commonBases++;
        }
      }
      const percentage = ((commonBases / this.dna.length) * 100).toFixed(2);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`);
    },
    willLikelySurvive() {
      const survivalBases = this.dna.filter(base => base === 'C' || base === 'G');
      return (survivalBases.length / this.dna.length) >= 0.6;
    }
  };
}

const survivingPAequor = [];
let idCounter = 1;
while (survivingPAequor.length < 30) {
  const newPAequor = pAequorFactory(idCounter, mockUpStrand());
  if (newPAequor.willLikelySurvive()) {
    survivingPAequor.push(newPAequor);
  }
  idCounter++;
}

console.log(survivingPAequor);
