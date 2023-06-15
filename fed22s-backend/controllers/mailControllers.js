const sendEmail = require("../utils/sendEmail");

exports.createEmail = async (req, res) => {
  const { email, firstName, date, _id } = req.body;

  try {
    console.log("HEJ" + firstName, date, _id);
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const subject = "Bokningsbekräftelse WAIO Restaurang";
    const message = `
    <h3>Hej ${firstName}!</h3>
    <p>Tack för din bokning hos oss på <b>WAIO</b> ${date}.</p>
    <p>För att ändra din bokning tryck <a href="http://localhost:5173/admin/${_id}">här</a></p>
    <h4>Allt gott, WAIO!</h4>
    `;

    await sendEmail(send_to, sent_from, subject, message);
    return res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
