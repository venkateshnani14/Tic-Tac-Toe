import { useState } from "react";


export default function Box({val,clickedMe}){
return (
    <button className="square" onClick={clickedMe}>
    <p className="btn_name">{val}</p>
    </button>
)
}