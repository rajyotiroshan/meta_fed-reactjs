export default function ModelToggler() {
    let darkModeOn = false;
    const darkMode = <h1> Bark Mode On</h1>;
    const lightMode = <h1> Light Mode is On</h1>
    function handleClick(){
        darkModeOn = !darkModeOn;
        if(darkModeOn){
            console.log("Dark Mode is On");
        }else {
            console.log("Light Mode on");
        }
    }
    return (
        <div>
            {darkModeOn ? darkMode : lightMode};
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}