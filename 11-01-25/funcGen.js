function* numberGenerator() {
    let num = 1;
    while (true) {
        yield num++;
    }
}
const gen = numberGenerator();
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value);