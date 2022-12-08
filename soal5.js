$angka = 101;
let penyebu = angka;

function penyebut($nilai) {
  $nilai = abs($nilai);
  $huruf = array('', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas');
  $temp = '';
  if (($nilai <= 0) | ($nilai > 100)) {
    console.log('silahkan masukkan bilangan 1-100');
  } else if ($nilai < 12) {
    $temp = ' ' + $huruf[$nilai];
  } else if ($nilai < 20) {
    $temp = penyebut($nilai - 10) + ' belas';
  } else if ($nilai < 100) {
    $temp = penyebut($nilai / 10) + ' puluh'.penyebut($nilai % 10);
  } else {
    console.log(seratus);
  }

  return $temp;
}
