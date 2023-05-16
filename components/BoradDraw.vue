<script setup>
import { ref, computed, reactive, toRefs } from "vue";
import Graph from "./Graph.vue";

const 先手名 = props.先手名;
const 後手名 = props.後手名;
const controller = props.controller;
const 評価値 = props.評価値;
const reverse = props.reverse;
const 最終手 = props.最終手;
const 全指し手 = props.全指し手;
const 変化 = props.変化;
const 変化手数 = props.変化手数;

const 手数 = ref(0);
const squares = [
  /* 将棋盤の情報 */
];

const capturedFirstPlayer = reactive({
  /* 先手の持駒情報 */
});

const capturedSecondPlayer = reactive({
  /* 後手の持駒情報 */
});

const moves = computed(() => 全指し手[変化][手数.value]);
const lastMove = computed(() => {
  if (最終手) {
    return 最終手;
  } else if (moves.value.length > 0) {
    const last = moves.value[moves.value.length - 1];
    return [last.toX, last.toY];
  }
  return null;
});

const isHighlighted = (x, y) => {
  /* マスがハイライトされているかどうかの判定ロジック */
};

const isSelected = (x, y) => {
  /* マスが選択されているかどうかの判定ロジック */
};

const highlightSquare = (x, y, reverse) => {
  /* マスのハイライトを描画する処理 */
};

const playerMark = computed(() => (reverse ? "△" : "▲"));

const onSquareClicked = (x, y) => {
  /* マスがクリックされたときの処理 */
};

const onUndoClicked = () => {
  /* 「一手戻す」ボタンがクリックされたときの処理 */
};

const onResetClicked = () => {
  /* 「最初から」ボタンがクリックされたときの処理 */
};

const onReverseClicked = () => {
  /* 「反転」ボタンがクリックされたときの処理 */
};

const onMoveSelected = (event) => {
  手数.value = event.target.value;
};

// reactiveオブジェクトをtoRefsで展開して返す
const state = toRefs({
  手数,
  squares,
  capturedFirstPlayer,
  capturedSecondPlayer,
  moves,
  lastMove,
  isHighlighted,
  isSelected,
  highlightSquare,
  playerMark,
});

// stateオブジェクトとイベントハンドラを返す
export default {
  components: {
    Graph,
  },
  setup() {
    return {
      ...state,
      onSquareClicked,
      onUndoClicked,
      onResetClicked,
      onReverseClicked,
      onMoveSelected,
    };
  },
};
</script>
<template>
  <div :data-reverse="reverse" class="shogi-board">
    <!-- 先手名 -->
    <div class="player-name player-name-first">
      <span v-if="firstPlayerName">{{ playerMark }}{{ firstPlayerName }}</span>
    </div>

    <!-- 盤面 -->
    <div class="board">
      <div class="board-container">
        <div class="board-squares">
          <!-- 将棋盤 -->
          <template v-for="(row, y) in squares">
            <template v-for="(square, x) in row">
              <div
                :key="`square-${x}-${y}`"
                class="board-square"
                :class="{
                  highlight: isHighlighted(x, y),
                  selected: isSelected(x, y),
                }"
                @click="onSquareClicked(x, y)"
              >
                <span class="piece" v-if="square !== null">
                  {{ square }}
                </span>
              </div>
            </template>
          </template>

          <!-- ハイライト -->
          <div
            v-if="lastMove && !isReverse"
            :key="'highlight-' + lastMove[0] + '-' + lastMove[1]"
            v-html="highlightSquare(lastMove[0], lastMove[1], reverse)"
          ></div>
          <div
            v-else-if="moves.length > 0"
            :key="
              'highlight-' +
              moves[moves.length - 1].toX +
              '-' +
              moves[moves.length - 1].toY
            "
            v-html="
              highlightSquare(
                moves[moves.length - 1].toX,
                moves[moves.length - 1].toY,
                reverse
              )
            "
          ></div>
        </div>
      </div>

      <!-- 持ち駒 -->
      <div class="captured-pieces captured-pieces-first">
        <template v-for="(num, piece) in capturedFirstPlayer">
          <div :key="`captured-piece-first-${piece}`" class="captured-piece">
            <span class="piece">
              {{ piece }}
            </span>
            <span class="captured-piece-count" :data-num="num">{{ num }}</span>
          </div>
        </template>
      </div>
      <div class="captured-pieces captured-pieces-second">
        <template v-for="(num, piece) in capturedSecondPlayer">
          <div :key="`captured-piece-second-${piece}`" class="captured-piece">
            <span class="piece">
              {{ piece }}
            </span>
            <span class="captured-piece-count" :data-num="num">{{ num }}</span>
          </div>
        </template>
      </div>
    </div>

    <!-- 後手名 -->
    <div class="player-name player-name-second">
      <span v-if="secondPlayerName"
        >{{ playerMark }}{{ secondPlayerName }}</span
      >
    </div>

    <!-- コントローラー -->
    <div v-if="controller !== 'none'" class="controller">
      <button
        class="btn btn-undo"
        :disabled="undoDisabled"
        @click="onUndoClicked"
      >
        <i class="fas fa-undo"></i>
        <span>一手戻す</span>
      </button>
      <button class="btn btn-reset" @click="onResetClicked">
        <i class="fas fa-redo"></i>
        <span>最初から </span>
      </button>
      <button class="btn btn-reverse" @click="onReverseClicked">
        <i class="fas fa-exchange-alt"></i>
        <span>反転</span>
      </button>
    </div>
    <!-- グラフ -->
    <div v-if="$refs.グラフ" class="graph">
      <Graph ref="グラフ" :evaluation="評価値" :reverse="reverse"></Graph>
    </div>

    <!-- 指し手選択 -->
    <div class="move-selection">
      <select v-model="手数" @change="onMoveSelected">
        <option v-for="(move, index) in moves" :key="index" :value="index">
          {{ index + 1 }}
        </option>
      </select>
    </div>

    <!-- コメント -->
    <div v-if="$refs.コメント" class="comment">
      {{ moves[手数].コメント }}
    </div>

    <!-- 変化選択 -->
    <div
      class="variation-selection"
      v-if="
        (変化 && 手数 === 変化手数) ||
        (!変化 && 全指し手.変化手数.includes(手数))
      "
    >
      {{ 描画_変化選択() }}
    </div>
  </div>
</template>

<style scoped>
/* スタイルの定義 */
</style>
