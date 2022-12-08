function menghitung(angka) {
  if (angka % 4 == 0) {
    console.log(`${angka} adalah tahun kabisat`);
  } else if (angka % 4 != 0) {
    console.log(`${angka} bukan tahun kabisat`);
  }
}
menghitung(2021);
menghitung(2024);
