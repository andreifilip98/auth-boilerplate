import jsonPlaceholder from "../../api/jsonPlaceholder";

export const fetchPosts = () => async (dispatch: any) => {

  const response = await jsonPlaceholder.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  })
};
