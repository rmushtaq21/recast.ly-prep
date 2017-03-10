var VideoPlayer = ({video}) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
      src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;

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