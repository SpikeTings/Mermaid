import React from 'react';
import { connect } from 'react-redux';
import { getPost } from 'mattermost-redux/selectors/entities/posts';
import Mermaid from 'react-mermaid';

const PostMessageMermaid = ({ mermaidData }) => {
  if (!mermaidData) {
    return null;
  }
  const rnd = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  const name = "diagram"+rnd;
  return (
    <Mermaid name={name}>{mermaidData}</Mermaid>
  );
};

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId.replace("user-activity-", "");
  const post = getPost(state, postId);

  console.log('teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest');

  try {
    console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',post.props);

    if (post.props && post.props.mermaidData) {
      return { mermaidData: post.props.mermaidData };
    }
  } catch (e) {}

  return {};
};

export default connect(
  mapStateToProps,
  null
)(PostMessageMermaid);
