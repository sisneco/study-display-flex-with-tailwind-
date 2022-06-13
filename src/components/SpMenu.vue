<template>
  <div class="overlay"></div>
  <nav id="content">
    <ul>
      <h1>メニュー</h1>
      <li><a href="">ニンテンドー</a></li>
      <li><a href="">カプコン</a></li>
      <li><a href="">SEGA</a></li>
      <li><a href="">インソムニアック</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style>
.overlay {
  background: #ccc;
  position: fixed;
  top: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

#content h1 {
  font-size: 7rem;
}

#content ul {
  z-index: 2;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 3vh;
}

#content li {
  list-style: none;
  border-bottom: 2px solid #fff;
}

#content a {
  font-size: 6rem;
  font-weight: 700;
  text-decoration: none;
  color: white;
}
</style>
