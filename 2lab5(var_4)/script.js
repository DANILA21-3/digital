var DataRecorder = /** @class */ (function () {
    function DataRecorder() {
        this.data = [];
    }
    DataRecorder.prototype.record = function (param) {
        var _this = this;
        this.data.push(param);
        console.log('Запись: ' + param + ' добавлена!');
        setTimeout(function () { return _this.remove(); }, 10000);
    };
    DataRecorder.prototype.remove = function () {
        var removedValue = this.data.pop();
        console.log('Запись удалена! Значение: ' + removedValue);
    };
    DataRecorder.prototype.startRecording = function () {
        var _this = this;
        var count = 0;
        var interval = setInterval(function () {
            if (count < 6) {
                _this.record(Date.now());
                count++;
            }
            else {
                clearInterval(interval);
            }
        }, 10000);
    };
    return DataRecorder;
}());
var recorder = new DataRecorder();
recorder.startRecording();
function createLogger(message) {
    return function () {
        console.log(message);
    };
}
var logHello = createLogger('Hello, World!');
logHello();
