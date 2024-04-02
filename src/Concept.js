import{ useRef, useState } from"react";
export default function Concept(){
    let input1Ref=useRef();
    const[mobile,setMobile]=useState('8976789');
    const[name,setName]=useState();
    const[nameList,setnameList]=useState([
        {'firstname':"tscity1"},
        {'firstname':"tscity2"},
        {'firstname':"tscity3"},
    ]);

    const updateName=()=>{
        setName('kotra sravya ');
    }
    const updateMobile=()=>{
        let val= input1Ref.current.value;
        setMobile(val);

    }
    return(
    <>
    <input type="text" ref={input1Ref} placeholder="enter message"/>
    <h2>{mobile}</h2>
    <h2>{name}</h2>
    {
        nameList.map((obj,index)=>{
            return(
                <h1 key={index}>{obj.firstname} </h1>
            )
        })
    }
    <button onClick={()=>updateName()}> update name</button>
    <button onClick={()=>updateMobile()}>Update number</button>
    </>
    );
  }