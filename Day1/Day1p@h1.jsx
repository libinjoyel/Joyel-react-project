var alertMsg = () => {
    alert("Check the console output!");
    let age = 18;
    let name = "kiran";
    let setStatus = false;
    let userDefault = undefined;
    let responseValue = null;
    console.log(age);
    console.log(name);
    console.log(userDefault);
    console.log(responseValue);
    let oldage = age;
    oldage = 25;
    let newstatus = setStatus;
    newstatus = true;
    console.log(newstatus);
    console.log(oldage);
    
}
function Rent(){
    return(
        <div>
            <button onClick={alertMsg}>Click</button>
        </div>
    )
}

export default Rent;