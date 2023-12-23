console.log("hello33");

function tinhSoKwDau(soKw) {
  if (soKw <= 50) {
    return 500;
  }
  if (soKw <= 100) {
    return 500;
  }
  if (soKw <= 150) {
    return 500;
  }
  if (soKw > 150) {
    return 500;
  }
}
function tinhSokwHai(soKw) {
  if (soKw <= 100) {
    return 650;
  }
  if (soKw <= 150) {
    return 650;
  }
  if (soKw > 150) {
    return 650;
  }
}
function tinhSokwBa(soKw) {
  
  if (soKw <= 150) {
    return 850;
  }
  if (soKw > 150) {
    return 850;
  }
}
function tinhSokwBon(soKw) {
  if (soKw <= 50) {
    return 1100;
  }
  if (soKw <= 100) {
    return 1100;
  }
  if (soKw <= 150) {
    return 1100;
  }
  if (soKw > 150) {
    return 1100;
  }
}

// let tongTien = 0;
// let tien1 = 0;
// let tien2 = 0;

function tongTienDien() {
  let hoVaTen = document.getElementById("hoVaTen").value;
  let soKw = document.getElementById("soKw").value * 1;
  // console.log({ hoVaTen, soKw });

  let soKwDau = tinhSoKwDau(soKw);
  let soKwHai = tinhSokwHai(soKw);
  let soKwBa = tinhSokwBa(soKw);
  let soKwBon = tinhSokwBon(soKw);
  console.log("sokmhai", soKwHai);
  console.log("sokkmdau", soKwDau);
  console.log("sokmba", soKwBa);
  console.log("sokmbon", soKwBon);
  // let dien1 = 0;
  // let dien2 = 0;

  let tongDien = 0;
  if (soKw <= 50) {
    tongDien = soKw * soKwDau;
  } else if (soKw <= 100) {
    tongDien = 50 * soKwDau + (soKw - 50) * soKwHai;
  } else if (soKw <= 150) {
    tongDien = 50 * soKwDau + 50 * soKwHai + (soKw - 100) * soKwBa;
  } else {
    tongDien =
      50 * soKwDau + 50 * soKwHai + 50 * soKwBa + (soKw - 150) * soKwBon;
  }
  document.getElementById("result").innerText ="Họ Tên:" + hoVaTen + "Tiền Điện:" + tongDien;
  console.log("tongDien", tongDien);

  
  
}

