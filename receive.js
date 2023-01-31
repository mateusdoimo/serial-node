var { SerialPort } = require("serialport");
var port = "COM3";

var serialPort = new SerialPort({
    path: 'COM3',
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