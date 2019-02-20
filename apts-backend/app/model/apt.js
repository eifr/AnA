/**
 * Apt Entity
 */

class Apt {
    constructor(id, city, description, address, floor, rooms, sqrMtr, parking, storage, arnona, vaad, price, photos) {
        this.id = id;
        this.city = city;
        this.description = description;
        this.address = address;
        this.floor = floor;
        this.rooms = rooms;
        this.sqrMtr = sqrMtr;
        this.parking = parking;
        this.storage = storage;
        this.arnona = arnona;
        this.vaad = vaad;
        this.price = price;
        this.photos = photos;
    }
}

module.exports = Apt;
