<!-- 我的购物车页面组件-->
<template>
  <div class="shoppingCart">
    <!-- 购物车头部 -->
    <div class="cart-header">
      <div class="cart-header-content">
        <p>
          <i class="el-icon-shopping-cart-full" style="color:#ff6700; font-weight: 600;"></i>
          我的购物车
        </p>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </div>
    </div>
    <!-- 购物车头部END -->

    <!-- 购物车主要内容区 -->
    <div class="content" v-if="lists.length>0">
      <ul>
        <!-- 购物车表头 -->
        <li class="header">
          <div class="pro-check">
            <el-checkbox @change="checkedAll" :value="checked">全选</el-checkbox>  
          </div>
          <div class="pro-img"></div>
          <div class="pro-name">商品名称</div>
          <div class="pro-price">单价</div>
          <div class="pro-num">数量</div>
          <div class="pro-total">小计</div>
          <div class="pro-action">操作</div>
        </li>
        <!-- 购物车表头END -->

        <!-- 购物车列表 -->
        <li class="product-list" v-for="(item,index) in lists" :key="item.id">
          <div class="pro-check">
            <el-checkbox :value="item.isSelect" @change="inputselect(index)"></el-checkbox>
          </div>
          <div class="pro-img">
            <router-link :to="{ path: '/details', query: {productID:item.product_id} }">
              <img :src="item.product_picture" />
            </router-link>
          </div>
          <div class="pro-name">
            <router-link
              :to="{ path: '/details', query: {productID:item.product_id} }"
            >{{item.product_name}}</router-link>
          </div>
          <div class="pro-price">{{item.product_price}}元</div>
          <div class="pro-num">
            <el-input-number
              size="small"
              :value="item.product_num"
              @change="handleChange($event,index)"
              :min="1"
              :max="item.product_sales"
            ></el-input-number>
          </div>
          <div class="pro-total pro-total-in">{{item.product_price*item.product_num}}元</div>
          <div class="pro-action">
            <el-popover placement="right">
              <p>确定删除吗？</p>
              <div style="text-align: right; margin: 10px 0 0">
                <el-button
                  type="primary"
                  size="mini"
                  @click="del(index)"
                >确定</el-button>
              </div>
              <i class="el-icon-error" slot="reference" style="font-size: 18px;"></i>
            </el-popover>
          </div>
        </li>
        <!-- 购物车列表END -->
      </ul>
      <div style="height:20px;background-color: #f5f5f5"></div>
      <!-- 购物车底部导航条 -->
      <div class="cart-bar">
        <div class="cart-bar-left">
          <span>
            <router-link to="/goods">继续购物</router-link>
          </span>
          <span class="sep">|</span>
          <span class="cart-total">
            共
            <span class="cart-total-num">{{getNum}}</span> 件商品，已选择
            <span class="cart-total-num">{{getCheckNum}}</span> 件
          </span>
        </div>
        <div class="cart-bar-right">
          <span>
            <span class="total-price-title">合计：</span>
            <span class="total-price">{{total}}元</span>
          </span>
          <router-link :to="getCheckNum > 0 ? '/confirmOrder' : ''">
            <div :class="getCheckNum > 0 ? 'btn-primary' : 'btn-primary-disabled'">去结算</div>
          </router-link>
        </div>
      </div>
      <!-- 购物车底部导航条END -->
    </div>
    <!-- 购物车主要内容区END -->

    <!-- 购物车为空的时候显示的内容 -->
    <div v-else class="cart-empty">
      <div class="empty">
        <h2>您的购物车还是空的！</h2>
        <p>快去购物吧！</p>
      </div>
    </div>
    <!-- 购物车为空的时候显示的内容END -->
  </div>
</template>
<script>

  export default {
    data() {
      return {
        checked:true,
        getNum:0, //商品总数量
        getCheckNum:0, //勾选的商品总数量
        total:0, //商品总价格
        lists:[]
      };
    },
    methods:{
          handleChange(num,index){
              this.lists[index].product_num = num;
          },
          del(index){
              this.lists[index].product_num = 0;
              this.lists.splice(index,1)
          },
          //商品总数量
          productNum(){
              this.getNum = this.lists.reduce((total,item)=>{
                    return total + parseInt(item.product_num); 
              },0) //总价格默认值0
          },
          //勾选商品总数量
          productCheckNum(){
              this.getCheckNum = this.lists.reduce((total,item)=>{
                  // 判断选项选中数量
                  if(!item.isSelect) return total;
                  return total + parseInt(item.product_num); 
              },0) //总价格默认值0
          },
          // 总价格计算
          sum(){
              // total 累加值
              this.total = this.lists.reduce((total,item)=>{
                  // 判断选项选中计算价格
                  if(!item.isSelect) return total; //返回默认价格
                  return total + parseInt(item.product_price) * parseInt(item.product_num); //总价格
              },0) //总价格默认值0
          },
          checkedAll(){
              this.lists.forEach((item)=>{
                  item.isSelect = !this.checked;
              })
              this.checked = !this.checked;
          },
          checkboxclick(){
              // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
              this.checked = this.lists.every((item)=>{
                  return item.isSelect;
              })
          },
          inputselect(index){
              // 修改商品列表
              this.lists[index].isSelect = !this.lists[index].isSelect;
              this.checkboxclick();
              this.sum();
              this.productNum();
              this.productCheckNum();
          },
      },
        created(){
            this.lists = this.$store.state.cart.shoppingCart;
            this.checkboxclick();
            this.sum();
            this.productNum();
            this.productCheckNum();
        },
        beforeUpdate(){
            this.sum();
            this.productNum();
            this.productCheckNum();
        },
        beforeDestroy(){
            let goods = {num: this.getCheckNum,total: this.total};
            this.$store.commit("cart/addCheckGoods",goods);
            this.$store.commit("cart/editShoppingCart",this.lists);
        },

};
</script>
<style scoped>
.shoppingCart {
  background-color: #f5f5f5;
  padding-bottom: 20px;
}
/* 购物车头部CSS */
.shoppingCart .cart-header {
  height: 64px;
  border-bottom: 2px solid #ff6700;
  background-color: #fff;
  margin-bottom: 20px;
}
.shoppingCart .cart-header .cart-header-content {
  width: 1225px;
  margin: 0 auto;
}
.shoppingCart .cart-header p {
  font-size: 28px;
  line-height: 58px;
  float: left;
  font-weight: normal;
  color: #424242;
}
.shoppingCart .cart-header span {
  color: #757575;
  font-size: 12px;
  float: left;
  height: 20px;
  line-height: 20px;
  margin-top: 30px;
  margin-left: 15px;
}
/* 购物车头部CSS END */

