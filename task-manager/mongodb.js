// CRUD create delete update delete

// const mongodb = require('mongodb')
const { MongoClient, ObjectID } = require('mongodb')
// const ObjectID = mongodb.ObjectID

// const id = new ObjectID()
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

    // ========== CREATE ========== //
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

    // ========== READ ========== //
    // db.collection('users').findOne({ _id: new ObjectID("5cfd6bed416c950613269ada")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user.')
    //     }
    //     console.log(user)
    // })
    // // console.log(users)

    // // ----- using the cursor ----- //
    // db.collection('users').find({ age: 24 }).toArray((error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user.')
    //     }
    //     console.log(user[0])
    // })

    // db.collection('users').find({ age: 24 }).count((error, count) => {        
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5cfd7073a66c40077c08c542") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to find task.')
    //     }
    //     console.log(task)
    // })

    // // ----- incomplete tasks ----- //
    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to find tasks')
    //     }
    //     console.log(tasks)
    // })

    // ========== UPDATE ========== //
    db.collection('users').updateOne({
        _id: new ObjectID('5cfd6bed416c950613269ada')
    }, {
        $inc: {
            age: -1
        }
    }).then((result) => {
        console.log('Result:', result)
    }).catch((error) => {
        console.log('Error:', error)
    })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log('Completed', result)
    }).catch((error) => {
        console.log('Error:', error)
    })

    client.close()
})