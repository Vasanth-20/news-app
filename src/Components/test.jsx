import React, { useEffect, useState } from 'react'

function GrandChild(){
    return (
        <>
            <p>GrandChild</p>
        </>
    )
}

function ChildComponent(){
    return (
        <>
            <p>Child</p>
            <GrandChild />
        </>
    )
}

function ParentComponent({d}){
    console.log(d);
    return (
        <>
            <p>Parent</p>
            
            {/* <ChildComponent /> */}
            
        </>
    )
}

const Test = () => {

  const [data, setData] = useState([{name: 'vasanth'}, {name: 'nivetha'}])
    
  return (
    <>
        <p>test</p>
        {/* {data.map((val, ind) => {
            return <ParentComponent key={ind} d={val} />
        })} */}
        <p>{NaN}</p>
    </>
  )
}

export default Test

/* 
    we can send anythings to props
    <p>{undefined/null/''}</p> not printed but <p>NaN</p> print in jsx and return some err in console
*/












//384098e1d41745668c8bf2f3a05e0fc7

/*     useEffect(()=>{
        async function getData(){
          const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
          // console.log(response);
          const data = await response.json()
          // console.log(data);
          const records = data.articles
          // console.log(records);

          setData(records)
        }
        getData()
    },[]) 
*/
