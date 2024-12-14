const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");

// Инициализация Firebase Admin SDK
admin.initializeApp();

// Настройка CORS
const corsHandler = cors({origin: "https://gleb812.github.io"});

// Пример облачной функции с CORS
exports.api = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    // Ваша логика обработки запроса
    res.send("CORS успешно настроен!");
  });
});
