// import axios from 'axios';
// import React,{useEffect, useState} from 'react'
// import db from './firebase';


// const App = () => {
//   const [addText, setAddText] = useState("");
// console.log(addText,"aaaaaaaaafdddd")
//   // const submitHandler = async(e) => {
//   //   e.target

//     // if(addText == '') return
//     // setAddText(...addText)
//     // setAddText('')
//   // }
//   const addUser=(user)=>{
//     db.collection("users")
//     .add(addText)
//     .then(resp=>console.log("user added"))
//     .catch(err=>console.log(err))
//   }
//   const postCreateData = async(e) => {
//     e.preventDefault();
//     console.log(addText,"valueeee ")
//    const data=await axios.post(`https://crud-fire-480b2-default-rtdb.firebaseio.com`, {
//     addText:addText,
//     }).then(() => {
//       console.log(data,"dataaaaaaaaaaaa")
//         // navigate('/Home');
//     })}
//     useEffect(()=>{
//       addUser();
//     },[])
//   return (
//     <div>
//        <div className="add-item">
//           <input
//             value={addText}
//             onChange={(e) => setAddText(e.target.value.trim())}
//             placeholder="Add Text"
//           />
//           &nbsp;
//             <button type="submit" onClick={() => postCreateData()}>
//               Add
//             </button> 
//         </div>
//       </div>
//   )
// }

// export default App

// import React from 'react'
// import Task from './Task'
// import {collection, query, orderBy, onSnapshot,addDoc, Timestamp} from 'firebase/firestore'
// import {useState, useEffect} from 'react'
// import db from './firebase'

// const App = () => {
//   const [openAddModal, setOpenAddModal] = useState(false)
//   const [tasks, setTasks] = useState([])

//   /* function to get all tasks from firestore in realtime */ 
//   useEffect(() => {
//     const q = query(collection(db, 'tasks'), orderBy('created', 'desc'))
//     onSnapshot(q, (querySnapshot) => {
//       setTasks(querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         data: doc.data()
//       })))
//     })
//   },[])

//   return (
//     <div className='taskManager'>
//     <header>Task Manager</header>
//     <div className='taskManager__container'>
//       <button 
//         onClick={() => setOpenAddModal(true)}>
//         Add task +
//       </button>
//       <div className='taskManager__tasks'>
//       {tasks.map((task) => (
//         <Task
//           id={task.id}
//           key={task.id}
//           completed={task.data.completed}
//           title={task.data.title} 
//           description={task.data.description}
//         />
//       ))}
//       </div>
//     </div>
//     {openAddModal &&
//       <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
//     }
//   </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import db from './firebase';
import Todo from './Todo';
import Title from './Title';
import {
  addDoc,
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [subject, setSubject] = useState("");
  console.log(subject, "Subjecttttttttttttttt")
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (subject !== "") {
      await addDoc(collection(db, "todos"), {
        subject,
        completed: false,
      });
      setSubject("");
    }
  }



  
  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    console.log("qqqqqqqqqq")
  
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
    
  }, []); 










  const handleEdit = async (todo, subject) => {
    await updateDoc(doc(db, "todos", todo.id), { subject: subject, completed: true });
  };
  // const toggleComplete = async (todo) => {
  //   await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed, completed: false });
  // };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  }
  // style={{ textDecoration: todo.completed && "line-through" }} 
  // value={todo.Subject === "" ? newTitle : todo.Subject}
  return (<>
    <div>
      <Title />
    </div>
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text"
          placeholder='what do you want to do?'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button>Add-Todo</button>
      </div>
      <div>
        {todos.map((todo) => (<Todo
          key={todo.id}
          todo={todo}
          // toggleComplete={toggleComplete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />))}

      </div>
    </form>

  </>);
}

export default App
