import React, { useState } from "react";
import "../styles/SubmitForm.css";

function SubmitForm() {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);
  const [gender, setGender] = useState("Male");
  // const [checkbox, setCheckbox] = useState([]);
  const [idsDelete, setIdsDelete] = useState([]);
  const getFormData = (e) => {
    e.preventDefault();
    console.log("form gửi lên", { name, qty, gender, idsDelete });
  };
  const options = [
    { id: 1, label: "value 1" },
    { id: 2, label: "value 2" },
    { id: 3, label: "value 3" },
    { id: 4, label: "value 4" },
  ];

  const combobox = [
    { id: 1, label: "Term 1" },
    { id: 2, label: "Term 2" },
    { id: 3, label: "Term 3" },
    { id: 4, label: "Term 4" },
    { id: 5, label: "Term 5" },
    { id: 6, label: "Term 6" },
  ];

  const handleChangeCombobox = (id) => {
    const idxBox = idsDelete.indexOf(id);
    if (idxBox > -1) {
      idsDelete.splice(idxBox, 1);
    } else {
      idsDelete.push(id);
    }
  };

  // function handleChangeSelect(e) {
  //   setQty(e.target.value);
  // }

  return (
    <div className="SubmitForm">
      <h1>Handle Form in React</h1>
      <form onSubmit={getFormData} className="form grid">
        <div>
          <div>
            <h1>--Input--</h1>
            <div>
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
            </div>
          </div>
          <div>
            <h1>--Radio--</h1>
            {/* Nếu cho thuộc tính checked vào radio thì gửi form sẽ bị sai */}
            <div className="row">
              <div>
                <label>Male</label>
                <input type="radio" value={"Male"} name="gender" required onChange={(e) => setGender(e.target.value)} />
              </div>
              <div>
                <label>Female</label>
                <input type="radio" value={"Female"} name="gender" required onChange={(e) => setGender(e.target.value)} />
              </div>
              <div>
                <label>Non infi</label>
                <input type="radio" value={"non-infi"} name="gender" required onChange={(e) => setGender(e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1>--Select-</h1>
            <select value={qty} onChange={(e) => setQty(+e.target.value)}>
              {options.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h1>--Checkbox--</h1>
            <div>
              {combobox.map((item) => (
                <div key={item.id}>
                  <input type="checkbox" name={"combobox"} value={item} onChange={() => handleChangeCombobox(item.id)} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="btn btn-primary mx-auto" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SubmitForm;
