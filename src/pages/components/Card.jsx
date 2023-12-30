/** @format */

import styles from "../../styles/components/Card.module.css";

function Card(props) {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <img src={props.caminho} descricao={props.descricao} />
      </div>

      <div className={styles.card_content}>
        <div className={styles.card_title}>
          <p>{props.nome}</p>
        </div>
        <div className={styles.card_body}>
              <a href={props.link}> {props.chamar}</a>
        </div>
      </div>

      
      

    </div>  
  );
}

export default Card;

