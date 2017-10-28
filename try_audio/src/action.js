export function mapStateToProps(state) {
    return state;
  }
  
  export function mapDispatchToProps(dispatch) {
    return {
      updateHello: (text) => {
        dispatch( {type: 'HELLO_WORLD', hello: text} );
      }
    }
  }