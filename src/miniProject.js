import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import "./miniproject.css"
function MiniProject(props){
    const [num1,setNum1]=React.useState(0);
    const [num2,setNum2]=React.useState(0);
    const [num3,setNum3]=React.useState(0);
    // function setValue(props){
    //     if(num1==null){
    //         setNum1(props.value);
    //     }
    //     else{
    //         setNum2(props.value);
    //     }
    // }
    function ActionAdd(){
        setNum3(+num1 + +num2);
    }
    function ActionSub(){
        setNum3(+num1 - +num2);
    }
    function ActionMul(){
        setNum3(+num1 * +num2);
    }
    function ActionDiv(){
        setNum3(+num1 / +num2);
    }
    
    return(
        <div className="mini">
            <h1>Calculator</h1>
            <label>num1</label>
            <input type="number" placeholder="enter your number 1" onChange={(e)=>setNum1(e.target.value)}></input>
            <label>num2</label>
            <input type="number" placeholder="enter your number 2" onChange={(e)=>setNum2(e.target.value)}></input>
            <br/>
            <br/>
            <ButtonGroup variant="contained" color="primary" size="large">
            <Button onClick={()=>ActionAdd()}>+</Button>
            <Button onClick={()=>ActionSub()}>-</Button>
            <Button onClick={()=>ActionMul()}>*</Button>
            <Button onClick={()=>ActionDiv()}>/</Button>
            </ButtonGroup>
            <br/>
            <h2>Result is {num3}</h2>
            {/*         
            <Button variant="contained" color="primary" onClick={setValue(value=1)}>1</Button>
            <Button variant="contained" color="primary" onChange={setValue(value=2)}>2</Button>
            <Button variant="contained" color="primary" onChange={setValue(value=3)}>3</Button>
            <br/>
            <Button variant="contained" color="primary" onChange={setValue(value=4)}>4</Button>
            <Button variant="contained" color="primary" onChange={setValue(value=5)}>5</Button>
            <Button variant="contained" color="primary" onChange={setValue(value=6)}>6</Button>
            <br/>
            <Button variant="contained" color="primary" onChange={setValue(value=7)}>7</Button>
            <Button variant="contained" color="primary" onChange={setValue(value=8)}>8</Button>
            <Button variant="contained" color="primary" onChange={setValue(value=9)}>9</Button>
            <br/>
            <Button variant="contained" color="primary" onChange={setValue(value=0)}>0</Button> */}
        </div>
    );
}
export default MiniProject;