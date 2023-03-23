import { domain } from "./domain";

export const sendData = (data, callback) => {
  fetch(`${domain}/video`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      callback(res);
    });
};
