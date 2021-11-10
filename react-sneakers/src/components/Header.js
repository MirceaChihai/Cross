import React from 'react';

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-10">
        <div className="d-flex align-center">
        <img  width={40} height={40 }src="/img/logo.jpg"  alt="Logo"/>
        <div>
        <h3 className="text-uppercase">REACT SNEAKERS</h3>
        <p className="opacity-9">Magazin de crosuri</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 cu-p"> 
            <img  onClick={props.onClickCard} width={18} height={18} src="/img/logo1.png" alt="Logo"/>
           <span>8500 lei.</span>
          </li>
          <li><img  width={18} height={18} src="/img/acaunt.png" alt="Acaunt"/></li>
        </ul>
        </header>
    );
}

export default Header;