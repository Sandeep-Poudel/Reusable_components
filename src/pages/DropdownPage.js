import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage(){
    const [selection,setSelection]= useState(null);

    const handleSelect = (option)=> {
        setSelection(option);
    }

    const options=[
        {label:'Red',value:'red'},
        {label:'Green',value:'green'},
        {label:'Blue',value:'blue'},
        {label:'Yellow',value:"yellow"}

    ]

    return (
        <div className="flex">
            <Dropdown value={selection} options={options} onChange={handleSelect}/>

        </div>
   
    );
}
export default DropdownPage;