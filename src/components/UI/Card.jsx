"use client";

import styles from "./card.module.css";

export default function Card({ children }) {
    return <div className={styles.general_card}>{children}</div>;
}