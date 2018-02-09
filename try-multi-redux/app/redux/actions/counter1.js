import * as types from '../types'

export function mapStateToProps(state) {
    return state;
}  

export function mapDispatchToProps(dispatch) {
    return {
        addNumber: (number) => {
            dispatch( {type: types.COUNTER_1, selectedItem: nubmer + 1} );
        },
        reduceNumber: (number) => {
            dispatch( {type: types.COUNTER_1, selectedItem: number - 1} );
        },
    }
}