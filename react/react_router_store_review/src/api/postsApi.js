import api from './axios';
// URL, method, data

// 1. 리스트 GET
// 2. 개별 GET
// 3. POST

//현재 이 상태도 완전히 좋은 것은 아님 postId같은 부분들도 변수로 관리하는게 좋을 수 있음
//위에 endPoint만 보고도 판단이 가능하도록 구성하는게 좋을 수 있음 (찾아보기)
// const endPoint = {
//   posts : {
//     get : '',
//     getById : (postId) => `/${postId}`
//   }
// }
const postApi = {
  getPosts: async () => {
    const response = await api.get('/');
    return response.data;
  },

  getPostById : async(postId) => {
    const response = await api.get(`/${postId}`)
    return response.data;
  },

  createPosts: async (formData) => {
    const response = await api.post("",formData);
    return response.data;
  },


  deletePost: async (postId) => {
    const response = await api.delete('/${postId');
    return response.data;
  },
};

export default postApi;
