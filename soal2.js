function huruf(huruf) {
  let hasil = '';
  const myArray = huruf.split('');

  for (let i = 4; i >= 0; i--) {
    hasil += myArray[i];
  }
  console.log(hasil);
}
huruf('abcde');
