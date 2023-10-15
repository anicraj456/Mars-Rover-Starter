const Message = require("./message");

class Rover {
   // Write code here!
   constructor(position, mode, generatorWatts = 110){
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = generatorWatts;
   }
   receiveMessage(message){
      let message = new Message(name,commands);

      message is a Message object
Returns an object containing at least two properties:
message: the name of the original Message object
results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands.

      /*let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
      let message = new Message('Test message with two commands', commands);
      let rover = new Rover(98382);    // Passes 98382 as the rover's position.
       let response = rover.receiveMessage(message);
       console.log(response);*/

   }
}



module.exports = Rover;