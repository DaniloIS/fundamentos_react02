import Layout from '../components/Layout';

const title = <h1>JSX é um Conceito Central</h1>;

function subtitle() {
    return <h2>{'muito legal'.toUpperCase()}</h2>
}

export default function Jsx() {
    return (
        <Layout>
            <div>
                {title}
                {subtitle()}
                <p>
                    {JSON.stringify({name: 'Danilo', age: 23})}
                </p>
            </div>
        </Layout>
    )
}