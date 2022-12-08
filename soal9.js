function menghitung(array) {
  let low = array[0];
  let high = array[0];
  let length = array.length;

  for (i = 0; i < length; i++) {
    if (low < array[i]) {
      low = array[i];
    }

    if (high > array[i]) {
      high = array[i];
    }
  }
  console.log(`${low} : high, ${high} : low`);
}
menghitung([4, 2, 6, 88, 3, 11]);
