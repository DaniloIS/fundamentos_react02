import Layout from '../components/Layout';

import styles from '../styles/Style.module.css'

export default function Style() {
    return (
        <Layout title='Exemplo de CSS Modularizado'>
            <div className={styles.violet}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}