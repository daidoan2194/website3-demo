function kiemtra() {
    var loi = "";
    // kiểm tra người đặt sân : text + length 
    var name = document.getElementById("name_1");
    if (name.value == "") {
        var loi1 = "";
        loi1 += "Hãy điền tên của bạn" + "<br>";
        name.className = "baoloi";
        document.getElementById("baoloi1").innerHTML = loi1;
        document.getElementById("baoloi1").className = "baoloi1";


    } else if (name.value.length > 20) {
        var loi1 = "";
        loi1 += "Tên không dài quá 20 ký tự" + "<br>";
        name.className = "baoloi";
        document.getElementById("baoloi1").innerHTML = loi1;
        document.getElementById("baoloi1").className = "baoloi1";

    } else {
        document.getElementById("baoloi1").innerHTML = "";
        name.className = "txt";
    }

    // kiểm tra số điện thoại : text + length 
    var num_phone = document.getElementById("2_phone");
    if (num_phone.value == "") {
        var loi2 = "";
        loi2 += "Hãy điền số điện thoại của bạn" + "<br>";
        num_phone.className = "baoloi";
        document.getElementById("baoloi2").innerHTML = loi2;
        document.getElementById("baoloi2").className = "baoloi1";


    } else if (num_phone.value.length > 20) {
        var loi2 = "";
        loi2 += "Số điện thoại không dài quá 20 kí tự." + "<br>";
        num_phone.className = "baoloi";
        document.getElementById("baoloi2").innerHTML = loi2;
        document.getElementById("baoloi2").className = "baoloi1";


    } else {
        document.getElementById("baoloi2").innerHTML = "";
        num_phone.className = "txt";

    }

    // kiểm tra trường khung đặt giờ
    var chon_gio = document.getElementById("3_time");
    var loi3 = "";
    if (chon_gio.value == 0) {

        loi3 += "Hãy chọn khung giờ muốn đặt sân." + "<br>";
        document.getElementById("baoloi_bottom1").innerHTML = loi3;
        document.getElementById("baoloi_bottom1").className = "baoloi_bottom";

    } else {
        document.getElementById("baoloi_bottom1").innerHTML = "";
        name.className = "txt";
    }

    //kiểm tra so gio choi
    var hour = document.getElementById("4_hour");
    var a = hour.value;
    var loi4 = "";
    if (hour.value == "") {

        loi4 += "Hãy nhập số giờ muốn đặt sân." + "<br>";
        hour.className = "baoloi";
        document.getElementById("baoloi_bottom2").innerHTML = loi4;
        document.getElementById("baoloi_bottom2").className = "baoloi_bottom";

    } else if (isNaN(a)) {
        loi4 += "Chỉ được phép nhập số dương." + "<br>";
        hour.className = "baoloi";
        document.getElementById("baoloi_bottom2").innerHTML = loi4;
        document.getElementById("baoloi_bottom2").className = "baoloi_bottom";


    } else if (a <= 0) {
        loi4 += "Số giờ chơi phải là số dương." + "<br>";
        hour.className = "baoloi";
        document.getElementById("baoloi_bottom2").innerHTML = loi4;
        document.getElementById("baoloi_bottom2").className = "baoloi_bottom";

    } else {
        document.getElementById("baoloi_bottom2").innerHTML = "";
        hour.className = "txt";
    }
    //kiểm tra số người chơi nguyên dương
    var human = document.getElementById("5_player");
    var b = human.value;
    var loi5 = "";
    if (b == "") {

        loi5 += "Hãy nhập số người chơi." + "<br>";
        human.className = "baoloi";
        document.getElementById("baoloi5").innerHTML = loi5;
        document.getElementById("baoloi5").className = "baoloi1";

    } else if (b % 1 !== 0 || b <= 0) {
        loi5 += "Số người chơi phải là số nguyên dương." + "<br>";
        human.className = "baoloi";
        document.getElementById("baoloi5").innerHTML = loi5;
        document.getElementById("baoloi5").className = "baoloi1";

    } else {
        document.getElementById("baoloi5").innerHTML = "";
        human.className = "txt";

    }

    //kiểm tra so doi choi nguyen duong

    var team = document.getElementById("6_team");
    var c = team.value;
    var loi6 = "";
    if (c == "") {

        loi6 += "Hãy nhập số đội chơi." + "<br>";
        team.className = "baoloi";
        document.getElementById("baoloi6").innerHTML = loi6;
        document.getElementById("baoloi6").className = "baoloi1";

    } else if (c % 1 !== 0 || c <= 0) {
        loi6 += "Số đội chơi phải là số nguyên dương." + "<br>";
        team.className = "baoloi";
        document.getElementById("baoloi_bottom3").innerHTML = loi6;
        document.getElementById("baoloi_bottom3").className = "baoloi_bottom";

    } else {
        document.getElementById("baoloi_bottom3").innerHTML = "";
        document.getElementById("baoloi6").innerHTML = "";
        team.className = "txt";
    }
    var loi = loi1 + loi2 + loi3 + loi4 + loi5 + loi6;
    if (loi != 0) {
        return false;
    }

}









function tinhtien() {
    //khai báo biến
    var x = 0;
    var kg = 0;
    var y = 0;
    var z = 0;
    var t = 0;
    var dv;
    var dx;
    var tien_san = 0;
    var tdp = 0;
    var ttt = 0;
    var tong_tien = 0;
    var chon_tt = 0;
    var chon_dp = 0;
    x += Number(document.getElementById("3_time").value);
    y += Number(document.getElementById("4_hour").value);
    z += Number(document.getElementById("5_player").value);
    t += Number(document.getElementById("6_team").value);
    //tính các dịch vụ thêm
    dv = document.getElementById("9.2_service");
    dx = document.getElementById("9.3_service");
    if (dv.checked) {
        chon_dp = 300;
    } else if (dx.checked) {
        chon_dp = 000;
        chon_tt = 200;
    }
    if ((dx.checked) && (dv.checked)) {
        chon_dp = 300;
        chon_tt = 200;
    }


    //x là khung giờ chơi
    if (x <= 0) {
        kg = 0;
    }
    if (x == 1) {
        kg = 300;
    }
    if (x == 2) {
        kg = 600;
    }
    if (x == 3) {
        kg = 800;
    }
    if (x == 4) {
        kg = 800;
    }
    ttt += chon_tt * y;
    tdp += chon_dp * t;
    tien_san = kg * y;
    if (tien_san >= 0) {
        tong_tien = tien_san + tdp + ttt;
        if (tien_san < 1000) {
            document.getElementById("tinhtong").innerHTML = "<span>" +
                tong_tien + " (ngàn đồng)" +
                "</span>";
        }
        if (tien_san >= 1000) {
            document.getElementById("tinhtong").innerHTML = "<span>" +
                tong_tien / 1000 + " (triệu đồng)" +
                "</span>";
        }
    } else document.getElementById("tinhtong").innerHTML = "<span>" + "Hãy lựa chọn đầy đủ và chính xác các thông tin" + "<span>";
    document.getElementById("tinhtong").className = "baoloi1";
}

function thaydoi() {
    document.getElementById("ten_san").innerHTML = "Tên sân cc";
    return;
}