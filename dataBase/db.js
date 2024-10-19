const mongoose = require('mongoose')
const mongoDbUrl = 'mongodb://localhost:27017/MyDatabase'

const connectDb = async ()=>
{
    try {
        const connect = await mongoose.connect(mongoDbUrl)
        console.log('mongo db is connected')
    } catch (error) {
        console.log('error :',error)
    }
}

module.exports = connectDb;