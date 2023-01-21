import LogInBtn from "./LogInBtn";
import LogOutBtn from "./LogOutBtn";

function LoggedInOutBtn({ isLoggedIn }) {
  return isLoggedIn ? <LogInBtn /> : <LogOutBtn />;
}

export default LoggedInOutBtn;
