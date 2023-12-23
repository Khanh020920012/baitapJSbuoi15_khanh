function hienThiNhapKetNoi() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var soKetNoi = document.getElementById("soKetNoi").value;
  if (loaiKhachHang === "doanhNghiep") {
    soKetNoi.style.display = "block";
  } else {
    inputSoKetNoi.style.display = "none";
  }
}
function tinhHoaDon() {
  var maKhachHang = document.getElementById("maKhachHang").value;
  var loaiKhachHang = document.getElementById("loaiKhachHang").value * 1;
  var soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0;
  var soKenhCaoCap =
    parseInt(document.getElementById("soKenhCaoCap").value) || 0;
  // console.log({maKhachHang,loaiKhachHang,soKetNoi,soKenhCaoCap});

  let xuLyHoaDon = 0;
  let dichVuCoBan = 0;
  let kenhCaoCap = 0;
  if (loaiKhachHang === "nhaDan") {
    xuLyHoaDon = 4.5;
    soKetNoi = 20.5;
    kenhCaoCap = 7.5 * soKenhCaoCap;
  } else {
    xuLyHoaDon = 15;
    soKetNoi = 75 + (soKetNoi > 10 ? (soKetNoi - 10) * 5 : 0);
    kenhCaoCap = 50 * soKenhCaoCap;
  }
  let tongTienHoaDon = xuLyHoaDon + dichVuCoBan + kenhCaoCap;
  document.getElementById(
    "ketQua"
  ).innerText = `Mã Khách Hàng ${maKhachHang} : - Tiền Cáp: $ ${tongTienHoaDon}`;
}
