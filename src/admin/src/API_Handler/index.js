import axios from "axios";

export const serverUrl = "http://localhost:80/api";

export const getApihandler = async (endPoint) => {
  try {
    const getres = await axios.get(serverUrl + endPoint);
    return getres.data;
  } catch (error) {
    return { error };
  }
};

export const getbyidApihandler = async (endPoint) => {
  try {
    const getres = await axios.get(serverUrl + endPoint);
    // console.log("getresbyid=>", getres);
    return getres.data;
  } catch (error) {
    return { error };
  }
};

export const postLoginApihandler = async (endPoint, value) => {
  try {
    const postRes = await axios.post(serverUrl + endPoint, value);
    // console.log("apipost=>", postRes);
    return postRes.data;
  } catch (error) {
    return { error };
  }
};

export const postApihandler = async (endPoint, value) => {
  // console.log("postvalue=>", endPoint);
  // console.log("postvalue=>", value);
  try {
    const postRes = await axios.post(serverUrl + endPoint, value);
    // console.log("apipost=>", postRes);
    return postRes.data;
  } catch (error) {
    return { error };
  }
};

export const deleteApihandler = async (endPoint, id) => {
  try {
    const deleteRes = await axios.delete(serverUrl + endPoint + id);
    return deleteRes.data;
  } catch (error) {
    return { error };
  }
};

export const putApihandler = async (endPoint, value) => {
  try {
    const res = await axios.put(serverUrl + endPoint, value);
    return res.data;
  } catch (error) {
    return { error };
  }
};
