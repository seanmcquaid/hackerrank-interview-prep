const flatten = (array) => {
  const flattenedArray = [];

  const recursivelyFlatten = (item) => {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        recursivelyFlatten(item[i]);
      }
    } else {
      flattenedArray.push(item);
      return;
    }
  };

  recursivelyFlatten(array);

  return flattenedArray;
};

const data = [[[1, [2, 3]], 4], 5];

console.log(flatten(data));
