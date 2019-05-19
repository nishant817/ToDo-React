import React from 'react';

class ToDoItem extends React.Component {
   render () {
      return (
         <h3>{this.props.todoObj.title}</h3>
      );
   }
}

export default ToDoItem;