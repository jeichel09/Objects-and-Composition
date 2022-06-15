function solve(name, population, treasury) {
    let result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {Math.floor(this.treasury += this.population * this.taxRate)},
        applyGrowth(percent) {this.population += Math.floor(this.population * percent / 100)},
        applyRecession(percent) {this.treasury -= Math.floor((this.treasury * percent)/100)}
    }
    return result;
}
let city = solve('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

city.applyRecession(10);
console.log(city.treasury);


//console.log(solve('Tortuga', 7000, 15000));
//console.log(solve('Santo Domingo', 12000, 23500));