import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import { auth } from "../../firebase";
// import { signOut } from "firebase/auth";

export const AppBar = () => {

//   const logout = () => {
//     return signOut(auth);
//   };
  return (
    <>
      <ul>
        <li>
                    <NavLink to={'/signup'}>
<Button
              className="btn__signup"
              variant="primary"
            //   onClick={}
            >
              SIGN UP
            </Button>

</NavLink>
                </li>
        <li>
          <NavLink to={"/login"}>
            <Button
              className="btn__login"
              variant="primary"
              // onClick={(e) => {
              //   e.target.parentNode.style.opacity = "0.5";
              //   e.target.parentNode.style.pointerEvents = "none";
              // }}
            >
              LOG IN
            </Button>
          </NavLink>
        </li>
      </ul>
    </>
  );
};
