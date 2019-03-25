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
        let url = 'https://www.googleapis.com/books/v1/volumes?';

        const searchTerm = e.target.text.value;
        url += `q=${searchTerm}`;

        if (this.state.printType !== ''){
          url += `&printType=${this.state.printType}`
        }

        if (this.state.bookType !== ''){
          url += `&filter=${this.state.bookType}`
        }

        console.log('Submiting...',this.state);
        this.setState({...this.state, searchTerm: searchTerm},()=>{
          console.log('Set the search term...',this.state);
          fetch(url)
            .then(res => res.json())
            .then(data => this.setState({...this.state, list: data.items}))
        })
        
    }

    handlePrintTypeFilter=(e)=>{
      const printTypeOption = e.target.value;
      this.setState({...this.state, printType:printTypeOption},()=> {
        console.log(this.state);
        if (this.state.searchTerm === ''){return }
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${printTypeOption}`)
          .then(res => res.json())
          .then(data => this.setState({...this.state, list:data.items}))
      });
    }

    handleBookTypeFilter = (e) => {
      const bookTypeOption= e.target.value;
      console.log('Book Filter changing to...',bookTypeOption);
      this.setState({...this.state,  bookType: bookTypeOption},
        // Need to add function to setState because setState is asynchronous 
        ()=>{
          if (this.state.searchTerm === ''){return }
          if (this.state.bookType === ''){
            console.log('Returning to no Filter...');
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`)
              .then(res=>res.json())
              .then(data => this.setState({...this.state, list:data.items}))
          }
          else{
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&filter=${bookTypeOption}`)
              .then(res => res.json())
              .then(data => this.setState({...this.state, list:data.items}))
          }
        }
      );
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