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
         let results = [];

    }

    



module.exports = Rover;