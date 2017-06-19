import React, { Component } from 'react';//still need to import React for JSX to vanilla JS conversion

/* Functional Component, but we want to write a class
const SearchBar = () => {
    return <input />;
};
*/


//class based component
class SearchBar extends Component {
    //how to intialize state in a class based component
    constructor(props) {
        super(props); //call parent class

        this.state = { term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} //make this a controlled component - which gets assigned when this is re-rendered (which happens after typing
                    //so the user only fires an event, which changes the state.
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;