mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
} 

function reload(){
    var url = "";
    window.setTimeout(function(){ window.location = url; },1000);
}

function validasi() {
    var is_valid = checkDefault(document.forms['tes-kepribadian'], 'jawaban-1');
    console.log(is_valid);
}

function cek_radiobox(jawab) {
    var jawaban = document.getElementsByName(jawab);
    var ischecked = false;
    for ( var i = 0; i < jawaban.length; i++) {
        if(jawaban[i].checked) {
            ischecked = true;
            break;
        }
    }
    if(!ischecked)   { 
        ischecked = false;
    }
    return ischecked;
}

function validasi(){
    var is_valid = false;
    var arr_jawaban = ["jawaban-1","jawaban-2","jawaban-3","jawaban-4","jawaban-5","jawaban-6","jawaban-7","jawaban-8","jawaban-9","jawaban-10","jawaban-11","jawaban-12","jawaban-13","jawaban-14","jawaban-15","jawaban-16"];
    for(var i =0; i < arr_jawaban.length; i++){
        is_valid = cek_radiobox(arr_jawaban[i]);
    }
    return is_valid;
}

function jawaban_instrumen(jawab) {
    var jawaban = document.getElementsByName(jawab);
    var nilai_jawaban = 0;
    for ( var i = 0; i < jawaban.length; i++) {
        if(jawaban[i].checked) {
            nilai_jawaban = jawaban[i].value;
            break;
        }
    }
    return nilai_jawaban;
}

function jawab(){
    var bobot_introvert = 0;
    var bobot_extrovert = 0;
    var bobot_sensing = 0;
    var bobot_intuition = 0;
    var bobot_thinking = 0;
    var bobot_feeling = 0;
    var bobot_judging = 0;
    var bobot_perceiving = 0;
    
    var jawaban_introvert = ["jawaban-1","jawaban-3"];
    var jawaban_extrovert = ["jawaban-2","jawaban-4"];
    var jawaban_sensing = ["jawaban-5","jawaban-7"];
    var jawaban_intuition = ["jawaban-6","jawaban-8"];
    var jawaban_thinking = ["jawaban-9","jawaban-11"];
    var jawaban_feeling = ["jawaban-10","jawaban-12"];
    var jawaban_judging = ["jawaban-13","jawaban-15"];
    var jawaban_perceiving = ["jawaban-14","jawaban-16"];

    var introvert_extrovert = "[I/E]";
    var sensing_intuition = "[S/N]";
    var thinking_feeling = "[T/F]";
    var judging_perceiving = "[J/P]";

    var arr_hasil = [];

    var is_tervalidasi = validasi();
    if(is_tervalidasi == true){
        //hitung bobot indikator
        for(var i =0; i < jawaban_introvert.length; i++){
            bobot_introvert = bobot_introvert + parseFloat(jawaban_instrumen(jawaban_introvert[i]));
        }
        bobot_introvert = bobot_introvert/2;
        
        for(var i =0; i < jawaban_extrovert.length; i++){
            bobot_extrovert = bobot_extrovert + parseFloat(jawaban_instrumen(jawaban_extrovert[i]));
        }
        bobot_extrovert = bobot_extrovert/2;

        for(var i =0; i < jawaban_sensing.length; i++){
            bobot_sensing = bobot_sensing + parseFloat(jawaban_instrumen(jawaban_sensing[i]));
        }
        bobot_sensing = bobot_sensing/2;

        for(var i =0; i < jawaban_intuition.length; i++){
            bobot_intuition = bobot_intuition + parseFloat(jawaban_instrumen(jawaban_intuition[i]));
        }
        bobot_intuition = bobot_intuition/2;

        for(var i =0; i < jawaban_thinking.length; i++){
            bobot_thinking = bobot_thinking + parseFloat(jawaban_instrumen(jawaban_thinking[i]));
        }
        bobot_thinking = bobot_thinking/2;

        for(var i =0; i < jawaban_feeling.length; i++){
            bobot_feeling = bobot_feeling + parseFloat(jawaban_instrumen(jawaban_feeling[i]));
        }
        bobot_feeling = bobot_feeling/2;

        for(var i =0; i < jawaban_judging.length; i++){
            bobot_judging = bobot_judging + parseFloat(jawaban_instrumen(jawaban_judging[i]));
        }
        bobot_judging = bobot_judging/2;

        for(var i =0; i < jawaban_perceiving.length; i++){
            bobot_perceiving = bobot_perceiving + parseFloat(jawaban_instrumen(jawaban_perceiving[i]));
        }
        bobot_perceiving = bobot_perceiving/2;

        //bandingkan nilai indikator
        if(bobot_introvert > bobot_extrovert){
            introvert_extrovert = "I";
        }else if(bobot_introvert < bobot_extrovert){
            introvert_extrovert = "E";
        }else{
            introvert_extrovert = "[I/E]";
        }

        if(bobot_sensing > bobot_intuition){
            sensing_intuition = "S";
        }else if(bobot_sensing < bobot_intuition){
            sensing_intuition = "N";
        }else{
            sensing_intuition = "[S/N]";
        }

        if(bobot_thinking > bobot_feeling){
            thinking_feeling = "T";
        }else if(bobot_thinking < bobot_feeling){
            thinking_feeling = "F";
        }else{
            thinking_feeling = "[T/F]";
        }

        if(bobot_judging > bobot_perceiving){
            judging_perceiving = "J";
        }else if(bobot_judging < bobot_perceiving){
            judging_perceiving = "P";
        }else{
            judging_perceiving = "[J/P]";
        }

        var hasil_kepribadian = introvert_extrovert + sensing_intuition + thinking_feeling + judging_perceiving;
        arr_hasil = [hasil_kepribadian, bobot_introvert, bobot_extrovert, bobot_sensing, bobot_intuition, bobot_thinking, bobot_feeling, bobot_judging, bobot_perceiving];
        return arr_hasil;
    }else{
        alert("Terdapat jawaban yang belum diisi, harap periksa dan jawab form jawaban Anda!");
        return 0;
    }    
}

