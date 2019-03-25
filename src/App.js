import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import BookList from './BookList'

export default class App extends React.Component {
    state = {};
  
  
    handleSubmit = (e) => {
        e.preventDefault();

        const searchTerm = e.target.text.value;
        
        console.log(searchTerm);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
            .then(res => res.json())
            .then(data => this.setState(data.items))

    }

  componentDidMount() {} 
 
  render() { 
      return <div>
        <Header/>
        <SearchForm onSubmit={this.handleSubmit} />
        <BookList result = {this.state}/>
      </div>;
  }

  componentDidUpdate() {} 

  componentWillUnmount() {}
}