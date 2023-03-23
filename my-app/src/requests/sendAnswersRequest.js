const url = "http://localhost:8080/story";
//
export const sendAnswers = (body) => {
  console.log(body, typeof body);
  return (dispatch) => {
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      dataType: "json",
      mode: "no-cors",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => dispatch(json))
      .catch((err) => console.log(err));
  };
};
