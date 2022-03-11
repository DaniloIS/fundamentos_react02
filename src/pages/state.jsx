import { useState } from 'react';
import Layout from '../components/Layout';

export default function State() {

    const [ number, setNumber ] = useState(0); // React Hooks

    function incremente() {
        setNumber(number+1)
    }

    return (
        <Layout title='Componente com Estado'>
            <div>{number}</div>
            <button onClick={() => incremente()}>Incrementar</button>
        </Layout>
    )
}