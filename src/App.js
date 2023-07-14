import { useState, useEffect } from "react";



function App() {
  const [value, setValue] = useState("0");

  const numbers = [

    '.','C','<-','/',
    '7','8','9','*',
    '4','5','6','-',
    '1','2','3','+',
    '0','(',')','='];
  
  const insertElements = (e)=>{ 
    if(e.target.name === '='){
      calculateResult();
    }
    else if(e.target.name === 'C'){
      deleteAll();
    }
    else if(e.target.name === '<-'){
      deleteOne();
    }

    else{
    let newValue = value.concat(e.target.name);    
    newValue = newValue.replace(/^0+(?=[\d(])/, ""); 
    newValue = newValue.replace(/^0+(?=\D)/, "0"); 
    setValue(newValue);
    }
  } 

  const calculateResult = () =>{
    const res = eval(value); 
    setValue(res.toString()); 
  }

  const deleteAll = () =>{
    setValue("0");
  }

  const deleteOne = () =>{
    const newValue = value.slice(0, -1);
    setValue(newValue);
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" flex flex-col w-52 gap-2 border-2 border-blue-300 p-4 bg-gradient-to-r from-slate-100 to-slate-50 rounded-sm">
        
        <div className="flex items-center justify-end border-blue-300 border-2 h-10 text-2xl truncate pr-1 bg-blue-300 text-white rounded-sm">
          {value}
        </div>

        <div className="flex flex-wrap ">
        {numbers.map((number) =>
          <div className="w-1/4 flex justify-center items-center">
          <button  name={number} onClick={insertElements}
          className='p-1 mb-1 bg-blue-300  rounded-full w-10 h-10 hover:bg-blue-400 text-white'>
            {number}
          </button>
          </div>
        )}
        </div>
      </div>
     
    </div>
  );
}

export default App;
