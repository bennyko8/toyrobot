import Robot from "./robot";

let rob; 
describe('Robot functions', function() {

    beforeEach(function(){
      rob = new Robot();
    });
    afterEach(function(){
      rob.remove();
    });
    
    it("should return a invalid position", function() {
      expect(rob.place(5,6,"North")).toEqual("Invalid position");
    });

    it("should return a valid position", function() {
      expect(rob.place(4,3,"North")).toEqual({"face": "North", "placed": true, "x": 4, "y": 3});
    });

    it("should return X and Y coorindates and face direction are reset and should be null", function() {
      rob.place(2,3,"East");
      expect(rob.remove()).toEqual({"face": null, "placed": false, "x": null, "y": null});
    });

    it("should return the robot is not on the table", function() {
      expect(rob.report()).toEqual("Error the robot is not on the table");
    });

    it("should return x=1, y=2 face=North, placed=true", function() {
      rob.place(1,2,"North");
      expect(rob.report()).toEqual({"face": "North", "placed": true, "x": 1, "y": 2});
    });

    it("should return x=1, y=3 face=North, placed=true", function() {
      rob.place(1,2,"North");
      rob.move();
      expect(rob.report()).toEqual({"face": "North", "placed": true, "x": 1, "y": 3});
    });


    it("should return cannot move", function() {
      rob.place(4,4,"North");
      expect(rob.move()).toEqual("Cannot Move");
    });

    it("should return x=0, y=1 face=North, placed=true", function() {
      rob.place(0,0,"North");
      rob.move();
      expect(rob.report()).toEqual({"face": "North", "placed": true, "x": 0, "y": 1});
    });

    it("should return x=0, y=0 face=West, placed=true", function() {
      rob.place(0,0,"North");
      rob.left();
      expect(rob.report()).toEqual({"face": "West", "placed": true, "x": 0, "y": 0});
    });

    it("should return x=3, y=3 face=North, placed=true", function() {
      rob.place(1,2,"East");
      rob.move();
      rob.move();
      rob.left();
      rob.move();
      expect(rob.report()).toEqual({"face": "North", "placed": true, "x": 3, "y": 3});
    });

    it("should start from South and move left to East",function() {
      rob.place(1,2,"South");
      rob.left();
      expect(rob.report()).toEqual({"face": "East", "placed": true, "x": 1, "y": 2});
    });

    it("should start from South and move right to West",function() {
      rob.place(1,2,"South");
      rob.right();
      expect(rob.report()).toEqual({"face": "West", "placed": true, "x": 1, "y": 2});
    });

});