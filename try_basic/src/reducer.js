
const initialState = {
    alert_message: 'Hi',
    movieList: { title: "", description: "", movies: []}
}

export default function reduser(state = initialState, action) {
    switch(action.type) {
        case 'HI':
            return {
                ...state,
                alert_message: action.alert_message
            };
        case 'MOVIE_LIST':
            return {
              ...state,
              movieList: action.movieList
            };     
        default:
            return state;
    }
}