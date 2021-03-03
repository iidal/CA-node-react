let counter = 0;
let database = [
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
];

//var str = JSON.stringify(database, null, 2)


module.exports = {
    findAll: () => { return database },
    findById: (id) => {
        let location = database.find((location) => location.id === id);
        if (!location) {
            return false;

        }
        return location;

    },
    deleteById: (id) => {
        const newdb = database.filter((location) => location.id !== id)
        if (newdb.length === database.length) {
            return false;
        }
        database = newdb;
        return true;

    },
};


