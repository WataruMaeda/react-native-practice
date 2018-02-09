import * as types from '../types'

export function mapStateToProps(state) {
    return state;
}  

export function mapDispatchToProps(dispatch) {
    return {
        addNumber: (number) => {
            dispatch( {type: types.COUNTER_SECOND, selectedItem: nubmer + 1} );
        },
        reduceNumber: (number) => {
            dispatch( {type: types.COUNTER_SECOND, selectedItem: number - 1} );
        },
    }
}



// const addNumber = number => {
//      return dispatch => {
//          return dispatch({type: 'ADDNUMBER', payload: number + 1 })
//      }
//  }

//  const reduceNumber = number => {
//     return dispatch => {
//         return dispatch({type: 'REDUCENUMBER', payload: number - 1 })
//     }
// }

// export {addNumber, reduceNumber}