export const checkNum = {
  methods: {
    checkNum(item) {
      const num = Number(item.quantity);
      if (isNaN(num)) {
        item.quantity = 1;
      }
    }
  }
};
