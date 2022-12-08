function menghitung(angka) {
  let jumlah_angka = angka;

  for (nilai = angka; nilai > 1; nilai--) {
    jumlah_angka = jumlah_angka * (nilai - 1);
    console.log(nilai);
  }
  console.log(jumlah_angka);
}
menghitung(4);
menghitung(8);
