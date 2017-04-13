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

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }


  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary" >
            Add a post
          </Link>
        </div>
          <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // list of posts
  return { posts: state.posts.all};
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
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
