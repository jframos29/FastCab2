const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const MyWaLib = function() {
  const MyWaLib = this || {};
  MyWaLib.sendMessage = () => {
    client.messages
      .create({
        from: "whatsapp:+14155238886",
        body: "Hello pato",
        to: "whatsapp:+573004654173"
      })
      .then(message => console.log(message.sid));
  };

  MyWaLib.receiveMessage = newMessage => {
    const twiml = new MessagingResponse();
    twiml.message("Bienvenido " + newMessage);
    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  };

  return MyWaLib;
};

module.exports = MyWaLib;
