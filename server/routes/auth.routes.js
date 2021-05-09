const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const router = new Router();
const authMiddleware = require("./../middleware/authmiddleware");

router.post("/registration",
  [
    check("login", "Uncorrect login").isLength({ min: 5 }),
    check(
      "password",
      "Password must be longer than 3 and shorter than 12"
    ).isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Некорректные данные", errors });
      }

      const { login, password } = req.body;

      const candidate = await User.findOne({ login });

      if (candidate) {
        return res
          .json({ message: `Пользователь с e-mail ${login} уже существует` });
      }
      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({ login, password: hashPassword });
      await user.save();
      return res.json({ message: "Пользователь создан" });
    } catch (e) {
      console.log(e);
      res.send({ message: "Ошибка на сервере" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ login });
    if (!user) {
      return res.json({ message: "Такой пользователь не найден" });
    }
    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.json({ message: "Неверный пароль" });
    }
    const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
      expiresIn: "30m",
    });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Ошибка на сервере" });
  }
});

router.get("/auth", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
      expiresIn: "30m",
    });
    return res.json({
      token,
      user: {
        id: user.id,
        login: user.login,
      },
    });
  } catch (e) {
    console.log('error');
    res.send({ message: "Ошибка на сервере" });
  }
});

module.exports = router;
