const url = "http://localhost:8080/therapy/"
export const sendTherapies = (storyId, body) => {
    fetch(`${url}/${storyId}`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      dataType: "json",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.log(err));
};

