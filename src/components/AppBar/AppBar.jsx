import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppBar = () => {

    return (
        <> 
            <ul>
                {/* <li key="1">
                    <NavLink to={'signup'}><p>SignUp</p></NavLink>
                </li> */}
                <li key="2">
                    <NavLink to={'login'}>      <Button className='btn__login' variant="primary" onClick={(e) => {e.target.parentNode.style.opacity = '0.5'; e.target.parentNode.style.pointerEvents = 'none'}}>LOGIN</Button>

</NavLink>
                </li>
            </ul>
        </>
    )
};