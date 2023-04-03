import { getAllAnswersAction } from "../store/actions/getAllAnswersAction";

export const sendAnswers = (url, body) => {
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
      .then((json) => dispatch(getAllAnswersAction(json)))
      .catch((err) => console.log(err));
  };
};
