import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">{book.title}
                </li>
            );
        });
    }

    render() {
        return(
            <ul className="list-group-col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//connect redux & react
function mapStateToProps(state){//if state changes, this will instantly & automatically rerender
    // Whatever is returned will show up as props inside of BookList
    return{
        books: state.books
    };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, result should be passed to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//with containers you wat to exoprt the container, so differs from component

//Promote Booklist from a component to a container - it needs to know about this new
//dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect takes a function & a component & produces a container