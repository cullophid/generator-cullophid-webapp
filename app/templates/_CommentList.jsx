// CommentList.jsx

'use strict';

var React = require('react');
var Comment = require('./Comment.jsx');
var CommentList;

module.exports = CommentList = React.createClass({
 render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});