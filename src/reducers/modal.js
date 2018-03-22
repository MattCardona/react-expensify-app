const modalReducer = (state = {}, action) => {
  switch(action.type){
    case "SET_FLAG":
      return {flag: true};
    case 'UNSET_FLAG':
      return {flag: false};
    default:
      return state;
  }
};

export {modalReducer}