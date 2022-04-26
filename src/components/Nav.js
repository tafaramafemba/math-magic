import '../Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <div>
        <nav>
          <h3 className='h3'>Math Magicians</h3>
          <ul className='ul'>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/calculator">
            <li className='link'>Calculator</li>
            </Link>
            <Link to="/quote">
            <li className='link'>Quote</li>
            </Link>
            
          </ul>
        </nav>
      </div>
    );
  }

export default Nav;