import React from 'react';
import styles from './Card.module.scss'


function Card(props) {
  const [isAded , setIsAded] = React.useState(false);

 const onClickPlus = () => {
   setIsAded(!isAded);
 }


    return (
        <div className="card">
            <div className={styles.favorite }>
            <img  onClick={props.onClickFavorite}src="/img/Cross/unliked.svg" alt="Unliked"/>
            </div>
          <img  width={133} height={112} src={props.image  } alt="Snekaers" />
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Pret:</span>
              <b>{props.price}</b>
            </div>
              <img className={styles.plus} onClick={onClickPlus} src={isAded ? "/img/Cross/btn-checked.svg" : "/img/Cross/btn-plus.svg" } alt="Search" />
          </div>
          </div>
    );
}

export default Card;