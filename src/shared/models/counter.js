export default{
  state: {
    data: 0,
  },
  reducers: {
    increments: (state, payload) => ({data: state.data + payload}),
  },
  effects: () => ({}),
};