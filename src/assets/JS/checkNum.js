export default {
  methods: {
    checkNum(item) {
      item.quantity = Number(item.quantity);
      if (isNaN(item.quantity) || item.quantity < 1) {
        item.quantity = 1;
      }
    }
  }
};
