export class BackendError{
    status: number;
    statusText: string;
    constructor({status, statusText}: {status: number, statusText: string}){
        this.status = status;
        this.statusText = statusText;
    }
}