export class TimeService {
    constructor(){}
    
    getCurrentTime(callback){
      callback(new Date().toLocaleTimeString());
      
      setInterval(() => {
         callback(new Date().toLocaleTimeString());
      }, 1000);      
    }
}