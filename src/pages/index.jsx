import Navigator from '../components/Navigator';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      flexWrap: 'wrap',
      height: '100vh',
      backgroundColor: '#222',
      color: '#eee',
    }}>'
      <Navigator title='Estilo' href='/style' />
      <Navigator title='Exemplo' href='/exemple' bgcolor='#9400d3' />
      <Navigator title='JSX' href='/jsx' bgcolor='#dc143c' />
      <Navigator title='Navegação #01' href='/navigation' bgcolor='#008000' />
      <Navigator title='Navegação #02' href='/client/sp-1/123' bgcolor='#0000ff' />
      <Navigator title='Componente com Estato' href='/state' bgcolor='#ffc0cb' />
      <Navigator title='Integração com API' href='/integration_one' bgcolor='#ffc0cb' />
    </div>
  ) 
}