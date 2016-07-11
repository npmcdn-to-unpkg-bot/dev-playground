export class TimeService {
    getCurrentTime(callback){
        callback(new Date().toLocaleTimeString();
        setInterval(() => callback(new Date().toLocaleTimeString(), 1000);
    }
}