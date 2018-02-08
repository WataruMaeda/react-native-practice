import * as types from '../type'

export function mapStateToProps(state) {
    return state;
  }  
  export function mapDispatchToProps(dispatch) {
    return {
      updateCounter1: (item) => {
        dispatch( {type: types.COUNTER_1, selectedItem: item} );
      }
    }
  }
}