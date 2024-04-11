function Bus() {
    this.leftSeats = 15;
    this['rightSeats'] = 9;
    this.totalSeats = function () {
        console.log(this.leftSeats + this['rightSeats']);
    } ;
    this.getBusColor = function () {
        return red;
    }
}