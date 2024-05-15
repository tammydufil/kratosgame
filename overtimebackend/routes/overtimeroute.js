const {
  addNewOvertime,
  getAllOvertime,
  hodApprove,
  fmApprove,
} = require("../controllers/overtimecontroller");

const router = require("express").Router();

router.post("/addovertime", addNewOvertime);
router.post("/getovertime", getAllOvertime);
router.post("/hodapprove", hodApprove);
router.post("/fmapprove", fmApprove);

module.exports = router;
