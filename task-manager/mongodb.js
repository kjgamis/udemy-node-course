// CRUD create delete update delete

// const mongodb = require('mongodb')
const { MongoClient, ObjectID } = require('mongodb')
// const ObjectID = mongodb.ObjectID

const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017'
const dbName = 'task-manager'

// connection to mongodb is async
MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) { 
        return console.log('Unable to connect to database', error)
    }
    console.log('Connected to MongoDB successfully')
    const db = client.db(dbName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Karen Gamis',
    //     age: 22
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }
    //     // output from the insertOne operation
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jane Doe',
    //         age: 23
    //     }, {
    //         name: 'John Doe',
    //         age: 24
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users.')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'buy supplies',
    //         completed: false
    //     },
    //     {
    //         description: 'eat ice cream',
    //         completed: true
    //     },
    //     {
    //         description: 'watch movie',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks.')
    //     }
    //     console.log(result.ops)
    // })

    client.close()
})