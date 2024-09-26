export const ITEM_ADD = 'ITEM_ADD'

export const addNewItem = (name,price) => ({
    type : ITEM_ADD,
    payload : {
        name,price
    }
})