const directions = {
    North:"North",
    East: "East",
    South:"South",
    West: "West"
};

const limts = {
    min:0,
    x:4,
    y:4
}

class Robot {
    constructor () {
        this.x = null;
        this.y = null;
        this.face = null;
        this.placed = false; 
    }
    
    //Check valid x and y coordinates 
    checkValidPosition(x,y){
        if(x<=limts.x && x>=limts.min && y<=limts.y && y>=limts.min){
            return true;
        }else{
            return false;
        }
    }

    //Check direction facing 
    checkValidDirection(face){
        if(face===directions.North || face===directions.South || face===directions.East || face===directions.West){
            return true;
        }
        return false;
    }

    
    place(x,y,face) {
        //assign x and y coordinates once valid
        if(this.checkValidPosition(x,y)){
            this.x=x;
            this.y=y;
        } else {
            return "Invalid position";
        }

        //assign direction facing once valid
        if(this.checkValidDirection(face)){
            this.face=face; 
        } else {
            return ("Invalid direction");
        }

        this.placed = true; 
        return this;
    }

    //remove the robot from the board 
    remove(){
        this.x=null;
        this.y=null;
        this.face=null;
        this.placed=false; 
        return this;

    }

 
    report(){
        //print current coordinates and facing direction if placed 
        if(this.placed){
            console.log(`${this.x}, ${this.y}, ${this.face}`);
            return this;
        } else {
            return "Error the robot is not on the table";
        }
    }

    move(){
        //Each if statement checks if the move would exceed the table
        if(this.face===directions.North){
            if(this.y+1<=4){
                this.y=this.y+1; 
            } else{
                return "Cannot Move";
            }
        }
        else
        if(this.face===directions.South){
            if(this.y-1>=0){
                this.y=this.y-1; 
            } else{
                return "Cannot Move";
            }
        }
        else 
        if(this.face===directions.East){
            if(this.x+1<=4){
                this.x=this.x+1; 
            } else{
                return "Cannot Move";
            }
        }
        else 
        if(this.face===directions.West){
            if(this.x-1>=0){
                this.x=this.x-1; 
            }else{
                return "Cannot Move";
            }
        }

    }

    right(){
        // Check to see if the robot is placed before moving right
        if(this.place){
            if(this.face==directions.North){
                this.face=directions.East;
            } else 
            if(this.face==directions.East){
                this.face=directions.South;
            } else
            if(this.face==directions.South){
                this.face=directions.West;
            } else
            if(this.face==directions.West){
                this.face=directions.North;
            }
        }

    }

    // Check to see if the robot is placed before moving left
    left(){

        if(this.place){
            if(this.face==directions.North){
                this.face=directions.West;
            } else
            if(this.face==directions.East){
                this.face=directions.North;
            } else
            if(this.face==directions.South){
                this.face=directions.East;
            } else 
            if(this.face==directions.West){
                this.face=directions.South;
            }
        }

    }

}

export default Robot;