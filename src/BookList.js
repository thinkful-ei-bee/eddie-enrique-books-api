import React from 'react';
import Book from './Book';

function BookList(props) {
    console.log(props.result)
    const list = [];
    for (let i=0; i<Object.keys(props.result).length;i++){
      const author = props.result[i].volumeInfo.authors;
      const title = props.result[i].volumeInfo.title;
      const description = props.result[i].volumeInfo.description;
      let price=0;
      if (props.result[i].saleInfo.saleability === 'FOR_SALE'){
        price = props.result[i].saleInfo.listPrice.amount
      }else{
        price = "Not for Sale"
      }
      const imageLink = props.result[i].volumeInfo.imageLinks.thumbnail;
      list.push(<Book 
                    key = {props.result[i].id}
                    author = {author}
                    title = {title}
                    description = {description}
                    price = {price}
                    imageLink = {imageLink}/>)
    }
    

    return (
    
<main className='BookList'>
    <ul>
      {list}
    </ul>
</main>
 );
}
export default BookList;
