var calculator = new Vue({
  el: "#calculator",
  data: {
    num1: null,
    num2: null,
    operator: null,
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ["+", "-", "x", "/"],
  },
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
          break;
        default:
          console.log("ERR");
      }
    },
    printNumber: function (number) {
      console.log("Printing a number!");
      console.log(number);
    },
  },
});
