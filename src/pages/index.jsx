import Navigator from '../components/Navigator';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navigator title='Estilo' href='/style' />
      <Navigator title='Exemplo' href='/exemple' bgcolor='#9400d3' />
      <Navigator title='JSX' href='/jsx' bgcolor='#dc143c' />
      <Navigator title='Navegação #01' href='/navigation' bgcolor='#008000' />
      <Navigator title='Navegação #02' href='/client/sp-1/123' bgcolor='#0000ff' />
    </div>
  ) 
}