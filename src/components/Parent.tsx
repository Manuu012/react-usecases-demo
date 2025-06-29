import  { useMemo, useState } from 'react'



function Parent() {

    const [count,setCount] =useState(0);

    const memorizeFunction  = useMemo(()=>{ return slowFunction(count)},[count]);
    const [, setToggle] = useState(false);

  return (
    <div>
        <p>Slowly Function Called {memorizeFunction}</p>
        <button onClick={() => setCount(prev => prev + 1)}>Increment Count</button>
        <button onClick={() => setToggle(t => !t)}>Toggle Color</button>
    </div>
  )
}

export default Parent



function slowFunction(increasevalue:number):number{
    console.log("Running slowly");
   let result=0;
    for(let i=0;i<1e8;i++){
     result++;
    }
    return result+increasevalue;
}