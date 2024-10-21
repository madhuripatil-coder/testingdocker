const initialState = {
  cartData: [],
  cartCount: 0,
};

const calculateCartCount = (cartData) => {
  return cartData.reduce((count, item) => count + item.quantity, 0);
};

function cartItem(state = initialState, action) {
  switch (action.type) {
    case "Add_To_Cart":
      const existingItem = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      let newCartData;
      if (existingItem) {
        newCartData = state.cartData.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCartData = [...state.cartData, { ...action.payload, quantity: 1 }];
      }
      return {
        ...state,
        cartData: newCartData,
        cartCount: calculateCartCount(newCartData),
      };
    case "Remove_From_Cart":
      const updatedCartData = state.cartData
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        cartData: updatedCartData,
        cartCount: calculateCartCount(updatedCartData),
      };
    case "Update_Quantity":
      const newUpdatedCartData = state.cartData.map((item) =>
        item.id === action.payload.item.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        cartData: newUpdatedCartData,
        cartCount: calculateCartCount(newUpdatedCartData),
      };
    default:
      return state;
  }
}

export default cartItem;

// const initialState = {
//   cartData: [],
//   cartCount: 0,
// };

// function cartItem(state = initialState, action) {
//   switch (action.type) {
//     case "Add_To_Cart":
//       // Check if item is already in the cart
//       const existingItem = state.cartData.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         return {
//           ...state,
//           cartData: state.cartData.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//           cartCount: state.cartCount + 1,
//         };
//       } else {
//         return {
//           ...state,
//           cartData: [...state.cartData, { ...action.payload, quantity: 1 }],
//           cartCount: state.cartCount + 1,
//         };
//       }
//     case "Remove_From_Cart":
//       const updatedCartData = state.cartData
//         .map((item) =>
//           item.id === action.payload.id && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.id !== action.payload.id || item.quantity > 0);

//       return {
//         ...state,
//         cartData: updatedCartData,
//         cartCount: state.cartCount - 1,
//       };

//     case "Update_Quantity":
//       return {
//         ...state,
//         cartData: state.cartData.map((item) =>
//           item.id === action.payload.item.id
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         ),
//       };

//     default:
//       return state;
//   }
// }

// export default cartItem;

// // const initialState = {
// //   cartData: [],
// //   cartCount: 0,
// // };

// // function cartItem(state = initialState, action) {
// //   switch (action.type) {
// //     case "Add_To_Cart":
// //       return {
// //         ...state,
// //         cartData: [...state.cartData, action.payload],
// //         cartCount: state.cartCount + 1,
// //       };
// //     case "Remove_From_Cart":
// //       return {
// //         ...state,
// //         cartData: state.cartData.filter((item) => item !== action.payload),
// //         cartCount: state.cartCount - 1,
// //       };

// //     default:
// //       return state;
// //   }
// // }

// // export default cartItem;
