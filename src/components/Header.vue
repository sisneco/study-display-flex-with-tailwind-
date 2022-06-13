<template>
  <div id="header">
    <h1>GameMusic</h1>
    <nav>
      <ul>
        <li><a href="">ニンテンドー</a></li>
        <li><a href="">カプコン</a></li>
        <li><a href="">SEGA</a></li>
        <li><a href="">インソムニアック</a></li>
      </ul>
    </nav>
  </div>
  <div
    id="res-header"
    @click="isActive = !isActive"
    :class="{ active: isActive }"
  >
    <span></span><span></span><span></span>
  </div>
  <spmenu v-if="isActive" />
</template>

<script>
import spmenu from "@/components/SpMenu.vue";

export default {
  name: "HeaderComponent",
  components: {
    spmenu,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style>
/* header */
#header {
  display: flex;
  justify-content: left;
  align-items: center;

  border-bottom: 1px solid #aaa;
}

#header nav {
  display: flex;
}

#header ul {
  display: flex;
  justify-content: space-between;
}

#header li {
  list-style: none;
  border-left: 1px solid #aaa;
}

#header li:last-child {
  border-right: 1px solid #aaa;
}

#header a {
  display: block;
  text-decoration: none;
  padding: 0 1.3vw;
  color: black;
  font-size: 15px;
  font-weight: bold;
}

#header h1 {
  margin-right: 1em;
}

#header li a {
  /*線の基点とするためrelativeを指定*/
  position: relative;
}
#header li a:hover {
  /*線の基点とするためrelativeを指定*/
  position: relative;
  color: #aaa;
}

#header li a::after {
  content: "";
  /*絶対配置で線の位置を決める*/
  position: absolute;
  bottom: 0;
  left: 10%;
  /*線の形状*/
  width: 80%;
  height: 1px;
  /*アニメーションの指定*/
  transition: all 0.5s;
  transform: scale(0, 1); /*X方向0、Y方向1*/
  transform-origin: center top; /*上部中央基点*/
}

/*現在地とhoverの設定*/
#header li a:hover::after {
  background: aqua;
  transform: scale(1, 1); /*X方向にスケール拡大*/
}

/* responsive header */
.responsive #header {
  display: none;
}

#res-header {
  z-index: 2;
  display: none;
  position: relative; /*ボタン内側の基点となるためrelativeを指定*/
  background: #bbb;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-left: 2vw;
}

#res-header span {
  display: inline-block;
  transition: all 0.4s; /*アニメーションの設定*/
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
  background: #fff;
  width: 45%;
}

#res-header span:nth-of-type(1) {
  top: 15px;
}

#res-header span:nth-of-type(2) {
  top: 23px;
}

#res-header span:nth-of-type(3) {
  top: 31px;
}

.responsive #res-header {
  display: inherit;
}

/*activeクラスが付与されると線が回転して×に*/

#res-header.active span:nth-of-type(1) {
  top: 18px;
  left: 18px;
  transform: translateY(6px) rotate(-45deg);
  width: 30%;
}

#res-header.active span:nth-of-type(2) {
  opacity: 0; /*真ん中の線は透過*/
}

#res-header.active span:nth-of-type(3) {
  top: 30px;
  left: 18px;
  transform: translateY(-6px) rotate(45deg);
  width: 30%;
}
</style>
