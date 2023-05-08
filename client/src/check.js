import React, { useState } from "react";
import axios from "axios";

export default function Check() {
  const [inputs, setInputs] = useState({
    cusname: "",
    phone: "",
    address: "",
    naam: "",
  });

  const [disable, setDisable] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  function handleClick(event) {
    event.preventDefault();
    // console.log(inputs)
    // setInputs("")
    const newOrder = {
      name: inputs.cusname,
      phone: inputs.phone,
      address: inputs.address,
      naam: inputs.naam,
    };

    axios.post("http://localhost:9010/create", newOrder);

    setDisable(true);
  }

  return (
    <>
      <div>
        <form style={{ padding: "2px" }}>
          {/* <div class="form-group" style={{padding:"2px"}}>
            <label for="exampleInputEmail1">Name</label>
            <input
              onChange={handleChange}
              name="cusname"
              type="text"
              value={inputs.cusname}
              class="form-control"
              aria-describedby="emailHelp"
              placeholder=" Enter Your Name"
            />
          </div> */}
          <div class="form-group" style={{ padding: "2px" }}>
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input
              onChange={handleChange}
              name="phone"
              type="number"
              value={inputs.phone}
              class="form-control"
              placeholder="Mobile No "
            />
          </div>
          <div class="form-group" style={{ padding: "2px" }}>
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input
              onChange={handleChange}
              name="address"
              type="text"
              value={inputs.address}
              class="form-control"
              placeholder="Address "
            />
          </div>
          <div class="form-group" style={{ padding: "2px" }}>
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input
              onChange={handleChange}
              name="naam"
              type="text"
              value={inputs.naam}
              class="form-control"
              placeholder="Enter Your Name "
            />
          </div>
          <br />
          <br />
          <button
            style={{
              background: "red", width:"90px"
            }}
            disabled={disable}
            onClick={handleClick}
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
