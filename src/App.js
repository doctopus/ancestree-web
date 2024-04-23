import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/navbar.component'
import {useDispatch} from "react-redux";
import {bootstrapActions} from "./app/actions/bootstrapActions";

function App () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(bootstrapActions());
    }, []);

  return (
    <div className="Ancestree App">
      <Navbar/>

      <Outlet />
    </div>
  )
}

export default App
