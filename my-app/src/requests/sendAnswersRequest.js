export const sendAnswers = (url, body) => {
  console.log(body, typeof body);
  return (dispatch) => {
    fetch(url, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      dataType: "json",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => dispatch(json))
      .catch((err) => console.log(err));
  };
};
