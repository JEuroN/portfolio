import React, {useState} from 'react'

const Menu = () => {

    const [isActive, setIsActive] = useState(false);

    const openMenu = () => {
        setIsActive(!isActive);
    }

    return ( 
        <div>
            <div id='button-place' class='button-place' on>
                <button id='btn' class='btn' onClick={openMenu}><span class="material-icons">
                    menu
                </span></button>
            </div>
            <div id='menu' class={`div-menu ${isActive ? 'menu-active' : ''}`}>
                <ul class={`link-holder ${isActive ? 'fade-in' : 'fade-out'}`} id='link-fade'>
                    <li><a href="#Home">HOME</a></li>
                    <li><a href='#About'>ABOUT</a></li>
                    <li><a href='#Contact'>CONTACT</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Menu;