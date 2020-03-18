function removeHandler() {

    //get the input value to be removed and trin the value
    const valueToRemoveNoTrim = document.getElementById("txtInput").value;
    //The trim() method removes whitespace from both sides of a string.

    const valueToRemove = valueToRemoveNoTrim.trim();

    //if -1 means it is not inside the lists 
    let indexTobeRemoved = -1;

    //parse to check if number or not 
    var parsedIn = Number(valueToRemove);
    if (isNaN(parsedIn)) { indexTobeRemoved = entries.nany.indexOf(valueToRemove); }
    else { indexTobeRemoved = entries.numbery.indexOf(valueToRemove); }

    //if no change in value means it is not in the lists
    if (indexTobeRemoved === -1) {
        alert("There is no item as the input to be removed !");
        return false;
    }
    else {
        //delete the value form its list use splice
        if (isNaN(parsedIn))
        //The splice() method adds/removes items to/from an array, and returns the removed item(s).
            entries.nany.splice(indexTobeRemoved, 1);
        else
            entries.numbery.splice(indexTobeRemoved, 1);

        //render the new results after deletion 
        RenderResults();

        //alert the user with the result
        alert("your input value : " + valueToRemove + "is removed successfully !");
        return true;
    }
}