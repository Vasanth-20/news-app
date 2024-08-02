import { useState } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Test from "./Components/test";


function App() {

  const [category, setCategory] = useState('general')

  return (
    <>
        <Header setCategory={setCategory}/>
        <Content category={category} />
        {/* <Test /> */}
    </>
  );
}

export default App;

/* 
  mistakes
  did: onclick(fn)                    crt: onclick(()=>{fn})
  did: Comp({props})                  crt: Comp(props)
  did: in console ({props/dest name}) crt: log(props/destructured names)
  did: in map <Comp />                crt: return <Comp />
*/
