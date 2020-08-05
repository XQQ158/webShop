export default {
    namespaced:true,//命名空间
    state: {
        //收藏信息
        collectList:[]
    },
    getters: {
    
    },
    mutations: {
        // 添加收藏
        unshiftCollect (state, data) {
            state.collectList.unshift(data);
        },
        //删除收藏商品
        deleteCollect (state, id) {
            for (let i = 0; i < state.collectList.length; i++) {
              const temp = state.collectList[i];
              if (temp.product_id == id) {
                state.collectList.splice(i, 1);
              }
            }
          },
    },
    actions: {
      
    }
  }