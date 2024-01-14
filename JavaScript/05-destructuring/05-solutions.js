// 01
const intersection = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
  };
  console.log(intersection([1, 2, 3], [4, 3, 2]));

// 02
const indexOn = (arr, key) =>
  arr.reduce((obj, v) => {
    const { [key]: id, ...data } = v;
    obj[id] = data;
    return obj;
  }, {});

console.log(
  indexOn(
    [
      { id: 10, name: "apple" },
      { id: 20, name: "orange" },
    ],
    (x) => x.id
  )
);

// 03
const checkTruthy = array => array.filter(item => !!item )

console.log(checkTruthy([NaN, 0, 15, false, -22, '',undefined, 47, null]))