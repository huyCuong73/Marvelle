module.exports = {
    multipleMongooseToObject: function ( mongooseArray ) {
        return mongooseArray.map( mongooseArray => mongoose.toObject() )
    },
    mongooseToObject: function ( mongoose ) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}