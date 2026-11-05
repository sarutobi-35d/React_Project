import ThemeProvider from './context/ThemeProvider';
import Counter from './components/Counter';

import './App.css'

function App() {

  return (
    
    <>
      <ThemeProvider>
        <div>
          <h1>useContext</h1>
          <Counter />
        </div>
      </ThemeProvider>
      
    </>

  )
}

export default App
