// 1. implement another method getTime and print out current time;

const calendar = {
  getDate: function () {
    return new Date().toDateString();
  },
  getTime: function () {
    return new Date().toTimeString();
  },
  getHours: function () {
    return new Date().getHours();
  }
};

console.log(calendar.getDate);
console.log(calendar.getDate());
console.log(calendar.getTime);
console.log(calendar.getTime());
console.log(calendar.getHours());
