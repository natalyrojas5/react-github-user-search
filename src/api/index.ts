const baseUrl = import.meta.env.VITE_API;

const apiService = ({ endpoint, data, method = "GET" }: any) => {
  const url = `${baseUrl}${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export default apiService;
