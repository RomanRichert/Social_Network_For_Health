import { getAllAnswersAction } from "../store/actions/getAllAnswersAction";
export const sendAnswers = (url, body, therapies, smileys) => {
  return (dispatch) => {
    fetch(url, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      dataType: "json",
      body: JSON.stringify(body),
	  therapyNames: JSON.stringify(therapies),
	  smileys: JSON.stringify(smileys)
    })
      .then((res) => res.json())
      .then((json) => dispatch(getAllAnswersAction(json)))
      .catch((err) => console.log(err));
  };
};
