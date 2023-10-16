const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  it("constructor sets position and default values for mode and generatorWatts",function(){
      let rover = new Rover('MOVE','NORMAL',110);
      expect(rover.position).toEqual('MOVE');
      expect(rover.mode).toEqual('NORMAL');
      expect(rover.generatorWatts).toEqual(110);
    });


    it("response returned by receiveMessage contains the name of the message",function(){
      let rover = new Rover('MOVE','NORMAL',110);
      let commandArray = [];
      let commandObj1 = new Command("commandType", 10);
      commandArray.push(commandObj1);
      let message = new Message('TEST_NAME',commandArray);
      expect(rover.receiveMessage(message)).toEqual('TEST_NAME');
    });


    it("response returned by receiveMessage includes two results if two commands are sent in the message",function(){
      let rover = new Rover('MOVE','NORMAL',110);
      let commandArray = [];
      let commandObj1 = new Command("commandType", 10);
      let commandObj2 = new Command("commandType", 20);
      commandArray.push(commandObj1);
      commandArray.push(commandObj2);
      let message = new Message('TEST_NAME',commandArray);
      expect(rover.receiveMessage(message)).toEqual(2);
    });

    //TEST 10
    it("responds correctly to the status check command",function(){
      let rover = new Rover('MOVE','NORMAL',110);
      let commandArray = [];
      let commandObj1 = new Command("commandType", 10);
      let commandObj2 = new Command("commandType", 20);
      commandArray.push(commandObj1);
      commandArray.push(commandObj2);
      let message = new Message('TEST_NAME',commandArray);
      expect(rover.receiveMessage(message).results).toEqual(2);
    });



});
