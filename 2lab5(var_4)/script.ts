class DataRecorder {
    private data: number[] = [];

    public record(param: number): void {
        this.data.push(param);
        console.log('Запись: ' + param + ' добавлена!');
        setTimeout(() => this.remove(), 10000); 
    }

    public remove(): void {
        const removedValue = this.data.pop();
        console.log('Запись удалена! Значение: ' + removedValue);
    }

    public startRecording(): void {
        let count = 0;
        const interval = setInterval(() => {
            if (count < 6) {
                this.record(Date.now());
                count++;
            } else {
                clearInterval(interval); 
            }
        }, 10000);
    }
}


const recorder = new DataRecorder();
recorder.startRecording();


function createLogger(message: string) {
    return function() {
        console.log(message);
    };
}


const logHello = createLogger('Hello, World!');
logHello(); 