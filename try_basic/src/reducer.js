
const initialState = {
    alert_message: 'Hi'
}

export default function reduser(state = initialState, action) {
    switch(action.type) {
        case 'HI':
            return {
                ...state,
                alert_message: action.alert_message
            };
        default:
            return state;
    }
}