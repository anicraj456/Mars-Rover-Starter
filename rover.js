const Message = require("./message");

class Rover {
   // Write code here!
   constructor(position){
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }

  receiveMessage(message){
         const results = [];

      for(let i=0;i<message.commands.length;i++){
        const tempObject = message.commands[i];
        const command = tempObject.commandType;
        const value = tempObject.value;
        const result = this.roverStatus(command, value);
        results.push(result); 
    }
    return { message: message.name, results: results };
  }

   roverStatus(command, value){
      let result = {}
      if(command == 'STATUS_CHECK'){
        result = {
          completed: true,
          roverStatus: {
          mode: this.mode,
          generatorWatts: this.generatorWatts,
          position: this.position
      }};

      }else if(command == 'MOVE'){
        if (this.mode === "LOW_POWER") { 
          result.completed = false; 
          result.position = this.position;
        }
        else {
          result.completed = true;
          result.position = value; 
          this.position = value;
        }

      }else if(command == 'MODE_CHANGE'){
        result.completed = true;
        result.mode = value; this.mode = value;

      }else{
        result.completed = false;
        result.message = 'UNKNOWN COMMAND';
      }
      return result;
    }
  }

  module.exports = Rover;