import axios from "axios";
const baseUrl = "https://api.github.com/users";

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
  },
  effects: (dispatch) => ({
    async loadUserData(name) {
      try {
        const response = await axios.get(`${baseUrl}/${name}`);
        dispatch.user.loadData(response.data);
      } catch (error) {
       console.log(error)
      }
    },
  }),
};
