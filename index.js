$("#yesBtn").click(function () {
  $("video").hide();
  $("#msg").hide();
  $(".buttons").hide();
  $(".loader").show();
  $("p").hide();

  setTimeout(function () {
    $(".loader").hide();
    $("img").attr("src", "./assets/images/photo1.jpg");
    $("#msg").html("<h1>Makasih Cintaaa &#127802;</h1>").show();
    $("p").show().text("mwah mwah mwaaaahhh");
  }, 500);
});

function getKode() {
  return $("#noBtn").attr("kode");
}

function changeContent(kode, pict, text) {
  $("#noBtn").attr("kode", kode);
  // $("img").attr("src", pict);
  $("p").text(text);
}

const audioElement = new Audio("./assets/audio/dry-fart.mp3");

$("#noBtn").click(function () {
  audioElement.play();
  let kode = parseInt(getKode()) + 1;
  console.log(kode);
  $("p").show().addClass("mt");

  switch (kode) {
    case 2:
      changeContent(kode, "./assets/images/pict2.png", "Kepencet ya?");
      break;
    case 3:
      changeContent(kode, "./assets/images/pict2.png", "Ih yanggg maafin");
      break;
    case 4:
      changeContent(kode, "./assets/images/pict2.png", "Sayanggg plisss");
      break;
    case 5:
      changeContent(kode, "./assets/images/pict2.png", "Dihhh yaudah");
      $("#noBtn").hide();
      break;
  }
});
