const { User, Payments } = require("../models/index");

async function pay(req, res) {
  const { id, amount } = req.body;
  try {
    // Find the user
    const user = await User.findOne({
      where: {
        id,
      },
    });

    // If user is not found, throw an error
    if (!user) {
      throw new Error("User not found");
    }

    // Convert user data to a plain object
    const userData = user.get({ plain: true });

    // Create a payment record
    await Payments.create({
      userid: id,
      amount,
    });

    // Update the user's balance
    const newBalance = (Number(user.balance) || 0) + Number(amount);
    await User.update(
      { balance: newBalance },
      {
        where: {
          id,
        },
      }
    );

    // Send a success response
    res.status(200).send("Amount added successfully");
  } catch (error) {
    // Send an error response
    res.status(403).send(error.message);
  }
}

async function getBalance(req, res) {
  const { id } = req.body;
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }
    const userData = user.get({ plain: true });

    res.status(200).send(userData?.balance);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = {
  pay,
  getBalance,
};
