import React, { useEffect, useState } from "react";

const userData = [
  { id: 1, name: "Name 1" },
  { id: 2, name: "Name 2" },
  { id: 3, name: "Name 3" },
  { id: 4, name: "Name 4" },
  { id: 5, name: "Name 5" },
];

function SelectBoxAll() {
  const [users, setUsers] = useState([]);
  const [idsSelect, setIdSelect] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    let tempUser;
    if (name === "allSelect") {
      tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
    } else {
      tempUser = users.map((user) => (user.name === name ? { ...user, isChecked: checked } : user));
    }
    setUsers(tempUser);
    let idsSelectTemp = [];
    for (let i = 0; i < tempUser.length; i++) {
      if (tempUser[i]?.isChecked) {
        idsSelectTemp.push(tempUser[i]["id"]);
      }
    }
    setIdSelect(idsSelectTemp);
  };

  const handleDeleteAll = () => {
    console.log("delete all", idsSelect);
  };

  return (
    <div className="container my-4">
      <form className="form">
        <h3>Select Users</h3>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" name="allSelect" checked={!users.some((user) => user?.isChecked !== true)} onChange={handleChange} />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {users.map((user) => (
          <div key={user.id} className="form-check">
            <input type="checkbox" className="form-check-input" name={user.name} checked={user?.isChecked || false} onChange={handleChange} />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
      <button className="btn btn-primary mt-5" onClick={handleDeleteAll}>
        Delete All
      </button>
    </div>
  );
}

export default SelectBoxAll;
