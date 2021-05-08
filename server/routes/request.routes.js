const Router = require("express");
const Request = require("../models/Request");
const router = new Router();
const authMiddleware = require("./../middleware/authmiddleware");

router.post("/save", authMiddleware, async (req, res) => {
  try {
    const { text, name, sort, value } = req.body;
    const mark = new Request({ text, name, sort, value, user: req.user.id });

    await mark.save();

    return res.json({ message: "Запрос сохранен" });
  } catch (e) {
    console.log(e);
    res.send({ message: "Ошибка при сохранении запроса" });
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

    return res.json({ message: "Request done" });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

router.get("/get", authMiddleware, async (req, res) => {
  try {
    const requests = await Request.find({ user: req.user.id });

    return res.json(requests);
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
