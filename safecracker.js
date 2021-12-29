//Safecracker
//Traditional safes use a three-wheel locking mechanism, with the safe combination using a dial on the door of the safe
//The dial on the door of the safe. The dialis marked with clockwise increments between 0-99. The three-number combination
//is entered by first dialing to th left (clockwise) then to the left (counter clockwise) and then to the right again.
//Combination numbers are read from the top of the dial

//Given the starting(top) position of the dial and the increments used for each turn of the dial, return an array containing
//the combination of the safe.

function safecracker(start,arr){
    let combo=[0,0,0]
    combo[0]=(()=>{
        let first=start+arr[0]          //add to start position the first amount of turns
        if(first>=100){                 //if greater than 100 
            return first-=100               //subtract 100 because dial only goes to 100(ie 0)
        }
        return first
        })()
    
    combo[1]=(()=>{
        let second=combo[0]-arr[1]      //subtract the second turn as we go counterclockwise from combo[0]
        if(second<0){                   //if less than 100(ie 0)
            return second+=100              //add 100
        }
        return second
        })()
    
    combo[2]=(()=>{
        let third=combo[1]+arr[2]       //add last spin to previous combo
        if(third>=100){                 // if greater than 100
            return first-=100               //subtract 100 because dial only goes to 100(ie 0)
        }
        return third
        })()
   
    return combo                        //return combo
}



safecracker(96,[54,48,77]) //should be [50,2,79]