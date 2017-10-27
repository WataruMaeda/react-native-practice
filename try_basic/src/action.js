
export function mapStateToProps(state) {
    return state;
}

export function mapDispatchToProps(dispatch) {
    return {
        updateAlertMessage: (text) => {
            dispatch({type: 'HI', alert_message: text});
        }
    }
}