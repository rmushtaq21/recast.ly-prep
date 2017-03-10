// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    }
  }

  videoOnClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
       <Nav />
       <div className="col-md-7">
         <VideoPlayer video={this.state.currentVideo} />
       </div>
       <div className="col-md-5">
         <VideoList
          videos={this.state.videos}
          videoOnClick={this.videoOnClick.bind(this)}
        />
       </div>
     </div>
    )
  }
};

window.App = App;


/*
App - The top level container for the entire application.
This is the component that will be rendered to the DOM

Nav - A container component for the top navigation bar

Search - Responsible for knowing and communicating
information about the search input field

VideoPlayer - Responsible for playing a single video and
displaying information about it

VideoList - A container component responsible for
populating video list entry components

VideoListEntry - A component that shows a thumbnail view
for a single video. When the title of this video is
clicked, that video will be played in the VideoPlayer
component
*/