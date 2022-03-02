import axios from "axios";

export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const DETAIL_CONTACT = "DETAIL_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const getListContact = () => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_LIST_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        //get data
        axios({
                method: "GET",
                url: "http://localhost:3000/kontaks",
                timeout: 120000,
            })
            .then((response) => {
                //berhasil
                dispatch({
                    type: GET_LIST_CONTACT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_LIST_CONTACT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const addContact = (data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: ADD_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        //Add Data
        axios({
                method: "POST",
                url: "http://localhost:3000/kontaks",
                timeout: 120000,
                data: data,
            })
            .then((response) => {
                dispatch({
                    type: ADD_CONTACT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((err) => {
                dispatch({
                    type: ADD_CONTACT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message,
                    },
                });
            });
    };
};

export const deleteContact = (id) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: DELETE_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        //Delete data
        axios({
                method: "DELETE",
                url: `http://localhost:3000/kontaks/` + id,
                timeout: 120000,
            })
            .catch((response) => {
                dispatch({
                    type: DELETE_CONTACT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .then((err) => {
                dispatch({
                    type: DELETE_CONTACT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.errorMessage,
                    },
                });
            });
    };
};

export const detailContact = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_CONTACT,
            payload: {
                data: data,
            },
        });
    };
};

export const updateContact = (data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: UPDATE_CONTACT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        //Update Data
        axios({
                method: "PUT",
                url: `http://localhost:3000/kontaks/` + data.id,
                timeout: 120000,
                data: data,
            })
            .then((response) => {
                dispatch({
                    type: UPDATE_CONTACT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((err) => {
                dispatch({
                    type: UPDATE_CONTACT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message,
                    },
                });
            });
    };
};