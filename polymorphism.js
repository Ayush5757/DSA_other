console.log("pollymorphism");
// Using Inheritace with method overRiding
class HCMishra {
  HC_born_Time() {
    console.log("Born on 1945");
  }
}
class Bablu extends HCMishra {
  Bablu_born_Time() {
    console.log("Born on 1969");
  }
}
class Mannu extends Bablu {
  Mannu_born_Time() {
    console.log("Born on 1999");
  }
}

const mannu = new Mannu()
console.log(mannu.HC_born_Time());
console.log(mannu.Bablu_born_Time());
console.log(mannu.Mannu_born_Time());
const bablu = new Bablu()
console.log(bablu.Mannu_born_Time?.());
console.log(bablu.Bablu_born_Time());
console.log(bablu.HC_born_Time());