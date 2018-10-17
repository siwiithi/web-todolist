import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
// reducer is pure function
// คำสั่งในการเปลี่ยนแปลงค่าใช้ action
// เปลี่ยนแปลงค่าใช้ reducer

// อันดับแรกต้องสร้าง initial state ขึ้นมาก่อน
const initialState = {
  salary: 15000,
  range: []
}
const userDataReducer = (state={name: "Dongahe", age: "32"}, action) => {
  switch (action.type) {
    case "setName":
       state = {
          ...state,
          name: action.payload
          
      }
      break;
    case "setAge":
       state = {
         ...state,
         age: action.payload
       }
      break;
    default:
      break;
  }
  return state;
}
const employeeSalaryReducer = (state=initialState, action) => {
  switch (action.type) {
    case "ADD":
       state = {
        // salary: state.salary+=action.payload,
        // range: state.range
          ...state,
          salary: state.salary+=action.payload,
          range: [...state.range, action.payload]
      }
      break;
    case "SUBTRACT":
       state = {
         ...state,
         salary: state.salary-=action.payload,
         range: [...state.range, action.payload]
       }
      break;
    default:
      break;
  }
  return state;
}
// mylog เก็บ action ที่เราทำงาน
const mylogger = (store) => (next) => (action) => {
  console.log("Log Action", action);
  next(action)
}
const store=createStore(combineReducers({emp: employeeSalaryReducer, user:userDataReducer}), {}, applyMiddleware(mylogger));
// getState คือ get ค่า state ที่อยู่ใน store ทั้งหมด
store.subscribe(()=>{
  console.log('Update Store', store.getState())
})
// ตรวจเช็ค action 
// อยากทำการเพิ่มเงินเดือน จึง dispatch type ADD
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,document.getElementById('root')
);

// provider คือส่วนที่นำ state ที่อยู่ใน store มาทำงานร่วมกับ component