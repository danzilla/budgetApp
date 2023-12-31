const initialState = {
    isFetching: false,
    isError: false,
    data: []
  };


  // Fetch_Reducers
  const fetchReducers = (state = initialState, action) => {
    switch (action.type) {
  
      case "FETCHING_ToDo_DETAILS":
        return Object.assign({}, state, {
          data: action.data,
          isFetching: true,
          isError: false
        });
      case "ERROR_ToDo_DETAILS":
        return Object.assign({}, state, {
          data: action.data,
          isFetching: false,
          isError: true
        });
  
      case "FETCHED_ToDo_DETAILS":
        return Object.assign({}, state, {
          data: action.data,
          isFetching: false,
          isError: false
        });
  
      case "FETCHED_Add_ToDo_DETAILS":
        return Object.assign({}, state, {
          isFetching: false,
          isError: false
        });
      case "FETCHED_Delete_ToDo_DETAILS":
        return Object.assign({}, state, {
          isFetching: false,
          isError: false
        });
      case "FETCHED_Update_ToDo_DETAILS":
        return Object.assign({}, state, {
          isFetching: false,
          isError: false
        });
  
      // Default State
      default:
        return state;
    }
  };
  
  export default fetchReducers;