import './navbar.css';
import { KeyboardArrowRight, Search } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="home">
              <a href="/" className='hometext'> Home </a>
              <p><KeyboardArrowRight className='arrow'/></p>
         <span className='dash'>
             Dashboard V2
        </span>
          </div>
          <div className='searchContainer'>
              <Search className='searchIcon'/>
              <input type="serach" className='searchField' placeholder='Search anything...' />
          </div>
          <div className='dropdown'>
            <select className='dropdownMenu'>
             <option value="Widget1">Widget1</option>
             <option value="Widget2">Widget2</option>
             <option value="Widget3">Widget3</option>
            </select>
          </div>  
          <div className='bell'>
           <img src="images/bellIcon.png" alt="error" className='bellIcon' />
      </div>
      <div className='loggedPerson'>
        <AccountCircleIcon sx={{color:'lightgray'}} className='loggedPerson'/> Person 
      </div>   
    </div>
  );
}
