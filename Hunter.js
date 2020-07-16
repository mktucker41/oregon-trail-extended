class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }
    hunt() {
        this.food += 5
    }
    eat() {
        if (this.food >= 2) {
            this.food -= 2
        } else {
            this.isHealthy = false
            this.food = 0
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }
}