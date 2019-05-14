// ======================================================
// Puerto
// ======================================================
process.env.PORT = process.env.PORT || 3000;

// ======================================================
// Entorno
// ======================================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ======================================================
// Database
// ======================================================
let urlDB;

//if (process.env.NODE_ENV === 'dev') {
  //  urlDB = 'mongodb://localhost:27017/cafe';
//} else {
    urlDB = "mongodb+srv://Paul:ab12CD34@cafe-8rcv0.mongodb.net/test?retryWrites=true";
//}
console.log(urlDB)
process.env.URLDB = urlDB;
