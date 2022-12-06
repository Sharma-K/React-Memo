import Button from './Components/UI/Button/Button'
import DemoOutput from './Components/Demo/DemoOutput'
import React, {useState} from 'react';
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log('App running');

  const toggleParagraphHandler = ()=> {
    setShowParagraph(prev => !prev)
  }

  return (
    <div className="App">
      <h1>Hi there</h1>
      <DemoOutput show={showParagraph} />
     <Button onClick={toggleParagraphHandler}> Toggle Paragraph</Button>
    </div>
  );
}

export default App;