/* 购物车主要内容区CSS */
.shoppingCart .content {
  width: 1225px;
  margin: 0 auto;
  background-color: #fff;
}

.shoppingCart .content ul {
  background-color: #fff;
  color: #424242;
  line-height: 85px;
}
/* 购物车表头及CSS */
.shoppingCart .content ul .header {
  height: 85px;
  padding-right: 26px;
  color: #424242;
}
.shoppingCart .content ul .product-list {
  height: 85px;
  padding: 15px 26px 15px 0;
  border-top: 1px solid #e0e0e0;
}
.shoppingCart .content ul .pro-check {
  float: left;
  height: 85px;
  width: 110px;
}
.shoppingCart .content ul .pro-check .el-checkbox {
  font-size: 16px;
  margin-left: 24px;
}
.shoppingCart .content ul .pro-img {
  float: left;
  height: 85px;
  width: 120px;
}
.shoppingCart .content ul .pro-img img {
  height: 80px;
  width: 80px;
}
.shoppingCart .content ul .pro-name {
  float: left;
  width: 380px;
}
.shoppingCart .content ul .pro-name a {
  color: #424242;
}
.shoppingCart .content ul .pro-name a:hover {
  color: #ff6700;
}
.shoppingCart .content ul .pro-price {
  float: left;
  width: 140px;
  padding-right: 18px;
  text-align: center;
}
.shoppingCart .content ul .pro-num {
  float: left;
  width: 150px;
  text-align: center;
}
.shoppingCart .content ul .pro-total {
  float: left;
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.shoppingCart .content ul .pro-total-in {
  color: #ff6700;
}
.shoppingCart .content ul .pro-action {
  float: left;
  width: 80px;
  text-align: center;
}
.shoppingCart .content ul .pro-action i:hover {
  color: #ff6700;
}
/* 购物车表头及CSS END */

/* 购物车底部导航条CSS */
.shoppingCart .cart-bar {
  width: 1225px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
}
.shoppingCart .cart-bar .cart-bar-left {
  float: left;
}
.shoppingCart .cart-bar .cart-bar-left a {
  line-height: 50px;
  margin-left: 32px;
  color: #757575;
}
.shoppingCart .cart-bar .cart-bar-left a:hover {
  color: #ff6700;
}
.shoppingCart .cart-bar .cart-bar-left .sep {
  color: #eee;
  margin: 0 20px;
}
.shoppingCart .cart-bar .cart-bar-left .cart-total {
  color: #757575;
}
.shoppingCart .cart-bar .cart-bar-left .cart-total-num {
  color: #ff6700;
}
.shoppingCart .cart-bar .cart-bar-right {
  float: right;
}
.shoppingCart .cart-bar .cart-bar-right .total-price-title {
  color: #ff6700;
  font-size: 14px;
}
.shoppingCart .cart-bar .cart-bar-right .total-price {
  color: #ff6700;
  font-size: 30px;
}
.shoppingCart .cart-bar .cart-bar-right .btn-primary {
  float: right;
  width: 200px;
  text-align: center;
  font-size: 18px;
  margin-left: 50px;
  background: #ff6700;
  color: #fff;
}
.shoppingCart .cart-bar .cart-bar-right .btn-primary-disabled {
  float: right;
  width: 200px;
  text-align: center;
  font-size: 18px;
  margin-left: 50px;
  background: #e0e0e0;
  color: #b0b0b0;
}
.shoppingCart .cart-bar .cart-bar-right .btn-primary:hover {
  background-color: #f25807;
}
/* 购物车底部导航条CSS END */
/* 购物车主要内容区CSS END */

/* 购物车为空的时候显示的内容CSS */
.shoppingCart .cart-empty {
  width: 1225px;
  margin: 0 auto;
}
.shoppingCart .cart-empty .empty {
  height: 300px;
  padding: 0 0 130px 558px;
  margin: 65px 0 0;
  background: url(../assets/imgs/cart-empty.png) no-repeat 124px 0;
  color: #b0b0b0;
  overflow: hidden;
}
.shoppingCart .cart-empty .empty h2 {
  margin: 70px 0 15px;
  font-size: 36px;
}
.shoppingCart .cart-empty .empty p {
  margin: 0 0 20px;
  font-size: 20px;
}
/* 购物车为空的时候显示的内容CSS END */
</style>