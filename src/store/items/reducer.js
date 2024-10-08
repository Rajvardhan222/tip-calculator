import { ITEM_ADD } from "./actions";

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if(action.type === ITEM_ADD){
    const item = {uuid : id++,quantity : 1, ...action.payload}
    return [...state,item]
  }
  return state;
};

export default reducer;
