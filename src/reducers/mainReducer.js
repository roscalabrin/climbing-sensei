const mainReducer = ( state = { tags: [] }, action) => {
  switch(action.type) {
    case 'STORE_TAGS':
      return {
        ...state,
        tags: action.payload.tags
      }

      default:
        return state
  }
}

export default mainReducer
