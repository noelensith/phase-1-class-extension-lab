// Your code here
class Polygon {
    constructor(array) {
        this.side = array
        this.count = this.side.length
    }
    get countSides() {
        return this.count
    }
    get perimeter() {
        let p = 0;
        for (let i = 0; i < this.count; i++) {
            p+= this.side[i]
        }
        return p
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.side[0]
        let side2 = this.side[1]
        let side3 = this.side[2]
        if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let side1 = this.side[0]
        let side2 = this.side[1]
        let side3 = this.side[2]
        let side4 = this.side[3]
        if ((side1 === side2) && (side1 === side3) && (side1 === side4)) {
            return true
        } else {
            return false
        }
    }
    get area() {
        return this.side[0] * this.side[0]
    }
}