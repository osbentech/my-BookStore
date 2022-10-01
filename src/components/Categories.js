// import React, { useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import './Book.css';
import { categAction } from '../redux/categories/categories';

function Categories() {
  const status = useSelector((state) => state.categ);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <button className="status" type="button" onClick={() => { dispatch(categAction()); }}>Check Status</button>
      <p>{status}</p>
    </div>
  );
}

export default Categories;

// function Categories() {
//   // State: a counter value
//   const [counter, setCounter] = useState(0)

//   // Action: code that causes an update to the state when something happens
//   const increment = () => {
//     setCounter(prevCounter => prevCounter + 1)
//   }

//   // View: the UI definition
//   return (
//     <div>
//       Value: {counter} <button onClick={increment}>Increment</button>
//     </div>
//   )
// }
// export default Categories