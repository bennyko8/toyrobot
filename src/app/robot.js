const directions = {
    North:"North",
    East: "East",
    South:"South",
    West: "West"
};

class Robot {
    constructor () {
        this.x = null;
        this.y = null;
        this.face = null;
        this.placed = false; 
    }
    
    checkValidPosition(x,y){
        if(x<=4 && x>=0 && y<=4 && y>=0){
            return true;
        }else{
            return false;
        }
    }

    checkValidDirection(face){
        if(face===directions.North || face===directions.South || face===directions.East || face===directions.West){
            return true;
        }
        return false;
    }

    place(x,y,face) {
        if(this.checkValidPosition(x,y)){
            this.x=x;
            this.y=y;
        } else {
            return "Invalid position";
        }

        if(this.checkValidDirection(face)){
            this.face=face; 
        } else {
            return ("Invalid direction");
        }

        this.placed = true; 
        return this;
    }

    remove(){
        this.x=null;
        this.y=null;
        this.face=null;
        this.placed=false; 
        return this;

    }

    report(){
        if(this.placed){
            console.log(`${this.x}, ${this.y}, ${this.face}`);
            return this;
        } else {
            return "Error the robot is not on the table";
        }
    }

    move(){
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