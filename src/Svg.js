import React,{useState} from 'react';

const Svg = () => {
  const [data,setData] =useState(null);
  const [error,setError]=useState(null);
  const [color ,setColor] = useState(null);

  const onChangeHandler = (e) => {

    if(e.target.value) {

        var str = e.target.value;
        var patt1 = /(^c|^r|^e|^p|^l)[" "]([0-9]+)[" "]([0-9]+)[" "]([0-9]+)[" "]([0-9]+)/;
        var result = str.match(patt1);

   
       

        if(result==null){

           setError("Please follow the format: e.g(c,00,00,30,40) or(string,000,000,000,000)");
           setData("");

        }else{
          setError("");
          const randomColor = Math.floor(Math.random()*16777215).toString(16);
          setColor(randomColor);
          setData(str.split(" "));
        }
       }
    }
   
   console.log(data)

  return(
    <React.Fragment>
     <h1>Create svg element</h1>
    
      {error&&<p style={{color:"red"}}>{error}</p>}
  
     <input text="text" id="name" onChange={onChangeHandler} />
<hr></hr>
     <div>
     
         <svg width="400px" height="250px">
            {data&&data[0]=="c"&&
            (
                <circle cx={data[1]} cy={data[2]} r={data[3]}  style={{fill:color}} />
            ) || data&& data[0]=="r"&&
            (
                <rect x={data[1]} y={data[2]} width={data[3]} height={data[4]} style={{fill:color}} />
            ) ||  data&&data[0]=="e"&&
            (
                <ellipse cx={data[1]} cy={data[2]} rx={data[3]} ry={data[4]}
                 style={{fill:color}} />
            ) ||  data&&data[0]=="l"&&
            (
                <line x1={data[1]} y1={data[2]} x2={data[3]} y2={data[4]} style={{fill:color}} />
            )
            
            }
         </svg>
       
         
     </div>

  </React.Fragment>
  )
}

export default Svg;
