import * as types from '../types'

export function mapStateToProps(state) {
    return state;
}  

export function mapDispatchToProps(dispatch) {
    return {
        addNumber: (number) => {
            dispatch( {type: types.COUNTER_FIRST, selectedItem: nubmer + 1} );
        },
        reduceNumber: (number) => {
            dispatch( {type: types.COUNTER_FIRST, selectedItem: number - 1} );
        },
    }
}