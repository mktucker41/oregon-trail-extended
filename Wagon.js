class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if (this.capacity - this.passengers.length) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            const currentTraveler = this.passengers[index];
            if (currentTraveler.isHealthy === false) {
                return true
            }
        }
        return false
    }
    totalFood() {
        let foodAmount = 0
        for (let index = 0; index < this.passengers.length; index++) {
            const currentTraveler = this.passengers[index];
            foodAmount += currentTraveler.food
        }
        return foodAmount
    }
}