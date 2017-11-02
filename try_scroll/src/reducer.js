const initialState = {
    selectedItem: {title: "", image: ""},
    drawerState: {isOpen: false, selectedItem: ''},
}
  
export default function reducer(state = initialState, action) {
    switch(action.type) {
      case 'SELECTED_ITEM':
        return {
          ...state,
          selectedItem: action.selectedItem
        };
      case 'DRAWER_STATE':
        return {
          ...state,
          drawerState: action.drawerState
        };
  
      default:
        return state
    }
}