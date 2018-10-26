module.exports = {
  list: [],
  stores: function(...num) {
    this.list.push(...num);
    return this.list;
  },
  sortList: function() {
    var sortedList = this.list;
    sortedList = sortedList.sort(function(a, b) {
      return a - b;
    });
    return sortedList;
  }
};
