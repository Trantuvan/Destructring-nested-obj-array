function makeItem() {
  return {
    data: {
      item: {
        name: "Shoes",
        size: {
          US: 10,
          EU: 44,
        },
      },
    },
    status: "live",
  };
}

function makeArrayOfItems() {
  return {
    data: {
      items: [
        { name: "Shoes", price: 100 },
        { name: "Shirt", price: 250 },
      ],
    },
    status: "live",
  };
}

// *destructuring object use {}, destructuring array use [] (return all items inside)
// *destructuring 1 element object use {name} (use exact same name as elem inside obj)
// *rename 1 element object use {name : firstName} {use colon to rename}

// const res = makeItem();
// // *nested object destructuring takes item from response obj
// // *data here is a temporary var to get item object
// ({
//   data: { item },
//   status,
// } = res);

// // *get name, sizes inside item
// const {
//   data: {
//     item: {
//       name,
//       // *rename US to normal
//       size: { US: weird, EU: normal },
//     },
//   },
// } = makeItem();

// // console.log(data); // !error temporary variable to get item
// console.log(name, weird); // ?the object item itself

const {
  data: {
    // *rename array element (name something else inside []) because
    // *array element defaults to zero-based index
    items: [item1],
  },
} = makeArrayOfItems();
console.log(item1);
