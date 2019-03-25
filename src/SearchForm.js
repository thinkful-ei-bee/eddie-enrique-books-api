import React from 'react';

export default class SearchForm extends React.Component {
    

    componentDidMount() {
    
    } 
   



    render() { 
        return <div>

                <form onSubmit = {this.props.onSubmit}>
                    <input type = 'text' name='text'/>
                    <button type = 'submit'>Search</button>
                </form>

				</div>;
    }

    componentDidUpdate() {} 

    componentWillUnmount() {}
}