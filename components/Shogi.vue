<template>
  <div>
    <div class="wrapper">
      <div class="com-komadai"></div>
      <div class="shogi-ban">
        <table>
          <tbody>
            <tr class="com-row">
              <td>香</td>
              <td>桂</td>
              <td>銀</td>
              <td>金</td>
              <td>王</td>
              <td>金</td>
              <td>銀</td>
              <td>桂</td>
              <td>香</td>
            </tr>
            <tr>
              <td></td>
              <td>飛</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>角</td>
              <td></td>
            </tr>
            <tr>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
            </tr>
            <tr>
              <td v-for="n in 9" :key="n"></td>
            </tr>
            <tr>
              <td v-for="n in 9" :key="n"></td>
            </tr>
            <tr>
              <td v-for="n in 9" :key="n"></td>
            </tr>
            <tr>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
              <td>歩</td>
            </tr>
            <tr>
              <td></td>
              <td>角</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>飛</td>
              <td></td>
            </tr>

            <tr class="player-row">
              <td>香</td>
              <td>桂</td>
              <td>銀</td>
              <td>金</td>
              <td>玉</td>
              <td>金</td>
              <td>銀</td>
              <td>桂</td>
              <td>香</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="player-komadai"></div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  text-align: center;
  margin: 0;
  padding: 20px 0;
}
.wrapper {
  display: flex;
  justify-content: center;
  min-width: 800px;
}
.player-komadai {
  display: flex;
  flex-direction: column-reverse;
}
table {
  margin: 0 15px;
  border: solid 2px black;
  border-collapse: collapse;
  background-image: url("../assets/mokume.jpeg");
  background-repeat: repeat;
}
td {
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  border: solid 2px black;
}
.result {
  font-size: 17px;
  font-weight: bold;
}
.phase {
  font-size: 18px;
  background: #e7b87a;
  cursor: pointer;
}
.phase:hover {
  opacity: 0.7;
}
.player-select,
.com-select {
  font-weight: bold;
  background: #e7b87a;
}
.com-select {
  transform: rotate(0.5turn);
  -webkit-transform: rotate(0.5turn);
}
</style>
