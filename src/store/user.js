export default {
  namespaced:true,//命名空间
  state: {
    userlist: {
      username: null,
      password: null
    }, // 登录的用户
    showLogin: false // 用于控制是否显示登录组件
  },
  getters: {
  
  },
  mutations: {
    setUser (state, data) {
      state.userlist = data;
    },
    setShowLogin (state, data) {
      state.showLogin = data;
    }
  },
  actions: {
    
  }
}