import React from 'react';

export default class SearchForm extends React.Component {
    

    componentDidMount() {
        

        


    } 
   
    handleSubmit = (e) => {
        e.preventDefault();

        const searchTerm = e.target.text.value;
        
        console.log(searchTerm);
        fetch('https://www.googleapis.com/books/v1/volumes?q={searchTerm}')

    }


    render() { 
        return <div>

                <form onSubmit = {this.handleSubmit}>
                    <input type = 'text' name='text'/>
                    <button type = 'submit'>Search</button>
                </form>

				</div>;
    }

    componentDidUpdate() {} 

    componentWillUnmount() {}
}