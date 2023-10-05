let data = [
  {
    id: 1,
    count: 1,
  },

  {
    id: 2,
    count: 1,
  },

  {
    id: 3,
    count: 1,
  },
];

const ContactReducer = (state = data, { type, payload }) => {
  switch (type) {
    case "plus":
      state = state.map((i) =>
        i.id === payload ? { ...i, count: i.count + 1 } : i
      );
      return state;
    case "minus":
      state = state.map((item) =>
        item.id === payload ? { ...item, count: item.count - 1 } : item
      );
    default:
      return state;
  }
};

export default ContactReducer;
