import React from 'react';

function Drawer(props) {
    return (
        <div className="overlay">
        <div className="drawer ">
        <h2 className="mb-40 d-flex justify-between ">Cos de Cumparaturi<img onClick={props.onCloseCard}
          className="cu-p" src="/img/Cross/btn-remove.svg" alt="Close"/></h2>
    
    
       <div className="items">
       <div className="cartItem d-flex align-center mb-20">
           <div style={{backgroundImage: `url(/img/Cross/2.jpg)`}} className="cartItemImg">
    
           </div>
          <div className="mr-20">
          <p className="mb-5">Nike Air Force for Men 270</p>
          <b> 889 lei</b>
          </div>
          <img  className="removeBtn" src="/img/Cross/btn-remove.svg" alt="Remove"/>
        </div>
        <div className="cartItem d-flex align-center mb-20">
           <div style={{backgroundImage: `url(/img/Cross/3.jpg)`}} className="cartItemImg">
    
           </div>
          <div className="mr-20">
          <p className="mb-5">Nike Air Force for Men 270</p>
          <b> 889 lei</b>
          </div>
          <img  className="removeBtn" src="/img/Cross/btn-remove.svg" alt="Remove"/>
        </div>
       </div>
    
    <div className="cartTotalBlock">
    <ul>
      <li>
        <span>In Total</span>
        <div></div>
        <b> 3699 lei</b>
      </li>
      <li>
        <span>Impozit 5%</span>
        <div></div>
        <b> 160 lei</b>
      </li>
    <button className="greenButton">Faceti comanda  <img src="/img/Cross/arrow.svg" alt="Aroow"/></button>
    </ul>
    </div>
     </div>
     </div>
    );
}
export default Drawer;