import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Card.module.scss";

const Cards = ({ newData }) => {
  const [window, setWindow] = useState(false);
  const [cardDetails, setCardDetails] = useState("");
  const handlewindow = (metadata) => {
    setWindow(!window);
    setCardDetails(metadata);
  };
  return (
    <>
      {newData.result?.map((d) => {
        return (
          <div className={styles.card} key={d.id}>
            <div onClick={() => handlewindow(d.metadata)}>
              {!d.image_url ? (
                ""
              ) : (
                <Image
                  src={d.image_url}
                  width="300px"
                  height="400px"
                  alt="card"
                />
              )}
              <h2>{!d.name ? "Undefined" : d.name}</h2>
              <p>{d.user}</p>
              <div className={window ? styles.windowActive : styles.window}>
                {window && (
                  <>
                    <h1>{cardDetails.name}</h1>
                    <div className={styles.windowLeft}>
                      {!cardDetails.image ? (
                        ""
                      ) : (
                        <Image
                          src={cardDetails?.image}
                          width="250px"
                          height="350px"
                          alt="card"
                        />
                      )}
                    </div>
                    <div className={styles.windowRight}>
                      <div className={styles.etnity}>
                        <h2>Origin: </h2>
                        <p>God: {cardDetails.god}</p>
                        <p>Set: {cardDetails.set}</p>
                        <p>Rarity: {cardDetails.rarity}</p>
                        <p>Qualtity: {cardDetails.quality}</p>
                        {!cardDetails.tribe ? null : (
                          <p>Tribe: {cardDetails.tribe}</p>
                        )}
                      </div>
                      <div className={styles.stats}>
                        <h2>Stats: </h2>
                        <p>Proto: {cardDetails.proto}</p>
                        {!cardDetails.attack ? null : (
                          <p>Attack: {cardDetails.attack}</p>
                        )}
                        {!cardDetails.health ? null : (
                          <p>Health: {cardDetails.health}</p>
                        )}
                        <p>Mana: {cardDetails.mana}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
