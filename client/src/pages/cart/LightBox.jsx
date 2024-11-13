import img1 from "/src/images/v7.jpg"
import img2 from "/src/images/v7.jpg"
import img3 from "/src/images/v7.jpg"
import img4 from "/src/images/2.jpg"
import img1Icon from "/src/images/v7.jpg"
import img2Icon from "/src/images/v7.jpg"
import img3Icon from "/src/images/v7.jpg"
import img4Icon from "/src/images/2.jpg"
import { useState, useEffect } from "react";
import styles from './cart.module.css';

const LightBox = (num) => {
  useEffect(() => {
    setImage2(num.imageTrack);
  }, [num.imageTrack]);

  const [image2, setImage2] = useState(num.imageTrack);
  let url = image2;
  if (image2 == 1) {
    url = img1;
  } else if (image2 == 2) {
    url = img2;
  } else if (image2 == 3) {
    url = img3;
  } else if (image2 == 4) {
    url = img4;
  }

  return (
    <div className={styles.lightBoxDiv}>
      <div className={styles.lightBoxRow}>
        <div className={styles.lightBoxCol1}>
          <svg
            onClick={() => {
              document
                .querySelector(`.${styles.lightBoxDiv}`)
                .classList.remove(styles.lightBoxToggle);
              document
                .querySelector(`.${styles.shadow}`)
                .classList.remove(styles.shadowToggle);
            }}
            className={styles.lightBoxClose}
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#FFFFFF"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className={styles.lightBoxCol2}>
          <svg
            onClick={() => {
              let num = image2 - 1;
              if (num < 1) {
                num = 4;
              }
              setImage2(num);
            }}
            className={styles.prev}
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <img alt="img" className={styles.lightBoxSneaker} src={url} />
          <svg
            onClick={() => {
              let num = image2 + 1;
              if (num > 4) {
                num = 1;
              }
              setImage2(num);
            }}
            className={styles.next}
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className={styles.lightBoxCol3}>
          <div
            className={`${styles.smallSneakerDiv} ${image2 == 1 && styles.activeSneaker}`}
          >
            <img
              alt="img"
              className={styles.smallSneaker}
              onClick={() => {
                setImage2(1);
              }}
              src={img1Icon}
            />
          </div>
          <div
            className={`${styles.smallSneakerDiv} ${image2 == 2 && styles.activeSneaker}`}
          >
            <img
              alt="img"
              className={styles.smallSneaker}
              onClick={() => {
                setImage2(2);
              }}
              src={img2Icon}
            />
          </div>
          <div
            className={`${styles.smallSneakerDiv} ${image2 == 3 && styles.activeSneaker}`}
          >
            <img
              alt="img"
              className={styles.smallSneaker}
              onClick={() => {
                setImage2(3);
              }}
              src={img3Icon}
            />
          </div>
          <div
            className={`${styles.smallSneakerDiv} ${image2 == 4 && styles.activeSneaker}`}
          >
            <img
              alt="img"
              className={styles.smallSneaker}
              onClick={() => {
                setImage2(4);
              }}
              src={img4Icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
