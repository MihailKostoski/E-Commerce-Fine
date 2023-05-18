import axios from "axios";
const BASE_URL = "http://localhost:5000/fine/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accsToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
console.log(TOKEN, "TKE");
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

console.log(userRequest, "usr");
