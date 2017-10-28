const initialState = {
    item: { title: "", image: "", mp3: "" }
  }
  
  export default function reducer(state = initialState, action) {
    switch(action.type) {
  
      case 'HELLO_WORLD':
        return {
          ...state,
          hello: action.hello
        };
  
      default:
        return state
    }
  }