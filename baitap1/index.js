console.log("hello");

function tongDiem() {
  let diemChuan = Number(document.getElementById("diemChuan").value);
  // console.log("diemchuan", diemChuan);
  let khuVuc = Number(document.getElementById("khuVuc").value);
  let doiTuong = Number(document.getElementById("doiTuong").value);
  let monThuNhat = Number(document.getElementById("monThuNhat").value);
  let monThuHai = Number(document.getElementById("monThuHai").value);
  let monThuBa = Number(document.getElementById("monThuBa").value);

  // diemChuan = 0;

  let ketQua = "";
  ketQua = monThuNhat + monThuHai + monThuBa + khuVuc + doiTuong;
  let tongDiem = "";
  // console.log("kết quả : ", ketQua );
  // console.log("ketqua,",ketQua);
  if (ketQua < diemChuan) {
    // console.log("phạt")

    tongDiem = "Bạn đã rớt.Tổng Điểm: " + ketQua;
  }
   else {
    //  conTent =(monThuNhat + monThuHai + monThuBa) + khuVuc + doiTuong;
    tongDiem = " bạn đã đậu.Tổng điểm:" + ketQua;
  }
  if (monThuNhat <= 0 || monThuHai <= 0 || monThuBa <= 0) {
    tongDiem = "Bạn đã rớt, do có điểm bé hơn hoặc bằng 0 :" + ketQua;
  }
  document.getElementById("result").innerText = tongDiem;
}
