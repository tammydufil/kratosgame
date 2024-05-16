const { User, Sequelize } = require("../models/index");
const nodemailer = require("nodemailer");

const bcrypt = require("bcryptjs");

async function register(req, res) {
  const {
    firstname,
    lastname,
    country,
    phonenumber,
    email,
    username,
    password,
  } = req.body;
  try {
    if (
      !firstname ||
      !lastname ||
      !country ||
      !phonenumber ||
      !email ||
      !username ||
      !password
    ) {
      throw new Error("All fields are required");
    }
    const findUser = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{ username }, { email }],
      },
    });
    if (findUser) {
      throw new Error("User Exists");
    }

    // var transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "ajayitamilore@gmail.com",
    //     pass: "pesd jtho serg wxct",
    //   },
    //   tls: {
    //     rejectUnauthorized: false,
    //   },
    // });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ajayitamilore@gmail.com",
        pass: "pesd jtho serg wxct",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    var mailOptions = {
      from: "it.notifications@dufil.com",
      to: email,
      subject: "Welcome to Kratosgame",
      html: `
      <body
      style="
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
      "
    >
      <div
        style="
          max-width: 600px;
          margin: 20px auto;
          border: 1px solid #ccc;
          border-radius: 5px;
        "
      >
        <div
          style="
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: black;
            display: flex;
            padding: 10px 0;
            justify-content: center;
            text-align: center;
          "
        >
          <img
            src="https://images2.imgbox.com/b6/5a/a6nU702O_o.png"
            alt="Kratos Logo"
            style="width: 100px"
          />
        </div>
  
        <div style="padding: 20px">
          <p>Dear ${lastname} ${firstname}</p>
          <p>
            Welcome to Kratosgame! We are thrilled to have you join our exciting
            platform where you can do what you love and make money.
          </p>
  
          <p>
            With your account now active, you're ready to dive into the world of
            competitive gaming. Fund your account and start making money now
          </p>
          
          <p>Best Regards,</p>
          <p>Kratosgame.</p>
        </div>
      </div>
    </body>
              `,
    };

    transporter.sendMail(mailOptions, async function (error, info) {
      try {
        if (error) {
          throw new Error("Error sending email");
        } else {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          const newUser = await User.create({
            firstname,
            lastname,
            country,
            phonenumber,
            email,
            username,
            password: hashedPassword,
            token: "",
            balance: "",
          });

          res.status(200).send({
            message: "User Created Successfully",
            newUser,
          });
        }
      } catch (error) {
        res.status(405).send(error.message);
      }
    });
  } catch (error) {
    res.status(405).send(error.message);
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  try {
    if (!username) {
      throw new Error("Username required");
    }
    if (!password) {
      throw new Error("Password required");
    }
    const findUser = await User.findOne({
      where: {
        username,
      },
    });
    if (!findUser) {
      throw new Error("Invalid username");
    }
    const userData = findUser.get({ plain: true });

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

module.exports = {
  register,
  login,
};
