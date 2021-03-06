
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

// functional component
const Greeting = () =>  {
  return <div> Hey There!</div>
}

export default (
  <Route path="/" component={App} >               // ../          App
    // nested routes --> stack the path
    // whenever a nested route is used --> the nested component is passed to the parent as "this.props.children"
    // e.g. Greeting passed to App  => App has
    <IndexRoute component={PostsIndex} />         // ../          App, PostsIndex
    <Route path="greet" component={Greeting} />   // ../greet     App, Greeting
    <Route path="posts/new" component={PostsNew} />   // ../greet     App, Greeting
    <Route path="posts/:id" component={PostsShow} /> // this.props.params.id  --> params says, that there are parameters in URL
  </Route>
);
