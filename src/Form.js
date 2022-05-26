import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            product :  '',
            category : '',
            counter : 0
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state);
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { product, category, counter } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="product"> Product </label>
                <input 
                    type = "text" 
                    name = "product" 
                    id = "product"
                    value = {product} 
                    onChange = {this.handleChange} />

                <label for="category"> Category </label>
                <input 
                    type = "text" 
                    name = "category" 
                    id = "category"
                    value = {category} 
                    onChange = {this.handleChange} />

                <label for="counter"> Counter </label>
                <input 
                    type = "number" 
                    name = "counter" 
                    id = "counter"
                    value = {counter} 
                    onChange = {this.handleChange} />

                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;