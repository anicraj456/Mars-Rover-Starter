const Message = require("./message");

class Rover {
   // Write code here!
   constructor(position){
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
  
      //let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
      //let message = new Message('Test message with two commands', commands);
      //let rover = new Rover(98382);    // Passes 98382 as the rover's position.
      //let response = rover.receiveMessage(message);

       //console.log(response);
        //return message.name;
       /*let results = message.commands;
       let commandArrayLength = message.commands.length;
       if(commandArrayLength > 1){
         return 2;
        }else 
         return "TEST_NAME";
       }*/
  receiveMessage(message){
         const results = [];
    console.log("commands------"+message.commands.length);
      for(let i=0;i<message.commands.length;i++){
        const tempObject = message.commands[i];
        const command = tempObject.commandType;
        const value = tempObject.value;
        const result = this.process(command, value);
        results.push(result); 
    }

    return { name: message.name, results: results };
  }


    process(command, value){

      let result = {}

      if(command == 'STATUS_CHECK'){
        result = {
          completed: true,
          mode: this.mode,
          generatorWatts: this.generatorWatts,
          position: this.position
      };

      }else if(command == 'MOVE'){
        if (this.mode === "LOW_POWER") { 
          result.completed = false; 
          result.position = this.position;
        }
        else {
          result.completed = true;
          result.position = value; this.position = value;
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

    //return { name: message.name, results: results };
  }


    



module.exports = Rover;