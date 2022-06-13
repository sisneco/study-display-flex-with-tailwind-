<template>
  <link
    rel="stylesheet"
    href="https://unpkg.com/ress@4.0.0/dist/ress.min.css"
  />
  <div id="header" v-width>
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
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
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
</style>
