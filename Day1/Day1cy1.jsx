import React from "react";

function Compare(){
    const name1 = "Kabil";
    const name2 = "Kabil";

    const object1 = {name:"Kabil"};
    const object2 = {name:"Kabil"};
    console.log(name1 === name2);
    console.log(name2 === name1);
    console.log(object1 === object2);
}
function Equal()
{
    return(
        <div>
            <button onClick={Compare}>Click</button>
        </div>
    )
};
export default Equal;