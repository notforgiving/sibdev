const Router = require("express");
const Request = require("../models/Request");
const router = new Router();
const authMiddleware = require("./../middleware/authmiddleware");

router.post("/save", authMiddleware, async (req, res) => {
  try {
    const { text, name, sort, value } = req.body;
    const mark = new Request({ text, name, sort, value, user: req.user.id });

    await mark.save();

    return res.json({ message: "Запрос сохранен",status: 1 });
  } catch (e) {
    res.json({ message: "Ошибка при сохранении запроса", status: 0 });
  }
});

router.post("/change", authMiddleware, async (req, res) => {
  try {
    const { text, name, sort, value, objectid } = req.body;
    Request.findByIdAndUpdate(
      objectid,
      { $set: { text: text,name: name,sort: sort,value: value } },
      function (err) {
        console.log(err);
      }
    );

    return res.json({ message: "Запрос изменен",status: 1 });
  } catch (e) {
    res.send({ message: "Ошибка при изменении запроса",status: 0 });
  }
});

router.get("/get", authMiddleware, async (req, res) => {
  try {
    const requests = await Request.find({ user: req.user.id });

    return res.json(requests);
  } catch (e) {
    res.send({ message: "Ошибка при получении запросов",status: 0 });
  }
});

router.post("/del", authMiddleware, async (req, res) => {
  try {
    const { id } = req.body;
    Request.findByIdAndDelete(id, function (err, docs) {
      if (err){
        return res.json({ message: "Ошибка при удалении запроса",status: 0 });
      }
      else{
        return res.json({ message: "Запрос удален", status: 1 });
      }
  });
  } catch (e) {
    console.log(e);
    res.send({ message: "Ошибка при подключении к базе", status: 404 });
  }
});

module.exports = router;
