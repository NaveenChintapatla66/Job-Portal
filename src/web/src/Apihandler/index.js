import axios from "axios";

// export const serverUrl = "http://16.171.151.173/api";
export const serverUrl = "http://localhost:80/api";
// export const serverUrl = "http://192.168.1.4:80/api";

export const imageUrl = "https://raadharani.s3.ap-south-1.amazonaws.com/";

export const getApihandler = async (endPoint) => {
  try {
    const getres = await axios.get(serverUrl + endPoint);
    return getres.data;
  } catch (error) {
    return { message: error.message, status: 400 };
  }
};
export const postApihandler = async (endPoint, value) => {
  try {
    const postRes = await axios.post(serverUrl + endPoint, value);
    console.log("apisubmitted=>", value);
    console.log("apipost=>", postRes);
    return postRes.data;
  } catch (error) {
    // console.log("error is - ", error.response);
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

export const postApihandlerAccessToken = async (endPoint, value) => {
  let accessToken = localStorage.getItem("accessToken");
  try {
    const res = await axios.post(serverUrl + endPoint, value, {
      headers: {
        "x-access-token": accessToken,
      },
    });
    return res.data;
  } catch (error) {
    return { error };
  }
};

export const deleteApiihandler = async (endPoint, id) => {
  let accessToken = localStorage.getItem("accessToken");
  try {
    const deleteRes = await axios.delete(serverUrl + endPoint + id, {
      headers: {
        "x-access-token": accessToken,
      },
    });
    // console.log("apidelete=>", deleteRes);
    return deleteRes.data;
  } catch (error) {
    return { message: error.message, status: 403 };
  }
};

export const deleteParamsApiihandler = async (endPoint) => {
  console.log("endPoint==>", endPoint);
  let accessToken = localStorage.getItem("accessToken");
  try {
    const deleteRes = await axios.delete(
      serverUrl + endPoint
      //   , {
      //   headers: {
      //     "x-access-token": accessToken,
      //   },
      // }
    );
    // console.log("apidelete=>", deleteRes);
    return deleteRes.data;
  } catch (error) {
    return { error };
  }
};
