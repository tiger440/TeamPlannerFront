import Range from './Range'

export default class Ranges {

    constructor (ranges) {
        this.ranges = ranges
    }

    contains (date) {
        for (let k in this.ranges) {
            if (this.ranges[k].contains(date)) {
                return this.ranges[k]
            }
        }
        return null
    }

    addRange (range) {
        for (let k in this.ranges) {
            if (this.ranges[k].intersect(range)) {
                this.ranges[k].merge(range)
            }
        }
        this.ranges.push(range)
    }

    removeRange (range) {
        this.ranges = this.ranges.filter(r => r !== range)
    }

    static fromTimestamps (ranges) {
        return new Ranges(ranges.map(range => {
            return new Range(new Date(range[0]), new Date(range[1]))
        }))
    }



}