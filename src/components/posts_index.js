import React, { Component } from 'react';
import { connect } from 'react-redux';
// not needed because of the shortcuts below
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

// a-Tag
import { Link } from 'react-router';

class PostsIndex extends Component {

  // React Lifecycle method
  // componentWillMount: called by React when component is about to be rendered for the first time, only!
  componentWillMount() {
    console.log("PostsIndex - componentWillMount");
    this.props.fetchPosts();

  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary" >
            Add a post
          </Link>
        </div>
        List of Blog posts
      </div>
    );
  }
}

/* minimize code --> shortcut
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts },  dispatch);
}

// null --> no mapStateToProps method
export default connect(null, mapDispatchToProps)(PostsIndex);
*/

// use the mapDispatchToProps shortcut
//export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
// now ES6 syntax to minimize more
export default connect(null, { fetchPosts })(PostsIndex);
