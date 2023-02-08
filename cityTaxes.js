function solve(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 0.1,
        collectTaxes() {
            this.treasury += this.taxRate*this.population; 
        },
        applyGrowth(percent) {
            this.treasury*=percent/100;
        },
        applyRecession(percent) {
            this.treasury /= percent/100;
        }

    }
    console.log(city);
}

solve(('sia', 2333, 213231132));