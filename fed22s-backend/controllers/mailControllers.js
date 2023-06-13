const sendEmail = require("../utils/sendEmail");

exports.sendEmail = async (req, res) => {
  const { email } = req.body;

  try {
    await sendEmail();
  } catch (error) {}
};
