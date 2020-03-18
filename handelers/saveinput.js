function saveHandler() {
    //get the input by user

    const inputValueNoTrim = document.getElementById('txtInput').value;
    const inputValue = inputValueNoTrim.trim();
    if (inputValue === " " || inputValue === null || inputValue === '') {
        alert("Please Fill the  Required Field");
        return false;
    }
    //decide if duplicate
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).

    if (entries.numbery.filter(function (e) { return e === inputValue; }).length > 0) {
        alert("Duplicate values, input won't be added !");
        return false
    }
    //decode if duplicate

    if (entries.nany.filter(function (e) { return e === inputValue; }).length > 0) {
        alert("Duplicate values, input won't be added !");
        return false
    }
    //parse the number and check if number or not use isnan and number functions

    var parsedIn = Number(inputValue);
    if (isNaN(parsedIn))
        entries.nany.push(inputValue);
    else
        entries.numbery.push(inputValue);
    //render the results to the UI in anycase

    RenderResults();
}
function RenderResults() {

    //Number list

    const numberlist = document.getElementById('Numbery');
    //check if ul already exists if not create it 
    
    const ulEl = numberlist.children[0];
    ulEl.innerHTML = '';
    for (let thing of entries.numbery) {
        const newLi = document.createElement('li');
        newLi.innerText = thing;
        ulEl.appendChild(newLi);
    }
    numberlist.appendChild(ulEl);

    //NAN list
        
    const nanList = document.getElementById('Nany');
    const ulElN = nanList.children[0];
    ulElN.innerHTML = '';
    for (let thing of entries.nany) {
        const newLi = document.createElement('li');
        newLi.innerText = thing;
        ulElN.appendChild(newLi);
    }
    nanList.appendChild(ulElN);

    //empty the input string 
    document.getElementById('txtInput').value = "";
}