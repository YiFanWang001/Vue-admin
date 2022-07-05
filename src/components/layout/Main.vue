<template>
  <div>
    <el-tabs
      v-model="route.path"
      @tab-click="hand"
      type="card"
      editable
      class="demo-tabs"
      @tab-remove="removeTab"
    >
      <el-tab-pane
        :name="item.path"
        :label="item.title"
        v-for="(item, index) in editableTabs"
        :key="index"
      >
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps, watch } from 'vue'
import { getItem } from '@/utils/storage'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const store = useStore()
const route = useRoute()

watch(
  () => router.currentRoute.value.path,
  () => {
    if (route.meta && route.meta.title && route.path) {
      const tags = {
        title: route.meta.title,
        path: route.path
      }
      console.log(tags)
      store.commit('tabs/setTagsView', tags)
    }
  },
  { immediate: true, deep: true }
)
const hand = (tab, event) => {
  // console.log(tab.props.name, event)
  router.push(tab.props.name)
  // rou.push(name)
}
const removeTab = (tabs) => {
  console.log(tabs)
  // store.commit('tabs/removeTagItem', tags)
  if (tabs != '/') {
    const index = editableTabs.findIndex((item) => {
      return item.path === tabs
    })
    store.commit('tabs/removeTagItem', index)
  }
  if (route.path == tabs) {
    router.push('/')
  }
}
const editableTabs = store.state.tabs.tagsView
console.log(editableTabs)
</script>

<style lang="scss" scoped></style>
