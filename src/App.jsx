import Button from './Components/UI/Button/Button'
import DemoOutput from './Components/Demo/DemoOutput'
import React, {useState, useCallback } from 'react';
import './App.css'
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log('App running');


  //if callback is not used every time app is rendered the toggleparagraphhandler will be treated as a new function
  // using callback will store the function in the same memory
  // for using callback you should use React.memo again

  const toggleParagraphHandler = useCallback(()=> {
    setShowParagraph(prev => !prev)
  },[])

  return (
    <div className="App">
      <h1>Hi there</h1>
      <DemoOutput show={false} />
     <Button onClick={toggleParagraphHandler}> Toggle Paragraph</Button>
    </div>
  );
}

export default App;
