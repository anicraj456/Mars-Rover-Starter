class Rover {
   // Write code here!
   constructor(position, mode, generatorWatts = 110){
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = generatorWatts;
   }
   receiveMessage(message){

   }
}



module.exports = Rover;