function tampilkan(){
    var hasil = [];
    hasil = jawab();
    if(hasil != 0){
        document.getElementById("hasil-mbti").innerHTML = "<center><strong>" + hasil[0] + "</strong></center>"; 

        document.getElementById("hasil-introvert").innerHTML =  hasil[1];
        var ket_introvert = keterangan(hasil[1]);
        document.getElementById("keterangan-introvert").innerHTML = ket_introvert;
        
        document.getElementById("hasil-extrovert").innerHTML = hasil[2];
        var ket_extrovert = keterangan(hasil[2]);
        document.getElementById("keterangan-extrovert").innerHTML = ket_extrovert;

        document.getElementById("hasil-sensing").innerHTML = hasil[3];
        var ket_sensing = keterangan(hasil[3]);
        document.getElementById("keterangan-sensing").innerHTML = ket_sensing;

        document.getElementById("hasil-intuition").innerHTML = hasil[4];
        var ket_intuition = keterangan(hasil[4]);
        document.getElementById("keterangan-intuition").innerHTML = ket_intuition;

        document.getElementById("hasil-thinking").innerHTML = hasil[5];
        var ket_thinking = keterangan(hasil[5]);
        document.getElementById("keterangan-thinking").innerHTML = ket_thinking;

        document.getElementById("hasil-feeling").innerHTML = hasil[6];
        var ket_feeling = keterangan(hasil[6]);
        document.getElementById("keterangan-feeling").innerHTML = ket_feeling;

        document.getElementById("hasil-judging").innerHTML = hasil[7];
        var ket_judging = keterangan(hasil[7]);
        document.getElementById("keterangan-judging").innerHTML = ket_judging;

        document.getElementById("hasil-perceiving").innerHTML = hasil[8];
        var ket_perceiving = keterangan(hasil[8]);
        document.getElementById("keterangan-perceiving").innerHTML = ket_perceiving;

        alert("Tes berhasil dilakukan!");
        hide();
    }
}

function keterangan(nilai){
    if(nilai == 5){
        return "Sangat Baik";
    }else if(nilai >= 4 && nilai < 5){
        return "Baik";
    }else if(nilai >= 3 && nilai < 4){
        return "Cukup";
    }else if(nilai >= 2 && nilai < 3){
        return "Buruk";
    }else if(nilai < 2){
        return "Sangat Buruk";
    }else{
        return "N/A";
    }
}

hide();
function hide() {
    var x = document.getElementById("hasil-tes");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
} 