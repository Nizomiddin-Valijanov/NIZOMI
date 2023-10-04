import { Button, Input } from "@mui/material";
import React, { useReducer, useState } from "react";

export default function ReducerPage() {
  let [value, setValue] = useState({
    name: "",
    num: "",
  });
  let reducer = (state, action) => {
    let { type, payload } = action;

    switch (type) {
      case "plus":
        state = state.map((o) => {
          return o.id === payload ? { ...o, num: o.num + 1 } : o;
        });
        return state;
      case "minus":
        return state.map((m) => {
          return m.id === payload ? { ...m, num: m.num - 1 } : m;
        });
      case "submit":
        payload.preventDefault();
        if (!value.id) {
          state = [...state, { ...value, id: Date.now() }];
        } else {
          state = state.map((p) => (p.id === value.id ? value : p));
        }

      case "delete":
        state = state.filter((c) => c.id !== payload);
      default:
        return state;
    }
  };
  let array = [
    {
      num: 1,
      name: "hp",
    },

    {
      num: 1,
      name: "asus",
    },

    {
      num: 1,
      name: "acer",
    },

    {
      num: 1,
      name: "macbook",
    },

    {
      num: 1,
      name: "lenovo",
    },

    {
      num: 1,
      name: "dell",
    },

    {
      num: 1,
      name: "ROG",
    },
  ];
  array = array.map((item, index) => {
    return { ...item, id: index };
  });
  console.log(array);
  let [count, dispatch] = useReducer(reducer, array);

  return (
    <div>
      {count.map((item, index) => {
        return (
          <div key={index} style={{ ...style }}>
            <>
              <Button
                variant="contained"
                onClick={() => dispatch({ type: "minus", payload: item.id })}
              >
                -
              </Button>

              <h1>{item.num}</h1>

              <Button
                variant="contained"
                onClick={() => dispatch({ type: "plus", payload: item.id })}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
              >
                +
              </Button>
            </>
            <h1>{item.name}</h1>
            <button
              onClick={(e) => dispatch({ type: "delete", payload: item.id })}
            >
              delete
            </button>
          </div>
        );
      })}
{/* salom olam */}
      <form onSubmit={(e) => dispatch({ type: "submit", payload: e })}>
        <Input
          type="text"
          placeholder="Enter name"
          value={value.name}
          onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <Input
          type="number"
          placeholder="enter count"
          value={value.soni}
          onChange={(e) => setValue({ ...value, num: e.target.value })}
        />

        <Button type="submit" variant="outlined">
          send
        </Button>
      </form>
    </div>
  );
}

let style = {
  border: "2px solid red",
  borderRadius: "20px",
  margin: "15px",
  padding: "15px",
  display: "inline-flex",
  gap: "20px",
};
