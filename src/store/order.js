export default {
    namespaced:true,//命名空间
    state: {
        //订单信息
        orderList:[
        // 订单完整性，不可修改
            // {    
            //     orderId:"1536423764527635472",//订单固定id
            //     address:{  //地址

            //     },
            //     goodsList:[ //商品列表

            //     ],
            //     dateTime:new Date(),//订单时间
            //     checkList:{
                    // num:"",//勾选的商品数量
                    // total:""//勾选的商品总价格
            //},
            // },
        ],
       
    },
    getters: {

    },
    mutations: {
        add(state,obj){
            state.orderList.unshift(obj); //在第一行插入方便看最新订单
        }
    },
    actions: {
        
    }
}