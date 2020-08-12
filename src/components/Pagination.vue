<template>
  <div class="container pagination-wrap">
    <ul class="pagination">
      <li>
        <a
          href="#"
          :class="{ disabled: pages.current_page === 1 }"
          @click.prevent="emitPages(pages.current_page - 1)"
        >
          <i class="fas fa-angle-left"></i>
        </a>
      </li>
      <li v-for="(item, i) in pages.total_pages" :key="i">
        <a
          href="#"
          :class="{ active: pages.current_page === i + 1 }"
          @click.prevent="emitPages(i + 1)"
        >
          {{ i + 1 }}
        </a>
      </li>
      <li>
        <a
          href="#"
          :class="{ disabled: pages.current_page === pages.total_pages }"
          @click.prevent="emitPages(pages.current_page + 1)"
        >
          <i class="fas fa-angle-right"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["pages"],
  methods: {
    emitPages(item) {
      this.$emit("update", item);
    }
  }
};
</script>
