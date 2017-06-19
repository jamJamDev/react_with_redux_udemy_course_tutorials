import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //use reactDom to render & not React anymore.
import YTSearch from 'youtube-api-search';
import  SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDVd3mz0CTJY3IIf0eNpUr174I9pdMOnow';

//create a new component that will produce some html
//const App = function(){
class App extends Component { //this is another way to write it, it's still a function, just a new way of declaring it using ES6 syntax & "this" changes
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
};

//take this component genreated html & put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));//wrap in JSX tags to instantiate component & a reference to an existing DOM node
//we will need ot grab the DOM node from the main index.html file, it is the root node of the entire application
//the div in the HTML file has a class called container.