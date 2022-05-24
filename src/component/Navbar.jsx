import { useState } from "react";
import Select from 'react-select';
const option = [
  { value: "All", label: "All" },
  { value: "compoleted", label: "compoleted" },
  { value: "uncompoleted", label: "uncompoleted" },
];
const NavBar = ({ uncompoletedtodos, filterTodos, status, setstuos }) => {
  const changehandler = (e) => {
    setstuos(e);
    filterTodos(e.value);
  };
  return (
    <div>
      <header>
        {/* <span>{uncompoletedtodos}</span> <h1> are not compoleted</h1> */}
        {uncompoletedtodos ? (
          <>
            {" "}
            <span>{uncompoletedtodos}</span> <h1> are not compoleted</h1>
          </>
        ) : (
          <h2> your task is done</h2>
        )}
        {/* <select name="" id="" onChange={changehandler} value={status}>
          <option value="All">All</option>
          <option value="compoleted">compoleted</option>
          <option value="uncompoleted">uncompoleted</option>
        </select> */}
        <Select value={status} options={option} onChange={changehandler}  />
      </header>
    </div>
  );
};

export default NavBar;
