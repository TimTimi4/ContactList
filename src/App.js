import Theme from './styles/theme'
import Header from './components/Header'

const App = () => {
  console.log('hi')
  return (
    <Theme>
      <Header logo="Contact List" title="Contacts" />
      <div>hi</div>
    </Theme>
  )
}

export default App
