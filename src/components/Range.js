export default class Range {

    constructor (start, end) {
        this.start = start
        this.end = end
    }

    getStart () {
        return this.start
    }

    getEnd () {
        return this.end
    }


    isDepart (date) {
        console.log(date.toDateString())
        console.log(this.start.toDateString())
        return date.toDateString() === this.start.toDateString()
    }

    isEnd (date) {
        return date.toDateString() === this.end.toDateString()
    }


}