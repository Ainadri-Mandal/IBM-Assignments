const mongoose = require('mongoose');
const connectDB = mongoose.connect(process.env.MongoURL);
module.exports = {
connectDB
}





// const mongoose = require("mongoose");
// const mongoURL = mongoose.connect(`mongodb+srv://ainadrimandal:ainadrimandal@cluster0.38ifs.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0`)

// exports.connectDB = mongoose.connect(mongoURL);

// module.exports={
//     connectDB
// }