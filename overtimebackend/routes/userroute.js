const {
  register,
  login,
  adminupdateUser,
  admingetUser,
  getHod,
  getFm,
  getDepartments,
  addDepartment,
  deleteDepartment,
  getSpecificStaff,
} = require("../controllers/usercontroller");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.put("/updateuser", adminupdateUser);
router.post("/getspecificuser", getSpecificStaff);
router.post("/getuser", admingetUser);
router.post("/gethod", getHod);
router.post("/getfm", getFm);
router.get("/getdepartments", getDepartments);
router.post("/adddepartment", addDepartment);
router.post("/deletedepartment", deleteDepartment);

module.exports = router;
