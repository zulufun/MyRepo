import createApiService from "../createApiServices";

const api = createApiService();

const thongke = (params: any) => {
  return api.makeAuthRequest({
    url: `/api/post/thongke/thongke2`,
    method: "GET",
    params: params,
  });
};

const thongketheothang = (params: any) => {
  return api.makeAuthRequest({
    url: `/api/post/thongke/thongketheothang`,
    method: "GET",
    params: params,
  });
};

const get = (bank_name: any) => {
  return api.makeRequest({
    url: `/api/bank_branches`,
    method: "GET",
    params: bank_name
  });
};



const getcount = () => {
  return api.makeAuthRequest({
    url: `/api/thongke`,
    method: "GET",
  });
};

const getscore = () => {
  return api.makeAuthRequest({
    url: `/api/thongke2`,
    method: "GET",
  });
};


const detail = (id: any) => {
  return api.makeAuthRequest({
    url: `/api/post/${id}`,
    method: "GET",
  });
};

const update = (id: any, data: any) => {
  return api.makeAuthRequest({
    url: `/api/post/${id}`,
    method: "PUT",
    data: data,
  });
};

const remove = (id: any) => {
  return api.makeAuthRequest({
    url: `/api/post/${id}`,
    method: "DELETE",
  });
};

export const postServices = {
  get,
  update,
  remove,
  detail,
  thongke,
  thongketheothang,
  getcount,
  getscore
};
