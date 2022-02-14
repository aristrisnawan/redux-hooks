import { GET_LIST_CONTACT } from "../../actions/contactAction";

const initialState = {
  getListContactResult: false,
  getListContactLoading: false,
  getLiatContactError: false,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CONTACT:
      return {
        ...state,
        getListContactResult: action.payload.data,
        getListContactLoading: action.payload.loading,
        getLiatContactError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;
