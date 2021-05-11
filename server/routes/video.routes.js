const Router = require("express");
const router = new Router();
const authMiddleware = require("./../middleware/authmiddleware");

router.get("/get", authMiddleware, async (req, res) => {
  // const { text, name, sort, value } = req;
  return res.json({ req: req });
});

module.exports = router;
