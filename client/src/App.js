import './App.css';
import Palette from './components/palette';
import { init, subscribe } from './socketApi';
import { useEffect, useState } from 'react';

function App() {
  const [activeColor, setActiveColor] = useState("#282c34")
  useEffect(() => {
    init();
    subscribe((color) =>
      setActiveColor(color));
  }, [])
  return (
    <div className="App" style={{ background: activeColor }}>
      <Palette activeColor={activeColor} />
    </div>
  );
}

export default App;