var { SerialPort } = require("serialport");
var message = "Olá";

var serialPort = new SerialPort({
    path: 'COM6',
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
});

serialPort.on("open", function () {
    console.log("-- Connection opened --");
    serialPort.on("data", function (data) {
        console.log("Data received: " + data);
    });
});

function currentTime() {
    serialPort.write(message, function (err) {
        if (err) {
            return console.log("Error on write: ", err.message);
        }
        console.log("Message sent successfully");
    });

    let t = setTimeout(function () { currentTime() }, 1000);
}

currentTime();