import Link from 'next/link';

import styles from '../styles/Navigator.module.css';

export default function Navigator(props) {
    return (
        <div className={styles.navigator} style={{
            backgroundColor: props.bgcolor ?? '#1e90ff'
        }}>
            <Link href={props.href} >
            {props.title}
            </Link>
        </div>
    )
}