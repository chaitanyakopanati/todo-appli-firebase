// // import React, { useState } from "react";
// // // import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// // // import EditIcon from "@mui/icons-material/Edit";
// // // import DeleteIcon from "@mui/icons-material/Delete";
// // import  db  from './firebase';
// // import {
// //     collection,
// //     query,
// //     onSnapshot,
// //     doc,
// //     updateDoc,
// //     deleteDoc,
// //   } from "firebase/firestore";

// // export default function Todo({
// //   todo,
// //   toggleComplete,
// //   handleDelete,
// //   handleEdit,
// // }) {
// //   const [newTitle, setNewTitle] = useState(todo.subject);

// //   const handleChange = (e) => {
// //     e.preventDefault();
// //     if (todo.complete === true) {
// //       setNewTitle(todo.subject);
// //     } else {
// //       todo.subject = "";
// //       setNewTitle(e.target.value);
// //     }
// //   };

// // //   const handleEdit = async (todo, subject) => {
// // //     await updateDoc(doc(db, "todos", todo.id), { subject: subject });
// // //   };
// // //   const toggleComplete = async (todo) => {
// // //     await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
// // //   };
// //   return (
// //     <div className="todo">
// //       <input
// //         style={{ textDecoration: todo.completed && "line-through" }}
// //         type="text"
// //         value={todo.subject === "" ? newTitle : todo.subject}
// //         className="list"
// //         onChange={handleChange}
// //       />
// //       <div>
// //         <button
// //           className="button-complete"
// //           onClick={() => toggleComplete(todo)}
// //         >
// //         ADD  {/* <CheckCircleIcon id="i" /> */}
// //         </button>
// //         <button
// //           className="button-edit"
// //           onClick={() => handleEdit(todo, newTitle)}
// //         >
// //          Edit {/* <EditIcon id="i" /> */}
// //         </button>
// //         {/* <Todo
// //   toggleComplete={toggleComplete}
// //   handleEdit={handleEdit}
// // /> */}
// //         <button className="button-delete" onClick={() => handleDelete(todo.id)}>
// //        Delete   {/* <DeleteIcon id="i" /> */}
// //         </button>
        
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// // import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// // import EditIcon from "@mui/icons-material/Edit";
// // import DeleteIcon from "@mui/icons-material/Delete";
//  function Todo({
//   todo,
//   toggleComplete,
//   handleDelete,
//   handleEdit,
// }) {
//   const [newTitle, setNewTitle] = useState(todo.subject);

//   const handleChange = (e) => {
//     e.preventDefault();
//     if (todo.complete === true) {
//       setNewTitle(todo.subject);
//     } else {
//       todo.subject = "";
//       setNewTitle(e.target.value);
//     }
//   };
//   return (
//     <div className="todo">
//       <input
//         style={{ textDecoration: todo.completed && "line-through" }}
//         type="text"
//         value={todo.subject === "" ? newTitle : todo.subject}
//         className="list"
//         onChange={handleChange}
//       />
//       <div>
//         <button
//           className="button-complete"
//           onClick={() => toggleComplete(todo)}
//         >
//           {/* <CheckCircleIcon id="i" /> */}
//         </button>
//         <button
//           className="button-edit"
//           onClick={() => handleEdit(todo, newTitle)}
//         >
//           {/* <EditIcon id="i" /> */}
//         </button>
//         <button className="button-delete" onClick={() => handleDelete(todo.id)}>
//           {/* <DeleteIcon id="i" /> */}
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Todo;
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const[newTitle, setNewTitle] = useState(todo.subject);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.subject);
    } else {
      todo.subject = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        // style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        disabled={!todo.completed}
        value={todo.subject === "" ? newTitle : todo.subject}
        className="list"
        onChange={handleChange}
      />
      <div>
        {/* <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button> */}
        <button
          className="button-edit"
          onClick={() => handleEdit(todo,newTitle,todo?{completed:false}:{completed:true})}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}



{/* <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>


{
  status: 'connected',
  authResponse: {
      accessToken: '...',
      expiresIn:'...',
      signedRequest:'...',
      userID:'...'
  }
}

<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
} */}