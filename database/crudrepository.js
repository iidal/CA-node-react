let counter = 0;
let database = [
    { id: counter++, latitude: 60, longitude: 70 },
    { id: counter++, latitude: 40, longitude: 80 },
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
    add: (newContent) => {
        newContent.id = counter++;
        database.push(newContent);
    }
};


