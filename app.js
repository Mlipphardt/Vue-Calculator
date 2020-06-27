var calculator = new Vue({
  el: "#calculator",
  data: {
    num1: null,
    num2: null,
    chosenOperator: "",
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ["plus", "minus", "times", "divide"],
  },
  methods: {
    calculate: function () {
      switch (this.chosenOperator) {
        case "plus":
          console.log(this.num1 + this.num2);
          this.clear();
          break;
        case "minus":
          console.log(this.num1 - this.num2);
          this.clear();
          break;
        case "times":
          console.log(this.num1 * this.num2);
          this.clear();
          break;
        case "divide":
          console.log(this.num1 / this.num2);
          this.clear();
          break;
        default:
          console.log("ERR");
      }
    },
    clear: function () {
      (this.chosenOperator = ""), (this.num1 = null), (this.num2 = null);
    },
    printNumber: function (number) {
      console.log("Printing a number!");
      console.log(number);
      if (this.chosenOperator == "") {
        this.num1 = number;
        console.log("First number set?");
      } else {
        this.num2 = number;
        console.log("Second number set ?");
      }
    },
    setOperator: function (operator) {
      console.log(operator);
      console.log(this.chosenOperator);
      this.chosenOperator = operator;
      console.log(this.chosenOperator);
    },
  },
});
