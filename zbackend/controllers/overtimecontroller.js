const { Overtime } = require("../models/index");
const { User } = require("../models/index");
const nodemailer = require("nodemailer");

async function getAllOvertime(req, res) {
  const { staffid } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        staffid,
      },
    });
    if (!findUser) {
      res.status(403).send("User does not exist");
    }

    const userData = findUser.get({ plain: true });

    if (userData?.staff_role?.toUpperCase() === "USER") {
      const overtimes = await Overtime.findAll({
        where: {
          stafflocation: userData?.stafflocation,
          department: userData?.department,
        },
      });
      res.status(200).send(overtimes);
    } else if (userData?.staff_role?.toUpperCase() === "FIRSTAPPROVAL") {
      const overtimes = await Overtime.findAll({
        where: {
          department: userData?.department,
        },
      });
      res.status(200).send(overtimes);
    } else if (userData?.staff_role?.toUpperCase() === "SECONDAPPROVAL") {
      const overtimes = await Overtime.findAll({
        where: {
          stafflocation: userData?.stafflocation,
        },
      });
      res.status(200).send(overtimes);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}
async function addNewOvertime(req, res) {
  const {
    staffid,
    overtimelist,
    firstapprovalname,
    firstapprovalid,
    secondapprovalname,
    secondapprovalid,
  } = req.body;

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
    if (userData?.staff_role?.toUpperCase() === "USER") {
      const newovertime = await Overtime.create({
        requeststaffid: staffid,
        overtimelist,
        requestfirstname: userData?.firstname,
        requestlastname: userData?.lastname,
        department: userData?.department,
        stafflocation: userData?.stafflocation,
        status: "PENDING",
        firstapprovalname,
        firstapprovalid,
        secondapprovalname,
        secondapprovalid,
      });

      const findfirstapp = await User.findOne({
        where: {
          staffid: firstapprovalid,
        },
      });
      if (!findfirstapp) {
        res.status(403).send("First Approval does not exist");
      }

      const approvalData = findfirstapp.get({ plain: true });

      var transporter = nodemailer.createTransport({
        host: "192.168.6.19",
        port: "25",
        auth: {
          user: "Forms",
          pass: "Duf19P@$$",
        },
        timeout: 30000,
        tls: {
          rejectUnauthorized: false,
        },
      });
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

      // console.log(approvalData?.email);

      var mailOptions = {
        from: "it.notifications@dufil.com",
        to: approvalData?.email,
        subject: "New Overtime Request for Approval",
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
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
      "
    >
    <img
    src="https://images2.imgbox.com/37/39/oic8SOf6_o.png"
    alt="Dufil Prima Foods Ltd. Logo"
    style="width: 100px"
  />
      <p>Dear ${firstapprovalname},</p>
      <p>
        This is an automated message to inform you that a new overtime request
        has been submitted by ${userData?.lastname} ${userData?.firstname} and requires your approval.
      </p>
      <p>
        You can review and approve the request by clicking the button below:
      </p>
      <p>
        <a
          href="http://localhost:3000"
          target="_blank"
          style="
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 3px;
          "
          >Review Request</a
        >
      </p>
      <p>Thank you for your attention to this matter.</p>
      <p>Sincerely,</p>
      <p>Dufil Prima foods ltd.</p>
    </div>
  </body>
              `,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      res.status(200).send("Overtime added successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function hodApprove(req, res) {
  const { staffid, overtimeid, approvalstatus, rejectionReason } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        staffid,
      },
    });
    if (!findUser) {
      throw new Error("User does not exist");
    }

    const getOvertime = await Overtime.findOne({
      where: {
        id: overtimeid,
      },
    });

    if (!getOvertime) {
      throw new Error("Overtime not found");
    }

    // console.log(getOvertime);

    const overtimeData = getOvertime.get({ plain: true });

    const findRequestapp = await User.findOne({
      where: {
        staffid: overtimeData?.requeststaffid,
      },
    });

    if (!findRequestapp) {
      throw new Error("Request id does not exist");
    }

    const requestdata = findRequestapp.get({ plain: true });

    const findsecondapp = await User.findOne({
      where: {
        staffid: overtimeData?.secondapprovalid,
      },
    });

    if (!findsecondapp) {
      throw new Error("First Approval does not exist");
    }

    const approvalData = findsecondapp.get({ plain: true });

    var transporter = nodemailer.createTransport({
      host: "192.168.6.19",
      port: "25",
      auth: {
        user: "Forms",
        pass: "Duf19P@$$",
      },
      timeout: 30000,
      tls: {
        rejectUnauthorized: false,
      },
    });
    var mailOptions = {
      from: "it.notifications@dufil.com",
      to: approvalData?.email,
      subject: "New Overtime Request for Approval",
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
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    "
  >
  <img
  src="https://images2.imgbox.com/37/39/oic8SOf6_o.png"
  alt="Dufil Prima Foods Ltd. Logo"
  style="width: 100px"
/>
    <p>Dear ${overtimeData?.secondapprovalname},</p>
    <p>
      This is an automated message to inform you that a new overtime request
      has been submitted by ${overtimeData?.requestfirstname} ${overtimeData?.requestlastname} and was approved by ${overtimeData?.firstapprovalname}.
    </p>
    <p>
      You can review and approve the request by clicking the button below:
    </p>
    <p>
      <a
        href="http://localhost:3000"
        target="_blank"
        style="
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 3px;
        "
        >Review Request</a
      >
    </p>
    <p>Thank you for your attention to this matter.</p>
    <p>Sincerely,</p>
    <p>Dufil Prima foods ltd.</p>
  </div>
</body>
            `,
    };
    var mailOptions2 = {
      from: "it.notifications@dufil.com",
      to: requestdata?.email,
      subject: "New Overtime Request for Approval",
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
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    "
  >
  <img
  src="https://images2.imgbox.com/37/39/oic8SOf6_o.png"
  alt="Dufil Prima Foods Ltd. Logo"
  style="width: 100px"
/>
    <p>Dear ${overtimeData?.requestfirstname} ${overtimeData?.requestlastname},</p>
    <p>
      This is an automated message to inform you that the status of your overtime request has been updated by ${overtimeData?.firstapprovalname}.
    </p>
    <p>
      You can review and approve the request by clicking the button below:
    </p>
    <p>
      <a
        href="http://localhost:3000"
        target="_blank"
        style="
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 3px;
        "
        >Review Request</a
      >
    </p>
    <p>Thank you for your attention to this matter.</p>
    <p>Sincerely,</p>
    <p>Dufil Prima foods ltd.</p>
  </div>
</body>
`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    transporter.sendMail(mailOptions2, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const updateOvertime = Overtime.update(
      { status: approvalstatus, rejectionReason },
      {
        where: {
          id: overtimeid,
        },
      }
    );

    res.status(200).send("Updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}
async function fmApprove(req, res) {
  const { staffid, overtimeid, approvalstatus, rejectionReason } = req.body;

  console.log({ staffid, overtimeid, approvalstatus, rejectionReason });
  try {
    const findUser = await User.findOne({
      where: {
        staffid,
      },
    });
    if (!findUser) {
      throw new Error("User does not exist");
    }

    const getOvertime = await Overtime.findOne({
      where: {
        id: overtimeid,
      },
    });

    if (!getOvertime) {
      throw new Error("Overtime not found");
    }

    // console.log(getOvertime);

    const overtimeData = getOvertime.get({ plain: true });

    const findRequestapp = await User.findOne({
      where: {
        staffid: overtimeData?.requeststaffid,
      },
    });

    if (!findRequestapp) {
      throw new Error("Request id does not exist");
    }

    const requestdata = findRequestapp.get({ plain: true });

    const findfirstapp = await User.findOne({
      where: {
        staffid: overtimeData?.firstapprovalid,
      },
    });

    if (!findfirstapp) {
      throw new Error("First Approval does not exist");
    }

    const approvalData = findfirstapp.get({ plain: true });

    var transporter = nodemailer.createTransport({
      host: "192.168.6.19",
      port: "25",
      auth: {
        user: "Forms",
        pass: "Duf19P@$$",
      },
      timeout: 30000,
      tls: {
        rejectUnauthorized: false,
      },
    });

    var mailOptions = {
      from: "it.notifications@dufil.com",
      to: requestdata?.email,
      subject: "New Overtime Request for Approval",
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
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    "
  >
  <img
  src="https://images2.imgbox.com/37/39/oic8SOf6_o.png"
  alt="Dufil Prima Foods Ltd. Logo"
  style="width: 100px"
/>
    <p>Dear ${overtimeData?.firstapprovalname},</p>
    <p>
      This is an automated message to inform you that the status of your overtime request has been updated by ${overtimeData?.secondapprovalname}.
    </p>
    
    <p>
      You can review and approve the request by clicking the button below:
    </p>
    <p>
      <a
        href="http://localhost:3000"
        target="_blank"
        style="
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 3px;
        "
        >Review Request</a
      >
    </p>
    <p>Thank you for your attention to this matter.</p>
    <p>Sincerely,</p>
    <p>Dufil Prima foods ltd.</p>
  </div>
</body>
`,
    };

    var mailOptions2 = {
      from: "it.notifications@dufil.com",
      to: requestdata?.email,
      subject: "New Overtime Request for Approval",
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
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    "
  >
  <img
  src="https://images2.imgbox.com/37/39/oic8SOf6_o.png"
  alt="Dufil Prima Foods Ltd. Logo"
  style="width: 100px"
/>
    <p>Dear ${overtimeData?.requestfirstname} ${overtimeData?.requestlastname},</p>
    <p>
      This is an automated message to inform you that the status of your overtime request has been updated by ${overtimeData?.firstapprovalname}.
    </p>
    <p>
      You can review and approve the request by clicking the button below:
    </p>
    <p>
      <a
        href="http://localhost:3000"
        target="_blank"
        style="
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 3px;
        "
        >Review Request</a
      >
    </p>
    <p>Thank you for your attention to this matter.</p>
    <p>Sincerely,</p>
    <p>Dufil Prima foods ltd.</p>
  </div>
</body>
`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    transporter.sendMail(mailOptions2, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const updateOvertime = Overtime.update(
      { status: approvalstatus, rejectionReason },
      {
        where: {
          id: overtimeid,
        },
      }
    );

    res.status(200).send("Updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = { getAllOvertime, addNewOvertime, hodApprove, fmApprove };
