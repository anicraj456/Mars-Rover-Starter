const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  //TEST 7

  it("should check constructor sets position and default values for mode and generatorWatts",function(){
      let rover = new Rover('MOVE','NORMAL',110);
      expect(rover.position).toEqual('MOVE');
      expect(rover.mode).toEqual('NORMAL');
      expect(rover.generatorWatts).toEqual(110);
    });

//TEST 8

    it("response returned by receiveMessage contains the name of the message",function(){
      let rover = new Rover('MOVE','NORMAL',110);
      let commandArray = [];
      let commandObj1 = new Command("commandType", 10);
      commandArray.push(commandObj1);
      let message = new Message('TEST_NAME',commandArray);
      let results = rover.receiveMessage(message);
      expect(results.message).toEqual('TEST_NAME');
    });

 //TEST 9
    it("response returned by receiveMessage includes two results if two commands are sent in the message",function(){
      let rover = new Rover('MOVE','NORMAL',110);
      let commandArray = [];
      let commandObj1 = new Command("commandType", 10);
      let commandObj2 = new Command("commandType", 20);
      //let commandObj3 = new Command("commandType", 30);
      commandArray.push(commandObj1);
      commandArray.push(commandObj2);
      //commandArray.push(commandObj3);
      let message = new Message('TEST_NAME',commandArray);
      let results = rover.receiveMessage(message);
      expect(results.results.length).toEqual(commandArray.length);
    });

    //TEST 10
    it("responds correctly to the status check command",function(){
      let rover = new Rover('MOVE','NORMAL',110);
      let commandArray = [];
      let commandObj1 = new Command("STATUS_CHECK");
      commandArray.push(commandObj1);
      let message = new Message('TEST_NAME',commandArray);
      let results = rover.receiveMessage(message);
      
      let  status = {completed: true,
        roverStatus: { 

        mode: rover.mode,
        generatorWatts: rover.generatorWatts,
        position: rover.position
        }};

        let tempCheck;
        for (let i=0;i<message.commands.length;i++) {
            if (message.commands[i].commandType === 'STATUS_CHECK') { 
                tempCheck = i;
                break;
            }
        }
        expect(results.results[tempCheck]).toEqual(status);
    });

    //TEST 11

      it("responds correctly to the mode change command",function(){
       let rover = new Rover('MOVE','NORMAL',110);
       let commandArray = [];
       let commandObj1 = new Command("MODE_CHANGE", "LOW_POWER");
       commandArray.push(commandObj1);
       let message = new Message('TEST_NAME',commandArray);
       let results = rover.receiveMessage(message);
       expect(results.results[0].completed).toEqual(true);
       expect(rover.mode).toEqual("LOW_POWER");
      });

      //TEST 12
      it("responds with a false completed value when attempting to move in LOW_POWER mode",function(){
        let rover = new Rover('MOVE','NORMAL',110);
        let commandArray = [];
        let commandObj1 = new Command("MODE_CHANGE", "LOW_POWER");
        let commandObj2 = new Command("MOVE", "LOW POWER");
        commandArray.push(commandObj1);
        commandArray.push(commandObj2);
        let message = new Message('TEST_NAME',commandArray);
        let results = rover.receiveMessage(message);
        expect(results.results[1].completed).toEqual(false);
      });

     //TEST 13
      it("responds with the position for the move command",function(){
      let rover = new Rover('MOVE','NORMAL',110);
      let commandArray = [];
      let commandObj1 = new Command("MOVE", 98382);
      commandArray.push(commandObj1);
      let message = new Message('TEST_NAME',commandArray);
      let results = rover.receiveMessage(message);
      expect(rover.position).toEqual(98382);
      });
 });
