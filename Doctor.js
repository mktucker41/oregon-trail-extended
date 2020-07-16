class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }
    heal(traveler) {
        return traveler.isHealthy = true
    }
}