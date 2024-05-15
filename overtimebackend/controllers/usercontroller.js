const { User, Departments } = require("../models/index");
const { Staffdetails } = require("../models/index2");

const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

async function register(req, res) {
  const {
    firstname,
    lastname,
    staff_role,
    staffid,
    department,
    password,
    stafflocation,
    email,
  } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        staffid,
      },
    });
    if (findUser) {
      throw new Error("User Exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      firstname,
      lastname,
      staff_role,
      app_role: "USER",
      staffid,
      department,
      stafflocation,
      token: "",
      password: hashedPassword,
      status: "ACTIVE",
      email,
    });

    res.status(200).send({
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function login(req, res) {
  const { staffid, password } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        staffid,
      },
    });

    if (!staffid || !password) {
      throw new Error("Staffid and Password are required");
    }
    if (!findUser) {
      throw new Error("User does not exist");
    }

    const userData = findUser.get({ plain: true });

    console.log(userData);

    if (userData.status.toUpperCase() !== "ACTIVE") {
      throw new Error("Account Deactivated");
    }

    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    res.status(200).send({
      message: "User Loggedin Successfully",
      userData,
    });
  } catch (error) {
    console.log(error);
    res.status(405).send(error.message);
  }
}

async function admingetUser(req, res) {
  const { staffid } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        staffid,
      },
    });
    if (!findUser) {
      throw new Error("User does not exist");
    }
    res.status(200).send({
      message: "User Loggedin Successfully",
      findUser,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function adminupdateUser(req, res) {
  const {
    firstname,
    lastname,
    staff_role,
    staffid,
    department,
    stafflocation,
    status,
    email,
  } = req.body;
  try {
    const findUser = await User.update(
      {
        firstname,
        lastname,
        staff_role,
        department,
        stafflocation,
        token: "",
        status,
        email,
      },
      {
        where: {
          staffid,
        },
      }
    );
    res.status(200).send({
      message: "User Loggedin Successfully",
      findUser,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getHod(req, res) {
  const { staffid } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        staffid,
      },
    });
    if (!findUser) {
      throw new Error("User does not exist");
    }
    const userData = findUser.get({ plain: true });
    if (userData.status.toUpperCase() !== "ACTIVE") {
      throw new Error("Account Deactivated");
    }

    const firstapproval = await User.findAll({
      where: {
        department: userData?.department,
        stafflocation: userData?.stafflocation,
        staff_role: "FIRSTAPPROVAL",
      },
    });

    res.status(200).send({
      message: "User Loggedin Successfully",
      firstapproval,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function getFm(req, res) {
  const { staffid } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        staffid,
      },
    });
    if (!findUser) {
      throw new Error("User does not exist");
    }
    const userData = findUser.get({ plain: true });
    if (userData.status.toUpperCase() !== "ACTIVE") {
      throw new Error("Account Deactivated");
    }

    const secondapproval = await User.findAll({
      where: {
        department: userData?.department,
        stafflocation: userData?.stafflocation,
        staff_role: "SECONDAPPROVAL",
      },
    });

    res.status(200).send({
      message: "User Loggedin Successfully",
      secondapproval,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function addDepartment(req, res) {
  const { name } = req.body;
  try {
    const exists = await Departments.findOne({
      where: { name },
    });
    console.log(exists);

    if (exists) {
      throw new Error("Department Exists");
    }

    const newDept = await Departments.create({
      name,
    });

    res.status(200).send({
      message: "Department created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function deleteDepartment(req, res) {
  const { id } = req.body;
  try {
    const exists = await Departments.findOne({
      id,
    });
    if (!exists) {
      throw new Error("Department does not Exists");
    }
    await Departments.destroy({
      where: {
        id,
      },
    });
    alert("Department deleted");
    res.status(200).send({
      message: "Department deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function getDepartments(req, res) {
  try {
    const allDepts = await Departments.findAll();
    res.status(200).send({
      message: "Department retrieved successfully",
      allDepts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function getSpecificStaff(req, res) {
  const { requestid, Staffid } = req.body;
  try {
    const requestor = await User.findOne({
      where: { staffid: requestid },
    });

    const requestorData = requestor.get({ plain: true });

    const user = await Staffdetails.findOne({
      where: { Staffid },
    });

    const userdata = user.get({ plain: true });
    // console.log(requestorData?.department === userdata?.Dept);

    if (!user) {
      throw new Error("User does not exist");
    }

    if (
      requestorData?.department === userdata?.Dept &&
      requestorData?.stafflocation === userdata?.stafflocation
    ) {
      res.status(200).send({
        message: "User retrieved successfully",
        user,
      });
    } else {
      throw new Error("User not in department");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  register,
  login,
  admingetUser,
  adminupdateUser,
  getHod,
  getFm,
  addDepartment,
  getDepartments,
  deleteDepartment,
  getSpecificStaff,
};
