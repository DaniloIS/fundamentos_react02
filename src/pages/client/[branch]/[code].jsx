
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

export default function ClientProCode() {

    const router = useRouter();

    return (
        <Layout title='Navegação Dinamica'>
            <div>Código: { router.query.code }</div>
            <div>Filial: { router.query.branch }</div>
        </Layout>
    )
}