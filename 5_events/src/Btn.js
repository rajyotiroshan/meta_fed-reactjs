/* export default function Btn(){
    let hoverHandler = (e)=>{
        e.target.style.backgroundColor = "blue";
        e.target.style.color ="white";
        console.log("Handler Hover");
    };
    return (
        <button onClick= {()=>console.log("Btn clicked")} onMouseEnter={hoverHandler}>
            Click me
        </button>

        
    );
} */

export default function Btn(){
    let styleObj = {
        padding: "10px 20px",
        fontSize: "1.5rem",
    };

    let hoverHandler = (e)=> {
        e.target.style.backgroundColor = "blue";
        e.target.style.color ="white";
        console.log("Handler Hover");
    };

    let mouseLeaveHandler = function(e) {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "blue";
        console.log("mouse leaving");
    };

    return (
        <button style = {styleObj} onClick= {()=>console.log("Btn clicked")} onMouseOver={hoverHandler} onMouseLeave = {mouseLeaveHandler}>
            Click me
        </button>

        
    );
}