const units = [
    new Unit('archer', 90, 50),
    new Unit('infantryman', 80, 70),
    new Unit('chevalier', 100, 100)
];

const squad = new Squad(units);
console.log(squad);