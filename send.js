var { SerialPort } = require("serialport");
var message = "Hakuna Matata";

var serialPort = new SerialPort({
    path: 'COM6',
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
});

serialPort.write(message, function (err) {
    if (err) {
        return console.log("Error on write: ", err.message);
    }
    console.log("Message sent successfully");
});