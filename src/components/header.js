import React from 'react';
import useWebAnimations, {rollIn} from "@wellyshen/use-web-animations";
import './header.css';
function Header(){
    const {ref} = useWebAnimations({...rollIn} );
    return(
        <header className="header" >
            <h1  className="logo" ref={ref}><a href="/">BOOTCAMP 2020</a></h1>
        </header>
    )
};
export default Header;