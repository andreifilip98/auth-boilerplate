
const postReducer = (state = null, action: any) => {

  console.log(action.type)

  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
