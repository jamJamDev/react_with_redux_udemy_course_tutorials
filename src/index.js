import React from 'react';
import ReactDOM from 'react-dom'; //use reactDom to render & not React anymore.
import YTSearch from 'youtube-api-search';
import  SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDVd3mz0CTJY3IIf0eNpUr174I9pdMOnow';

YTSearch({key: API_KEY, term:'surfboards'}, function(data){
    console.log("DATA: ", data);
});

//create a new component that will produce some html
//const App = function(){
const App = () => { //this is another way to write it, it's still a function, just a new way of declaring it using ES6 syntax & "this" changes
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

//take this component genreated html & put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));//wrap in JSX tags to instantiate component & a reference to an existing DOM node
//we will need ot grab the DOM node from the main index.html file, it is the root node of the entire application
//the div in the HTML file has a class called container.