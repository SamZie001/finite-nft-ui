import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";

const Main = () => {
  const totalSeconds = 12 * 60 * 59; // 12 hours in seconds
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);

  useEffect(() => {
    let interval;

    const updateCountdown = () => {
      if (remainingSeconds > 0) {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }
    };

    interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingSeconds]);

  const hour = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <h1>Explore, Collect & Sell Incredible NFTs</h1>
        <p>
          The largest NFT marketplace. Authentic and unique <br /> digital
          creations.
        </p>
        <div className={styles["get-started"]}>
          <button className="button">Get Started</button>
          <div className={styles.play}>
            <img src="/icons/icon-play.svg" alt="play" />
            <p>Play Video</p>
          </div>
        </div>
      </div>
      <img className={styles.nft} src="/images/NFT.png" alt="nft" />
      <div className={styles.bids}>
        <div className={styles["bid-dets"]}>
          <p>
            {hour}:{minutes}:{seconds}
          </p>
          <p>Remaining time</p>
        </div>
        <div className={styles["bid-dets"]}>
          <p>
            <img src="/icons/icon-eth.svg" alt="ethereum" /> 3.8
          </p>
          <p>Highest Bid</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
