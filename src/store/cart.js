import Vue from "vue";
export default {
  namespaced:true,//命名空间
  state: {
    //勾选的商品数量和价格,传递给确认订单页面
    checkGoods:{
        // num:"",//勾选的商品数量
        // total:""//勾选的商品总价格
    },
    shoppingCart: []
    // shoppingCart结构
    /* 
    shoppingCart = {
      id: "", // 购物车id
      productID: "", // 商品id      product_id
      productName: "", // 商品名称  product_name
      productImg: "", // 商品图片   product_picture
      price: "", // 商品价格        product_price
      num: "", // 商品数量          product_num
      maxNum: "", // 商品限购数量   product_sales
      isSelect: true // 是否勾选,默认勾选
    } */
  },
  getters: {
    getShoppingCart (state) {
      // 获取购物车状态
      return state.shoppingCart;
    },
    getNum (state) {
        return state.shoppingCart.reduce((total,item)=>total+item.product_num,0)//购物车商品总数量到详情页
    },
    // getIsAllCheck (state) {
    //   // 判断是否全选
    //   let isAllCheck = true;
    //   for (let i = 0; i < state.shoppingCart.length; i++) {
    //     const temp = state.shoppingCart[i];
    //     // 只要有一个商品没有勾选立即return false;
    //     if (!temp.check) {
    //       isAllCheck = false;
    //       return isAllCheck;
    //     }
    //   }
    //   return isAllCheck;
    // },
    // getCheckGoods (state) {
    //   // 获取勾选的商品信息
    //   // 用于确认订单页面
    //   let checkGoods = [];
    //   for (let i = 0; i < state.shoppingCart.length; i++) {
    //     const temp = state.shoppingCart[i];
    //     if (temp.check) {
    //       checkGoods.push(temp);
    //     }
    //   }
    //   return checkGoods;
    // },
    // getCheckNum (state) {
    //   // 获取购物车勾选的商品数量
    //   let totalNum = 0;
    //   for (let i = 0; i < state.shoppingCart.length; i++) {
    //     const temp = state.shoppingCart[i];
    //     if (temp.check) {
    //       totalNum += temp.product_num;
    //     }
    //   }
    //   return totalNum;
    // },
    // getTotalPrice (state) {
    //   // 购物车勾选的商品总价格
    //   let totalPrice = 0;
    //   for (let i = 0; i < state.shoppingCart.length; i++) {
    //     const temp = state.shoppingCart[i];
    //     if (temp.check) {
    //       totalPrice += temp.product_price * temp.product_num;
    //     }
    //   }
    //   return totalPrice;
    // }
  },
  mutations: {
    addShoppingCart(state,obj){
        let index = state.shoppingCart.findIndex(val=>val.product_id == obj.product_id);
        if(index == "-1") //-1表示不存在
        {
            obj.isSelect = true; //默认选中
            Vue.set(obj,"product_num",1); // 让新增的属性有数据绑定,一添加数据就可以显示出来
            state.shoppingCart.push(obj);
            Vue.prototype.notifySucceed("添加购物车成功");
        }else{
            state.shoppingCart[index].product_num += 1;
            let maxnum = state.shoppingCart[index].product_sales;
            if(state.shoppingCart[index].product_num == maxnum){
              Vue.prototype.notifyError("已达到限购数量"+maxnum);
            } 
        }
    },
    
    // unshiftShoppingCart (state, data) {
    //   // 添加购物车
    //   state.shoppingCart.unshift(data);
    // },
    // updateShoppingCart (state, payload) {
    //   // 更新购物车
    //   // 可更新商品数量和是否勾选
    //   // 用于购物车点击勾选及加减商品数量
    //   if (payload.prop == "num") {
    //     // 判断效果的商品数量是否大于限购数量或小于1
    //     if (state.shoppingCart[payload.key].product_sales < payload.val) {
    //       return;
    //     }
    //     if (payload.val < 1) {
    //       return;
    //     }
    //   }
    //   // 根据商品在购物车的数组的索引和属性更改
    //   state.shoppingCart[payload.key][payload.prop] = payload.val;
    // },
    // addShoppingCartNum (state, productID) {
    //   // 增加购物车商品数量
    //   for (let i = 0; i < state.shoppingCart.length; i++) {
    //     const temp = state.shoppingCart[i];
    //     if (temp.product_id == productID) {
    //       if (temp.product_num < temp.product_sales) {
    //         temp.product_num++;
    //       }
    //     }
    //   }
    // },
    // deleteShoppingCart (state, id) {
    //   // 根据购物车product_id删除购物车商品
    //   for (let i = 0; i < state.shoppingCart.length; i++) {
    //     const temp = state.shoppingCart[i];
    //     if (temp.product_id == id) {
    //       state.shoppingCart.splice(i, 1);
    //     }
    //   }
    // },
    // checkAll (state, data) {
    //   // 点击全选按钮，更改每个商品的勾选状态
    //   for (let i = 0; i < state.shoppingCart.length; i++) {
    //     state.shoppingCart[i].check = data;
    //   }
    // }
    //获取最终勾选的商品信息
    editShoppingCart(state,obj){
        Object.assign(state.shoppingCart,obj);
    },
    //获取勾选的商品数量和价格
    addCheckGoods(state,obj){
      state.checkGoods = {...state.checkGoods,...obj}
    },
    //清空购物车
    empytCart(state){
        state.shoppingCart = [];
    },
    //清空勾选的商品数量和价格
    empytGoods(state){
      state.checkGoods = {};
    }
  },
  actions: {

  }
}