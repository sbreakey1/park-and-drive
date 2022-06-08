function move(movement){
    
    let movement_array = movement.split('');

    let y_movements = 0;
    let x_movements=0; 
    let compass_letter="N";

    //No input validation required as buttons are used so user can only enter correct Strings

    for(counter=0; counter < movement_array.length; counter++){
        if(movement_array[counter]=="M" && compass_letter=="N"){
            if(y_movements==10){
                y_movements=0;
            }
            else{
                y_movements++;
            }
        }
        else if(movement_array[counter]=="M" && compass_letter=="E"){
            if(x_movements==10){
                x_movements=0;
            }
            else{
                x_movements++;
            }
        }
        else if(movement_array[counter]=="M" && compass_letter=="S"){
            if(y_movements==0){
                y_movements=10;
            }
            else{
                y_movements--;
            }
        }
        else if(movement_array[counter]=="M" && compass_letter=="W"){
            if(x_movements==0){
                x_movements=10;
            }
            else{
                x_movements--;
            }
        }
        else if(movement_array[counter]=="L"){
            if(compass_letter=="N"){
                compass_letter="W"
            }
            else if(compass_letter=="W"){
                compass_letter="S"
            }
            else if(compass_letter=="S"){
                compass_letter="E"
            }
            else{
                compass_letter="N"
            }
        }
        else if(movement_array[counter]=="R"){
            if(compass_letter=="N"){
                compass_letter="E"
            }
            else if(compass_letter=="E"){
                compass_letter="S"
            }
            else if(compass_letter=="S"){
                compass_letter="W"
            }
            else{
                compass_letter="N"
            }
        }
    }

    return x_movements + ":" + y_movements + ":" + compass_letter;

}

module.exports = move;