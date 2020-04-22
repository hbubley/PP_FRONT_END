import axios from "axios";

const api = axios.create({
  baseURL: "https://patient0pattern.herokuapp.com/question",
});

export const getAllQuestions = async () => {
  const resp = await api.get("/");
  console.log("getAllQuestions -> resp", resp)
  return resp.data;
};
