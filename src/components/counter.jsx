import {useState} from 'react';
import'./counter.css'
import React from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { decrement,increment } from '../redux/counterSlice';


export default function Counter(){

    // const [num, setNum] = useState(0);
    const count =useSelector((state)=>state.Counter.value)
    const dispatch =useDispatch()

    // function numPlus() {
    //     setNum(num+1);
    // }
    // function nummin() {
    //     if(num!=0)
    //     setNum(num-1);
    //     else if(num==0)
    //     window.alert("You Can't Decrease")
    // }
    return (<div className='grid text-center col-md-8 offset-md-2 md block btn-padding-10' id='main'> <h1> {count}</h1>
        
        <div className='d-flex justify-content-center'>
        <div className='col-2 text-center'>
        <button onClick={() => dispatch(increment(100))} className='btn btn-dark btn-lg btn-padding-10'><h2>+</h2></button>
        </div>
        
        <div className='col-2 text-center'>
        <button onClick={() => dispatch(decrement(50))} className='btn btn-dark btn-lg btn-padding-10'><h2>-</h2></button></div>
        </div>
        </div>
    );
}

