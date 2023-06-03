import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import './Header.css'


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  function toggleMenu(){
    setIsOpen(prevMenu => !prevMenu)
  }

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const[searchValue, setSearchValue] = React.useState()
  const handleInputChange = (event) =>{
    setSearchValue(event.target.value);
  }

  

  return (
    <div className='header'>
      <div className='title'>
        <h2>Sociogram</h2>
      </div>
      <div className='right-side'>
        <div className="search-container" >
          <input
            style={{paddingLeft: '30px', paddingBlock: "7px", borderRadius:'5px', border: '1px solid gray', width:"90%"   }}
            className="search-input"
            type='text'
            placeholder='Search for people, communities, tokens, messages etc'
            onChange={handleInputChange}
          />
            <div className='search-icon' >
              {!searchValue &&<FiSearch className="search-icon" size ={20}/>}
            </div>
        </div>
        <div className='drop-down'>
          <button className='drop-down-button' >
            <img src='./img/Ellipse 20.png'style={{marginRight: "10px", height: "25px", marginBlock: '5px'}}/>
            <small style={{color:'#6821C3'}}>0xhDc2sj...w5e</small>
            <FiChevronDown size ={20} onClick={toggleMenu} />
          </button>
          {isOpen && (
            <ul style={{position:'absolute', color:'#6821C3', opacity:'50%', paddingLeft:'5%', listStyleType: 'none', fontSize: '14px', background: 'white', paddingRight: '5%'}}>
              <li>xhDc2sj...w5e</li>
              <li>xhDc2sj...w5e</li>
              <li>xhDc2sj...w5e</li>
            </ul>
          )}
        </div>
      </div>
     
    </div>
  )
}

export default Header