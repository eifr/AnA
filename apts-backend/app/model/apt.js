/**
 * Apt Entity
 */

class Apt {
    constructor(id, address, floor, rooms, sqrMtr, parking, storage, arnona, vaad, price) {
        this.id = id;
        this.address = address;
        this.floor = floor;
        this.rooms = rooms;
        this.sqrMtr = sqrMtr;
        this.parking = parking;
        this.storage = storage;
        this.arnona = arnona;
        this.vaad = vaad;
        this.price = price;
    }
}

module.exports = Apt;