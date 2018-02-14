import * as types from '../types'

export function mapStateToProps(state) {
    return state;
}

export function mapDispatchToProps(dispatch) {
    return {
      updateName: (name) => {
          dispatch( { type: types.SAVE_NAME, name: name} );
      },
      updateAge: (age) => {
          dispatch({ type: types.SAVE_AGE, age: age })
      },
      udpatePhone: (phone) => {
          dispatch({type: types.SAVW_PHONE, phone: phone })
      },
    }
  }