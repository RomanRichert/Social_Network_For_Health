const url = "http://localhost:8080/story";
//
export const sendAnswers = (body) => {
  console.log(body);
  return (dispatch) => {
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
      dataType: "json",
    })
      .then((res) => res.json())
      .then((json) => dispatch(json));
  };
};
