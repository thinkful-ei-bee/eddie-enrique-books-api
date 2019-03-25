import React from 'react';

function Book(props) {
return (
<div className='Book'>
    <li>
      <h3>{props.title}</h3>
      <p>Author: {props.author}</p>
      <p>Price: {props.price}</p>
      <p>{props.description}</p>
      <img src={props.imageLink} alt="Name"/>
    </li>
</div>
 );
}
export default Book;