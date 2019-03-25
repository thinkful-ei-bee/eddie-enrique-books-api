import React from 'react';

export default class FilterSearch extends React.Component {

    componentDidMount() {} 
  
    render() { 
        return (<div>
            <select onChange={this.props.printTypeFilter}> 
                <option value='all'>All</option>     
                <option value='books'>books</option> 
                <option value='magazines'>magazines</option> 
            </select> 
            <select onChange={this.props.bookTypeFilter} > 
                <option value=''>No filter</option> 
                <option value='ebooks'>ebooks</option> 
                <option value='free-ebooks'>free ebooks</option> 
                <option value='paid-ebooks' >paid ebooks</option> 
                <option value='partial'>partial</option> 
                <option value= 'full'>full</option> 
            </select>
             </div>);
    }
    componentDidUpdate() {} 
    componentWillUnmount() {}
}

