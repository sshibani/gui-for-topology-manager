export class Message {
    Type: string;
    Value: string;
    Timeout: number;
    constructor(type: string, value: string, timeout: number) {
        this.Type = type;
        this.Value = value;
        this.Timeout = timeout;
    }
}