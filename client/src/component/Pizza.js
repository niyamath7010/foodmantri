import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./pizza.css";
import Check from "../check";
export default function Pizza({ pizzu }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVariant] = useState("small");

  const [checked,setChecked]=useState(false)
  // react bootstap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  useEffect(()=>{

  },[Check])

  return (
    <div className="m-5 shadow p-3 mb-5 bg-body rounded">
      <div onClick={handleShow}>
        <h1>{pizzu.name}</h1>
        <img
          src={pizzu.image}
          alt="no pic found"
          className="img-fluid"
          style={{ width: "205px", height: "200px" }}
        />
      </div>
      <div className="Flex-Container">
        <div className="w-100 m-1">
          <p style={{fontSize:"20px" , fontFamily:"fantasy"}}>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {pizzu.variants.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p style={{fontSize:"20px" , fontFamily:"fantasy"}}>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <br />
      <div className="Flex-Container">
        <div className="w-100">
          <h1 className="mt-1">
            Price : {pizzu.prices[0][varient] * quantity} Rs/-
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={()=>setChecked(!checked)}>Order Now</button>
        </div>
      </div>
      {
        checked ? <Check /> : ""
      }
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{pizzu.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizzu.image} className="img-fluid" style={{height:"400px",width:"400px", marginLeft:"20px"}} alt=""/>
          <p>{pizzu.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
