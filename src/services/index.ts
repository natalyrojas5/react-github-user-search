import apiService from "@/api";

export const getUser = async (username: string) => {
  const config: any = { endpoint: username };
  return await apiService(config);
};

export const appServices = {
  getUser,
};
