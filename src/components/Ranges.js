import Range from './Range'

export default class Ranges {

    constructor (ranges) {
        this.ranges = ranges
        console.log(ranges)
    }

    contains (date) {
        for(let k in this.ranges) {
            if(
                date.getTime() >= this.ranges[k].getStart().getTime() &&
                date.getTime() <= this.ranges[k].getEnd().getTime()
            ) {
                return this.ranges[k]
            }
        }
        return null
    }

    static fromTimestamps(ranges) {
        return new Ranges(ranges.map(range => {
            return new Range(new Date(range[0]), new Date(range[1]))
        }))
    }



}