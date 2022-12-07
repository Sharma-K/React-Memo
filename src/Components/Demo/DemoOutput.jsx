import React from "react";

const DemoOutput = (props) => {
    console.log('inside demoApp')
    return <p>{props.show?'this is new': ''}</p>

}

//it will do comparison with previous props value with the current props value
// it will affect performance 
export default React.memo(DemoOutput);