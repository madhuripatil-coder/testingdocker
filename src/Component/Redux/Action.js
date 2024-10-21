export const addToCart = (item) => ({
  type: "Add_To_Cart",
  payload: item,
});

export const removeFromCart = (item) => ({
  type: "Remove_From_Cart",
  payload: item,
});

export const updateQuantity = (item, quantity) => ({
  type: "Update_Quantity",
  payload: { item, quantity },
});
