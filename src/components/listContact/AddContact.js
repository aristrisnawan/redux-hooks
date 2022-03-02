import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getListContact,
  updateContact,
} from "../../actions/contactAction";

export default function AddContact() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  //   const { addContactResult } = useSelector((state) => state.ContactReducer);
  const { addContactResult, detailContactResult, updateContactResult } =
    useSelector((state) => state.ContactReducer);
  const dispatch = useDispatch();

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      //update
      dispatch(updateContact({ id: id, nama: nama, nohp: nohp }));
      setNama("");
      setNohp("");
      setId("");
    } else {
      //add data
      dispatch(addContact({ nama: nama, nohp: nohp }));
      setNama("");
      setNohp("");
    }
  };

  //auto reload
  useEffect(() => {
    if (addContactResult) {
      dispatch(getListContact());
    }
    if (updateContactResult) {
      dispatch(getListContact());
    }
  }, [addContactResult, updateContactResult, dispatch]);

  //Detail
  useEffect(() => {
    if (detailContactResult) {
      setNama(detailContactResult.nama);
      setNohp(detailContactResult.nohp);
      setId(detailContactResult.id);
    }
  }, [detailContactResult, dispatch]);

  return (
    <div>
      <h4>{id ? "Update Contact" : "Add Contact"}</h4>
      <form action="" onSubmit={HandleSubmit}>
        <input
          type="text"
          name="nama"
          placeholder="Nama . . . "
          value={nama}
          onChange={(e) => {
            setNama(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          name="nohp"
          placeholder="No Hp . . . "
          value={nohp}
          onChange={(e) => {
            setNohp(e.target.value);
          }}
        />
        <br />
        <button type="submit" onSubmit={HandleSubmit}>
          {id ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}
