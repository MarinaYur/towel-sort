
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (!matrix || matrix.length == 0) {
    return [];
  }

  let newMatrix = matrix.map((item, index) => {
    if (index % 2 == 0) {
      return item;
    }
    return item = item.reverse();
  })

  let result = newMatrix.reduce((total, item) => {
    return total.concat(item)
  });

  return result;
}

