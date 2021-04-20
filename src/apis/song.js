import axios from './axios';

const getAll = () => {
  return axios.get('/song');
};

const get = (id) => {
  return axios.get(`/song/${id}`);
};

const create = (data) => {
  return axios.post('/song', data);
};

const update = (id, data) => {
  return axios.put(`/song/${id}`, data);
};

const remove = (id) => {
  return axios.delete(`/song/${id}`);
};

//   const removeAll = () => {
//     return axios.delete(`/tutorials`);
//   };

//   const findByTitle = title => {
//     return axios.get(`/tutorials?title=${title}`);
//   };

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
