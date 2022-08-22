const base_url = "http://127.0.0.1:8000/";

export const stkpush = () => {
  fetch(base_url + "mpesa/stk/", {
    method: "GET",
  }).then((res) => res.json());
};
