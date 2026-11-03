var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]

var MongoClient = require('mongodb').MongoClient;

// statsdb is the database name
var url = "mongodb://localhost:27017/statsdb";

// Connect to the db
MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
}, function (err, db) {
    if (err) throw err;
    var dbo = db.db("statsdb");

    // Task 1: Create a database called statsdb
    /*console.log("Task 1: Database statsdb created!");
    db.close();*/

    // Task 2: Create a collection called uscensus
    /*dbo.createCollection("uscensus", function (err, res) {
        if (err) throw err;
        console.log("Task 2: Collection uscensus created!");
        db.close();
    })*/

    // Task 3: Add the given data to the collection
    /*dbo.collection("uscensus").insertMany(stats, function (err, res) {
        if (err) throw err;
        console.log("Task 3: Number of documents inserted: " + res.insertedCount);
        db.close();
    })*/

    // Task 4: Add the following records
    /*var newStats = [
        { 'city': 'Pacoima', 'zip': '91331', 'state': 'CA', 'income': '60360', 'age': '33' },
        { 'city': 'Ketchikan', 'zip': '99950', 'state': 'AK', 'income': '00000', 'age': '00' }
    ];
    dbo.collection("uscensus").insertMany(newStats, function (err, res) {
        if (err) throw err;
        console.log("Task 4: Number of new records inserted: " + res.insertedCount);
        db.close();
    })*/

    // Task 5: Find out the zip code for Corona, NY
    /*var query = { city: 'Corona', state: 'NY' };
    dbo.collection("uscensus").findOne(query, function (err, result) {
        if (err) throw err;
        console.log("Task 5: The zip code for Corona, NY is " + result.zip);
        db.close();
    })*/

    // Task 6: Find out the income for all cities in California
    /*var myquery = { state: /^CA$/ };
    dbo.collection("uscensus").find(myquery).toArray(function (err, result) {
        if (err) throw err;
        console.log("Task 6: Income for all cities in California:");
        result.forEach(function (doc) {
            console.log("  " + doc.city + ", " + doc.state + ": " + doc.income);
        });
        db.close();
    })*/

    // Task 7: Update the income and age for Alaska: 38910 and 46
    /*var myquery = { state: 'AK' };
    var newvalues = { $set: { income: '38910', age: '46' } };
    dbo.collection("uscensus").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("Task 7: " + res.modifiedCount + " document updated (Alaska income: 38910, age: 46)");
        db.close();
    })*/

    // Task 8: Sort records in ascending order by state
    var mysort = { state: 1 };
    dbo.collection("uscensus").find({}, { projection: { _id: 0 } }).sort(mysort).toArray(function (err, result) {
        if (err) throw err;
        console.log("Task 8: Records sorted in ascending order by state:");
        console.log(result);
        db.close();
    });
});
