import React, { Component, PropTypes } from 'react';
// similar to connect function from react-redux
// also wrap the PostsNew-Component in the export at the bottom
import { reduxForm } from 'redux-form'
// import action creator
import { createPost } from '../actions/index';
// navigate to other pages
import { Link } from 'react-router';

class PostsNew extends Component {

  // context´s type property --> try to avoid using context! --> only for router as here
  // defining an object of the PostsNew class
  // get access on our context called  router
  // React is then goining to search all of this component´s parents until it finds a component that has a piece of context called router.
  static contextTypes = {
    router: PropTypes.object // now this.context.router is available
  }

  onSubmit(props) {
    // props = properties from the form

    // creates a promise as a payload => whenever this,
    this.props.createPost(props)
      // chain on a "then"-Statement
      .then( () => {
        // blog post has been created, navigate the user to the index
        // We navigateby calling this.context.router.push with the new path to navigate to.
        this.context.router.push('/');

      });
  }

  render() {

    // ES6 syntax
    const { fields: {title, categories, content }, handleSubmit } = this.props;
    /* same as (ES5):
      const handleSubmit = this.props.handleSubmit;
      const title = this.props.fields.title;
      const categories = this.props.fields.categories;
      const content = this.props.fields.content;
    */
    //console.log(title);

    // handleSubmit --> from redux-form
    // redux-form documentation

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this) /* bind the context of our function here to "this" of the form */)  /* handleSubmit --> from redux-form */ }>
        <h3>Create A New Post</h3>

        <div className={
            // if this field has been touched AND is invalid --> add has-danger className
            `form-group ${title.touched && title.invalid ? 'has-danger' : '' }`
          }>
          <label>Title</label>
          {
          // destructuring of the object (see console.log(title) )
          // take everything of it and pass it to the input --> onChange={this.props.onChange}
          // to be managed by redux-form
          }
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {
              // touched: user has touched the input field in some way (click into it and click out)
              title.touched ? title.error : ''
            }
          </div>
        </div>

        <div className={ `form-group ${categories.touched && categories.invalid ? 'has-danger' : '' }` }>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {
              // touched: user has touched the input field in some way (click into it and click out)
              categories.touched ? categories.error : ''
            }
          </div>
        </div>

        <div className={ `form-group ${content.touched && content.invalid ? 'has-danger' : '' }` }>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          <div className="text-help">
            {
              // touched: user has touched the input field in some way (click into it and click out)
              content.touched ? content.error : ''
            }
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>

      </form>
    );
  }
}

// adds error properties to the defined form-properties e.g. title.error
function validate(values){
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories){
    errors.categories = 'Enter categories [comma separated e.g.: a, b, c]'
  }
  if (!values.content){
    errors.content = 'Enter some content';
  }

  // when errors return with one of the defined form properties below
  // (title, categories, content)
  return errors;
}


// connect: 1st arg = mapStateToProps, 2nd = mapDispatchToProps
// reduxForm: 1st = form config, 2nd = mapStateToProps, 3rd = mapDispatchToProps
export default reduxForm({
  // configuration to redux-form, letter we pass to reduxForm

  // unique token/name
  form: 'PostsNewForm',
  // watch for these inputs --> now this.props.fields.title
  fields: ['title', 'categories', 'content'],
  validate
/* behind the scenes
  - user types somethin in....record it on application state
  state === {
    form: {
      PostsNewForm: {
        title: '...',
        categories: '....',
        content: '...'
      }
    }
  }
  */
}, null, { createPost } )(PostsNew);
