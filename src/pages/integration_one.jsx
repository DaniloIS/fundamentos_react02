import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Integration() {

    const [code, setCode] = useState(1);
    const [client, setClient] = useState({});

    useEffect(()=>{
        fetch('http://localhost:3000/api/clients/123')
        .then(res => res.json())
        .then(json => setClient(json));
    }, [setClient])

    /*async function getClient() {
        const res = await fetch(`http://localhost:3000/api/clients/${code}`);
        const data = await res.json();
        setClient(data);
        // fetch('http://localhost:3000/api/clients/123')
        // .then(res => res.json())
        // .then(json => setClient(json));
    }*/
    
    return (
        <Layout title='Integração com API'>
            <div>
                <input type='number' value={code} onChange={e => setCode(e.target.value)} />
                <button onClick={() => getClient()}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {client.id}</li>
                <li>Nome: {client.name}</li>
                <li>Idade: {client.age}</li>
            </ul>
        </Layout>
    )
}