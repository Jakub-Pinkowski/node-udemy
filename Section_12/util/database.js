const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://pinkowskijakub:tBZSMc6Bwusk3gfB@udemy.vdc2gjx.mongodb.net/?retryWrites=true&w=majority',
        {
            useUnifiedTopology: true,
        }
    )
        .then((client) => {
            console.log('Connected!')
            callback(client)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = mongoConnect
