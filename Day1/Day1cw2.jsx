var alertMsg = () => {
    let myobject = {name:"Madras"};
    let newObject = myobject;
    myobject.name="Chennai";
    let myarray = ["a","e","i","o"];
    let vowelArray = myarray;
    myarray.push("u");
    console.log(newObject);
    console.log(vowelArray);
}
function Rent(){
    return(
        <div>
            <button onClick={alertMsg}>Click</button>
        </div>
    )
}

export default Rent;