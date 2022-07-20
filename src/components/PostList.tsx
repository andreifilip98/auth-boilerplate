import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from "../store/actions";
import {Text, View} from "react-native";

interface Props{
  posts: any;
};

const PostList = ({posts}: Props) => {

  useEffect(() => {
  console.log(posts)
  });

  return(
    <View>
      {posts !== null ? posts.map((item: any) => (
        <View>
          <Text>
            {item.title}
          </Text>
          <Text>
            {item.body}
          </Text>
        </View>
      )):null

      }
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps,  fetchPosts )(PostList);
