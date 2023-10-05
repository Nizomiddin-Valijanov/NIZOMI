import { Button } from "@mui/material";
import React from "react";
import { handlePlus, handleMinus } from "../redux/action/ContactAction";
import { useDispatch, useSelector } from "react-redux";

export default function Contact() {
  let state = useSelector((state) => state.ContactReducer);
  let dispatch = useDispatch();
  return (
    <div className="redux_main">
      {state.map((item, index) => {
        return (
          <div className="plus_minus_card" key={item.id}>
            <Button
              variant="contained"
              className="plusBtn"
              onClick={() => dispatch(handlePlus(item.id))}
            >
              Plus
            </Button>
            <h3>{item.count}</h3>
            <Button
              variant="contained"
              className="MinusBtn"
              onClick={() => {
                dispatch(handleMinus(item.id));
              }}
            >
              Minus
            </Button>
          </div>
        );
      })}
    </div>
  );
}
