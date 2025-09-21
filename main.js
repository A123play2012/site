const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Статические файлы (ваше фото или сайт)
app.use("/", express.static(path.join(__dirname, "public")));

// Заготовленные ответы
const answers = {
  "test": "Hello World!"
};

// Endpoint для ответов
app.post("/get_answer", (req, res) => {
  const msg = (req.body?.message || "").toLowerCase().trim();
  const answer = answers[msg] ?? "Я не знаю ответа на это сообщение.";
  res.json({ answer });
});

// Yhub сам подставляет PORT через переменную окружения
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
