import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getListContact,
  detailContact,
} from "../../actions/contactAction";

function ListContact() {
  const {
    getListContactResult,
    getListContactLoading,
    getLiatContactError,
    deleteContactResult,
  } = useSelector((state) => state.ContactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action getlist contact
    dispatch(getListContact());
  }, [dispatch]);

  //auto reload
  useEffect(() => {
    if (deleteContactResult) {
      dispatch(getListContact());
    }
  }, [deleteContactResult, dispatch]);

  return (
    <div>
      <h1>List Contact</h1>
      {getListContactResult
        ? getListContactResult.map((items) => {
            return (
              <div key={items.id}>
                <p>
                  {items.nama} - {items.nohp}{" "}
                  <button onClick={() => dispatch(deleteContact(items.id))}>
                    Delete
                  </button>
                  <button
                    onClick={() => dispatch(detailContact(items))}
                    style={{ marginLeft: "10px" }}
                  >
                    Edit
                  </button>
                </p>
              </div>
            );
          })
        : getListContactLoading
        ? "Loading data"
        : getLiatContactError
        ? "Data Error atau Server mati"
        : "Data Kosong"}
    </div>
  );
}

export default ListContact;
