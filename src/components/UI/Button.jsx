"use client";

import { useState } from "react";
import styles from "./button.module.css"

export default function Button({ children, type, size }) {
    // Determine the CSS classes based on the props
    const buttonClasses = `${styles.button} ${type ? styles[`button-${type}`] : ''} ${size ? styles[`button-${size}`] : ''}`;

    return <button className={buttonClasses}>{children}</button>;
}