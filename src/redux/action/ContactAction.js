let handlePlus = (param) => {
  return {
    type: "plus",
    payload: param,
  };
};

let handleMinus = (param) => {
  return {
    type: "minus",
    payload: param,
  };
};

export { handlePlus, handleMinus };
