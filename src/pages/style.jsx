import React from 'react';
import Link from 'next/link';

import styles from '../styles/Style.module.css'

export default function Style() {
    return (
        <div className={styles.violet}>
            <Link href='/'>Voltar</Link>
            <h1>Estilo usando CSS Módulos</h1>
        </div>
    )
}