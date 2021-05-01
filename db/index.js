const mongoose = require("mongoose");

const connect = () => {
  mongoose.set("debug", true);

  mongoose.connect(
    `mongodb://4leaf:fourleaf0309@210.114.1.127:27017/admin`,
    {
      dbName: `CRUD_JEJ`,
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.log(error);
        console.log(`❌ CONNECTION FAILED TRY AGAIN`);
      } else {
        console.log(`✅ MONGODB CONNCETION SUCCES`);
      }
    }
  );
};

mongoose.connection.on(`error`, (error) => {
  console.log(error);
  console.log(`❌ CONNECTION FAILED TRY AGAIN`);
  connect();
});

mongoose.connection.on(`disconnect`, () => {
  console.log(`❌ CONNECTION FAILED TRY AGAIN`);
  connect();
});

module.exports = connect;
