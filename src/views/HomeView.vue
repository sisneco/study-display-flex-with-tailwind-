<template>
  <Header />
  <div id="top-container">
    <section>
      <h1>Do U Like Game Music?</h1>
      <p>突然ですが,僕はゲームBGMが大好きです.</p>
      <p>激しいドラムや歪んだギターサウンド..</p>
      <p>民族的な楽器の音やメロディ...</p>
      <p>1つの作り方に固執せず,世界を創造するゲームBGM</p>
      <p>....カッコつけただけで,とどのつまり語りたいだけのサイトとなります.</p>
    </section>
    <div class="two-column">
      <section>
        <h2>Sound</h2>
        <p>僕が特に好きな音はシンセサイザーの電子音です.</p>
        <p>電子音は打楽器にも,ベースにも,メロディにも,コードにもなります.</p>
        <p>
          同じ波形でも<a
            href="https://ja.wikipedia.org/wiki/ADSR"
            target="brank"
            >ADSRエンベロープ</a
          >をコントロールすることで,
        </p>
        <p>パターンが何通りにもなります.そういった箇所を気にして聴くと,</p>
        <p>新たな楽しさが生まれてくるかもしれません.</p>
      </section>
      <section>
        <h2>Melody</h2>
        <p>速い連符と速いテンポで失踪するメロディ.</p>
        <p>技術の発達から,生音やコーラスによる壮大なメロディ.</p>
        <p>弦楽器とエレキギターの異色コンビによるメタル調のメロディ.</p>
        <p>同じ音の楽器でも,メロディによって印象は様々です.</p>
        <p>長調・短調といった難しい要素もありますが,耳を傾ける部分.</p>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: { Header },
};
</script>

<style>
#top-container section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1vh;
  margin-top: 3vh;
}

#top-container section:not(:last-child) {
  margin-bottom: 5vh;
}

#top-container h1 {
  font-size: 5rem;
  margin: 0;
}

#top-container p {
  font-size: 1.5rem;
}

#top-container h2 {
  font-size: 2.5rem;
}

.two-column {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10vh;
}

.two-column section {
  padding: 2vh;
  margin: 0 4vh;
  border: #aaa 1px solid;
}

.responsive .two-column {
  flex-direction: column;
  align-items: center;
}

.responsive .two-column section {
  width: 90%;
}

.responsive .two-column:first-of-type {
  margin-top: 0;
}
</style>
