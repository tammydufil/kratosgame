const { getBalance, pay } = require("../controllers/moneycontroller");
const { register, login } = require("../controllers/usercontroller");

const router = require("express").Router();

// Register Route Start
router.post("/register", register);
router.post("/login", login);
// Register Route End

// Money routes start

router.post("/getbalance", getBalance);
router.post("/pay", pay);
// Money routes end

module.exports = router;
