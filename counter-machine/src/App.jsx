import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      <CustomButton count = {count} setCount = {setCount}></CustomButton>
      {/* <button onClick={onClickHandler}>Counter {count}</button> */}
    </div>
  );
}
function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }
  // {
  //   count: 2
  // }
  return <button onClick = {onClickHandler}>
    counter {props.count}
  </button>
}
export default App;