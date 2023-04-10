const index = (data) => {
  return {
    type: "Balance",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export default index;
