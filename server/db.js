const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Lakshman:MongoDBAtlas@cluster1.1bbr5op.mongodb.net/Lmoa?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
};

module.exports = connectToMongo;
