import { Button } from "@mui/material";
import React from "react";
import { handlePlus } from "../redux/action/ContactAction";
import { useDispatch, useSelector } from "react-redux";

export default function Contact() {
  let state = useSelector((state) => state.ContactReducer);
  let dispatch = useDispatch();
  return (
    <div className="redux_main">
      <div className="plus_minus_card">
        <Button
          variant="contained"
          className="plusBtn"
          onClick={() => dispatch(handlePlus())}
        >
          Plus
        </Button>
        <h3>1</h3>
        <Button variant="contained" className="MinusBtn">
          Minus
        </Button>
      </div>
    </div>
  );
}
