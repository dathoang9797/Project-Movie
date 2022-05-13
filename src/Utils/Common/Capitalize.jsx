export const capitalize = (str: string) => {
  if (str.length === 0) return '';
  const arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const result = arr.join(' ');
  return result;
};
