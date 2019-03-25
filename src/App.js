import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import BookList from './BookList';
import FilterSearch from './FilterSearch';

export default class App extends React.Component {
    state = {
      list:[],
      printType:'',
      bookType:'',
      searchTerm: '',

    };
  
  
    handleSubmit = (e) => {
        e.preventDefault();

        const searchTerm = e.target.text.value;
        this.setState({...this.state, searchTerm: searchTerm})
        console.log(searchTerm);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
            .then(res => res.json())
            .then(data => this.setState({...this.state, list: data.items}))
    }

    handlePrintTypeFilter=(e)=>{
      const printTypeOption = e.target.value;
      console.log(printTypeOption)
      this.setState({...this.state, printType:printTypeOption});
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${printTypeOption}`)
      .then(res => res.json())
      .then(data => this.setState({...this.state, list:data.items}))
      

    }

    handleBookTypeFilter = (e) => {
      const bookTypeOption= e.target.value;
      this.setState({...this.state, bookType: bookTypeOption});
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&filter=${bookTypeOption}`)
      .then(res => res.json())
      .then(data => this.setState({...this.state, list:data.items}))
      console.log(this.state.list)
    }

 
 
  render() { 
      return <div>
        <Header/>
        <SearchForm onSubmit={this.handleSubmit} />
        <FilterSearch searchTerm= {this.state.searchTerm} 
                printType = {this.state.printType} 
                bookType= {this.state.bookType}
                bookTypeFilter= {this.handleBookTypeFilter}
                printTypeFilter= {this.handlePrintTypeFilter}/>
        <BookList result = {this.state.list}/>
      </div>;
  }

  componentDidUpdate() {} 

  componentWillUnmount() {}
}