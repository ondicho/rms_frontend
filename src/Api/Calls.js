const base_url = "http://127.0.0.1:8000/";
// const base_url="http://3.252.82.138:5000/";

export const stkpush = () => {
  return fetch(base_url + "mpesa/stk/", {
    method: "GET",
  }).then((res) => res.json());
};

export const login = (data) => {
  return fetch(base_url + "auth/api/token/", {
    method: "POST",
    body: data,
  }).then((res) => res.json());
};

export const authorize = (data) => {
  return fetch(base_url + "mpesa/authorize/", {
    method: "POST",
    body: data,
  }).then((res) => res.json());
};

export const userInfo = (id) => {
  return fetch(base_url + "users/user/"+id+"/", {
    method: "GET",
  }).then((res) => res.json());
};
