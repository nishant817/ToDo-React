import React from 'react';
import ToDoItem from './ToDoItem.js'

class ToDo extends React.Component {
   render() {
      return this.props.todos.map((todo) => (
         <ToDoItem key={todo.id} todoObj={todo} />
      ));
      // return (
      //    <div className="">
      //       <h2>To Do List</h2>
      //    </div>
      // );
   }
} 

// function ToDo() {
//    return (
//       <div className="">
//          <h2>To Do List</h2>
//       </div>
//    );
// }

export default ToDo