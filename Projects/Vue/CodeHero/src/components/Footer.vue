<template>
  <div id="footer">
    <div class="pagination">
      <span class="left" @click="changePage('prev')" :class="isFirstPage"><b-icon-caret-left-fill></b-icon-caret-left-fill></span>
      <span class="pages">{{ currentPage }} / {{ total }}</span>
      <span class="right" @click="changePage('next')" :class="isLastPage"><b-icon-caret-right-fill></b-icon-caret-right-fill></span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    total: Number,
    currentPage: Number
  },
  methods: {
    changePage: function (type) {
      switch (type) {
        case 'next':
          var changedPage = this.currentPage + 1
          break
        case 'prev':
          var changedPage = this.currentPage - 1
          break
      }
      this.$emit('updateHeroes', {action: 'changePage', value: changedPage})
    }
  },
  computed: {
    isFirstPage: function () {
      if (this.currentPage === 1) {
        return {buttonDisabled: true}
      }
    },
    isLastPage: function () {
      if (this.currentPage === this.total) {
        return {buttonDisabled: true}
      }
    }
  }
}
</script>

<style scoped>
#footer {
  width: 100%;
  height: 60px;
  color: #ED1D24;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

span.left, span.right {
  font-size: 2rem;
  cursor: pointer;
}

.buttonDisabled {
  color: #7E1B1F;
  cursor: default !important;
}

.pages {
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
