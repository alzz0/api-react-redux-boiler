import React, { Component } from "react";
import {connect} from "react-redux"
import {fetchPosts} from "../store/actions/postActions"
class Posts extends Component {
  componentDidMount(){
      this.props.fetchPosts()
  }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost.postData)
        }
    }
  render() {
    let items = this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <h3> {post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <>
        {items}
      </>
    );
  }
}
const mapStateToProps=state=>{
    return{
        posts:state.posts.posts,
        newPost:state.posts.post
    }
}

export default connect(mapStateToProps,{fetchPosts})(Posts);
