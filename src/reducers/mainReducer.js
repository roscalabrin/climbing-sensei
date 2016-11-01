const mainReducer = ( state = { tags: [] }, action) => {
  switch(action.type) {
    case 'STORE_TAGS':
      return {
        ...state, 
        tags: action.data   
      }

      default:
        return state
  }
}

export default mainReducer
