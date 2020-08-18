import $ from "jquery";
export const stare = {
  data() {
    return {
      stareData: []
    };
  },
  methods: {
    addStared(item) {
      item.stared = !item.stared;
      if (item.stared) {
        this.stareData.push({ title: item.title });
      } else {
        const removeStare = $.map(this.stareData, stareItem => {
          return stareItem.title;
        }).indexOf(item.title);
        this.stareData.splice(removeStare, 1);
      }
      localStorage.setItem("favoriteWine", JSON.stringify(this.stareData));
    }
  }
};
