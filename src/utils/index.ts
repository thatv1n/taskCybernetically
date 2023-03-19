
export const generateItemId = (page: number, itemIndex: number) => {
  let itemId = `0`
  if (page) {
    itemId = itemIndex !== 10 ? `${page}${itemIndex}` : `${page + 1}${0}`;
  } else {
    itemId = `${itemIndex}`;
  }
  return itemId
}

export const removeLastZero = (num: number) => {
  const str = num.toString();
  if (str.endsWith('0')) {
    return str.slice(0, -1);
  }
  return str;
}
