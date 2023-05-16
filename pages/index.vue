<script>
const tab = ref("usage");
import Shogi from "../components/Shogi.vue";
import WhitePlayerKomadai from "../components/WhitePlayerKomadai.vue";
import BlackPlayerKomadai from "../components/BlackPlayerKomadai.vue";
</script>

<template>
  <div class="q-pa-md">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 100px"
      class="rounded-borders"
    >
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />

          <q-toolbar-title>将棋埋め込みプレーヤー</q-toolbar-title>
          <q-btn flat round dense icon="search" />
          <q-tabs v-model="tab" shrink>
            <q-tab name="usage" label="使用方法" />
            <q-tab name="demo" label="Demo" />
          </q-tabs>
          <a
            href="https://github.com/nonakayasuo/embedded-shogi-player"
            target="_blank"
          >
            <q-icon name="fa-brands fa-github" style="font-size: 24px" />
          </a>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <p>Webページ埋め込み将棋盤</p>
        </q-page>
      </q-page-container>
    </q-layout>
    <div class="white-player-komadai">
      <WhitePlayerKomadai />
    </div>
    <Shogi />
    <div class="black-player-komadai">
      <BlackPlayerKomadai />
    </div>
  </div>
</template>
