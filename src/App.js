import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';

export default class App extends React.Component {

  

  componentDidMount() {} 
 
  render() { 
      return <div>
        <Header/>
        <SearchForm/>
      </div>;
  }

  componentDidUpdate() {} 

  componentWillUnmount() {}
}