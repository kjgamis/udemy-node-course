// CRUD create delete update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const dbName = 'task-manager'

// connection to mongodb is async
MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) { 
        return console.log('Unable to connect to database', error)
    }
    console.log('Connected to MongoDB successfully')
    const db = client.db(dbName)

    db.collection('users').insertOne({
        name: 'Karen Gamis',
        age: 22
    })

    // client.close()
})