import React, { MouseEvent, useState } from "react";
import "./Main.css"
export default function Main({title,decorator} : {title:string , decorator:string})
{
    let [titleState,setTitle] = useState(title) ;
    function handleChangeTitle(event:MouseEvent):void
    {
        setTitle("React")   
    }
    return(
        <div className="PageTitle" onClick={handleChangeTitle}>
            {titleState}
            {decorator}
        </div>
    )
}   
// 这两种均可用
// export default function Main(props : {title:string , decorator:string})
// {
//     return(
//         <div className="PageTitle">
//             {props.title}
//             {props.decorator}
//         </div>
//     )
// }   