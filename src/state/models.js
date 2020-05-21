import axios from "axios";
const baseUrl = "https://api.github.com/users";
const repoUrl = `https://api.github.com/repos`;

export const user = {
  state: {
    data: null,
  },
  reducers: {
    loadData(state, responseData) {
      return {
        ...state,
        user: responseData,
      };
    },
    loadRepo(state, responseData) {
      return {
        ...state,
        repo: responseData,
      };
    },
  },
  effects: (dispatch) => ({
    async loadUserData(name) {
      try {
        const response = await axios.get(`${baseUrl}/${name}`);
        dispatch.user.loadData(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async loadUserRepo(repoIdArray) {
      try {
        const response = await axios.get(
          `${repoUrl}/${repoIdArray[0]}/${repoIdArray[1]}`
        );
        dispatch.user.loadRepo(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  }),
};
