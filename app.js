var calculator = new Vue({
  el: "#calculator",
  data: { num1: null, num2: null, operator: null },
  methods: {
    calculate: function () {
      switch (this.operator) {
          case "plus":
              console.log(num1 + num2);
              break;
          case "minus":
              console.log(num1 - num2);
              break;
          case "times":
              console.log(num1 * num2);
              break;
          case "divide":
              console.log(num1 / num2);
              break
          case:
            console.log("ERR")
      }
    },
  },
});