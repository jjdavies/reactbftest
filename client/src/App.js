import './App.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Main from './component/Main'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Main />
      </div>
    </DndProvider>  
  );
}

export default App;
