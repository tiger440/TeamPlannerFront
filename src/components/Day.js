export default class Month {
    constructor(year, month, day, hour) {
        this.year = year
        this.month = month
        this.day = day
        this.hour = hour
        this.start = new Date(this.year, this.month, this.day, this.hour)
    }

    getName () {
        return this.start.toLocaleDateString('fr-fr', {hour: '2-digit'})
    }

    static createMonthsforYear (year) {
        let months = []
        for (let i = 0; i < 12; i++) {
            months.push(new Month(year, i))
        }
        return months
    }
}