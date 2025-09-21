// server.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// Статическая страница с фото (ваш текущий сайт)
app.use("/", express.static(path.join(__dirname, "public")));

// Заготовленные ответы — можно вынести в answers.json или в БД
const answers = {
	"test": "Hello World!"
};

// Endpoint для получения ответа
app.post("/get_answer", (req, res) => {
	const msg = (req.body?.message || "").toString().toLowerCase().trim();
	const answer = answers[msg] ?? "???";
	res.json({ answer });
});

// Запуск
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));