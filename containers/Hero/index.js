import React from 'react'
import styles from '../../styles/Hero.module.css';

export default function Hero() {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.nameWrapper}>
                    <span className={styles.name}>Zac</span>
                    <span className={styles.name}>Stowell</span>
                    <span className={styles.name}>Codes</span>
                </div>
            </div>
        </>
    )
}
