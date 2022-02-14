import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContact } from "../../actions/contactAction";

function ListContact() {
  const { getListContactResult, getListContactLoading, getLiatContactError } =
    useSelector((state) => state.ContactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action getlist contact
    dispatch(getListContact());
  }, [dispatch]);
  return (
    <div>
      <h1>List Contact</h1>
      {getListContactResult
        ? getListContactResult.map((items) => {
            return (
              <div key={items.id}>
                <p>Nama : {items.nama}</p>
                <p>Nomor Hp : {items.nohp}</p>
              </div>
            );
          })
        : getListContactLoading
        ? "Loading data"
        : getLiatContactError
        ? "Data Error"
        : ""}
    </div>
  );
}

export default ListContact;
