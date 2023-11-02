import { useState } from "react";


export default function Box({val,clickedMe}){
return (
    <button id="square" className="btn p-5 btn-primary btn-sharp d-flex align-items-center" data-bs-toggle="button" onClick={clickedMe}>
    <p className="m-0 p-0 badge">{val}</p>
    </button>
)
}