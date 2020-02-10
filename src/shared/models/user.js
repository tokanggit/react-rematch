export default {
  state: {
    data: [],
  },
  reducers: {
    request: (state, payload) => payload,
    finish: (state, payload) => ({ ...state, ...payload }),
  },
  effects: () => ({
    async getUsers() {
      try {
        const result = await this.request({
          method: 'GET',
          url: 'https://jsonplaceholder.typicode.com/users',
        });
        await this.finish({ data: result.data });
      } catch (error) {
        console.log(error);
      }
    }
  })
};