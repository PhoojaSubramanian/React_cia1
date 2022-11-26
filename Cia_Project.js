import React ,{useState} from 'react'
import './Cia_Project.css'
export default function CiaProject() {
    const[name,setname]=useState("");
    const[mail,setmail]=useState("");
    const[pass,setpass]=useState("");
    function changecolor()
    {
        if(name.length===0)
        return "red";
    }
    function changecolor1()
    {
        if(mail.length===0)
        return "red";
    }
    function changecolor2()
    {
        if(pass.length===0)
        return "red";
    }
    let cap=0,small=0,num=0,spl=0;
    function ChangeBG()
    {
        let len=pass.length;
        for(let i=0;i<len;i++)
        {
            if(pass.charAt(i)==="0"||pass.charAt(i)==="1"||pass.charAt(i)==="2"||pass.charAt(i)==="3"||pass.charAt(i)==="4"||pass.charAt(i)==="5"||pass.charAt(i)==="6"||pass.charAt(i)==="7"||pass.charAt(i)==="8"||pass.charAt(i)==="9")
            num++;
            else if(pass.charAt(i)===pass.charAt(i).toUpperCase)
            cap++;
            else if(pass.charAt(i)===pass.charAt(i).toLowerCase)
            small++;
            else if(pass.charAt(i)==="&"||pass.charAt(i)==="!"||pass.charAt(i)==="@"||pass.charAt(i)==="#"||pass.charAt(i)==="%"||pass.charAt(i)==="^"||pass.charAt(i)==="&"||pass.charAt(i)==="*"||pass.charAt(i)==="("||pass.charAt(i)===")"||pass.charAt(i)==="?")
            spl++;
            else
            cap++;
        }
        if(cap>0 && small>0 && num>0 && spl>0)
        return "green";
        else if(cap>0 && small>0 && num>0)
        return "lightgreen";
        else if(cap>0 && small>0 && spl>0)
        return "lightgreen";
        else if(cap>0 &&  num>0 && spl>0)
        return "lightgreen";
        else if( small>0 && num>0 && spl>0)
        return "lightgreen";
        else if( small>0 && num>0 && cap>0)
        return "lightgreen";
        else if(cap>0 && small>0)
        return "orange";
        else if(spl>0 && small>0)
        return "orange";
        else if(num>0 && small>0)
        return "orange";
        else if(cap>0 && num>0)
        return "orange";
        else if(cap>0 && spl>0)
        return "orange";
        else if(num>0 && spl>0)
        return "orange";
        else if(num>0)
        return "orange";
        else if( spl>0)
        return "orange";
        else if(cap>0)
        return "orange";
        else if(small>0)
        return "orange";
        else
        return "red";
    }
  return (
    <div className='main'>
        <h3>Form Validation</h3>
        <form className= 'forms' >
        <div>
            <label className='label'>Enter your Username</label>
            <br></br>
            <input type={"text"} required placeholder='your Username'  style={{"borderColor":changecolor()}} onChange={e=>setname(e.target.value)}></input>
            <br></br>
            {name.length===0 ? <label>Please enter your username</label> : ""}

        </div>
        <br></br>
        <div>
            <label className='label '>Enter your email</label>
            <br></br>
            <input type={"email"} required placeholder='Your email' style={{"borderColor":changecolor1()}} onChange={e=>setmail(e.target.value)}></input>
            <br></br>
            {mail.length===0 ? <label>Please enter your email</label> : ""}
        </div>
        <br></br>
        <div>
            <label className='label'>Enter Password</label>
            <br></br>
            <input type={"password"} required  placeholder='your Password' style={{"borderColor":changecolor2() ,"backgroundColor":ChangeBG()}} onChange={e=>setpass(e.target.value)}></input>
            <br></br>
            {pass.length===0 ? <label>Please enter your Password</label> : ""}
        </div>
        <br></br>
            <button type='submit'>Submit</button>

        </form>

    </div>

  )
}





























