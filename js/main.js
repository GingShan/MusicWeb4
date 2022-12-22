$(function () {
  $("#PlayBtn").click(() => {
    $("#PlayBtn").fadeOut(800);
    $("#PauseBtn").fadeIn(800);
  });
  $("#PauseBtn").click(() => {
    $("#PlayBtn").fadeIn(800);
    $("#PauseBtn").fadeOut(800);
  });

  $("#PlayBtn2").click(() => {
    $("#PlayBtn2").fadeOut(800);
    $("#PauseBtn2").fadeIn(800);
  });
  $("#PauseBtn2").click(() => {
    $("#PlayBtn2").fadeIn(800);
    $("#PauseBtn2").fadeOut(800);
  });

  $("#PlayBtn3").click(() => {
    $("#PlayBtn3").fadeOut(800);
    $("#PauseBtn3").fadeIn(800);
  });
  $("#PauseBtn3").click(() => {
    $("#PlayBtn3").fadeIn(800);
    $("#PauseBtn3").fadeOut(800);
  });

  $("#PlayBtn4").click(() => {
    $("#PlayBtn4").fadeOut(800);
    $("#PauseBtn4").fadeIn(800);
  });
  $("#PauseBtn4").click(() => {
    $("#PlayBtn4").fadeIn(800);
    $("#PauseBtn4").fadeOut(800);
  });

  $("#PlayBtn5").click(() => {
    $("#PlayBtn5").fadeOut(800);
    $("#PauseBtn5").fadeIn(800);
  });
  $("#PauseBtn5").click(() => {
    $("#PlayBtn5").fadeIn(800);
    $("#PauseBtn5").fadeOut(800);
  });

  $("#PlayBtn6").click(() => {
    $("#PlayBtn6").fadeOut(800);
    $("#PauseBtn6").fadeIn(800);
  });
  $("#PauseBtn6").click(() => {
    $("#PlayBtn6").fadeIn(800);
    $("#PauseBtn6").fadeOut(800);
  });

  $("#PlayBtn7").click(() => {
    $("#PlayBtn7").fadeOut(800);
    $("#PauseBtn7").fadeIn(800);
  });
  $("#PauseBtn7").click(() => {
    $("#PlayBtn7").fadeIn(800);
    $("#PauseBtn7").fadeOut(800);
  });

  $("#PlayBtn8").click(() => {
    $("#PlayBtn8").fadeOut(800);
    $("#PauseBtn8").fadeIn(800);
  });
  $("#PauseBtn8").click(() => {
    $("#PlayBtn8").fadeIn(800);
    $("#PauseBtn8").fadeOut(800);
  });
})




document.addEventListener("DOMContentLoaded", function () {

  // 播放
  var btn_play_el = document.getElementById("PlayBtn");
  btn_play_el.addEventListener("click", function () {
    let the_audio_el = document.getElementById("musicOne");
    the_audio_el.play();
  });

  // 暫停
  var btn_pause_el = document.getElementById("PauseBtn");
  btn_pause_el.addEventListener("click", function () {
    let the_audio_el = document.getElementById("musicOne");
    the_audio_el.pause();
  });

  // 播放
  var btn_play_el2 = document.getElementById("PlayBtn2");
  btn_play_el2.addEventListener("click", function () {
    let the_audio_el2 = document.getElementById("musicTwo");
    the_audio_el2.play();
  });

  // 暫停
  var btn_pause_el2 = document.getElementById("PauseBtn2");
  btn_pause_el2.addEventListener("click", function () {
    let the_audio_el2 = document.getElementById("musicTwo");
    the_audio_el2.pause();
  });

  // 播放
  var btn_play_el3 = document.getElementById("PlayBtn3");
  btn_play_el3.addEventListener("click", function () {
    let the_audio_el3 = document.getElementById("musicThree");
    the_audio_el3.play();
  });

  // 暫停
  var btn_pause_el3 = document.getElementById("PauseBtn3");
  btn_pause_el3.addEventListener("click", function () {
    let the_audio_el3 = document.getElementById("musicThree");
    the_audio_el3.pause();
  });

  // 播放
  var btn_play_el4 = document.getElementById("PlayBtn4");
  btn_play_el4.addEventListener("click", function () {
    let the_audio_el4 = document.getElementById("musicFour");
    the_audio_el4.play();
  });

  // 暫停
  var btn_pause_el4 = document.getElementById("PauseBtn4");
  btn_pause_el4.addEventListener("click", function () {
    let the_audio_el4 = document.getElementById("musicFour");
    the_audio_el4.pause();
  });

  // 播放
  var btn_play_el5 = document.getElementById("PlayBtn5");
  btn_play_el5.addEventListener("click", function () {
    let the_audio_el5 = document.getElementById("musicFive");
    the_audio_el5.play();
  });

  // 暫停
  var btn_pause_el5 = document.getElementById("PauseBtn5");
  btn_pause_el5.addEventListener("click", function () {
    let the_audio_el5 = document.getElementById("musicFive");
    the_audio_el5.pause();
  });

  // 播放
  var btn_play_el6 = document.getElementById("PlayBtn6");
  btn_play_el6.addEventListener("click", function () {
    let the_audio_el6 = document.getElementById("musicSix");
    the_audio_el6.play();
  });

  // 暫停
  var btn_pause_el6 = document.getElementById("PauseBtn6");
  btn_pause_el6.addEventListener("click", function () {
    let the_audio_el6 = document.getElementById("musicSix");
    the_audio_el6.pause();
  });

  // 播放
  var btn_play_el7 = document.getElementById("PlayBtn7");
  btn_play_el7.addEventListener("click", function () {
    let the_audio_el7 = document.getElementById("musicSeven");
    the_audio_el7.play();
  });

  // 暫停
  var btn_pause_el7 = document.getElementById("PauseBtn7");
  btn_pause_el7.addEventListener("click", function () {
    let the_audio_el7 = document.getElementById("musicSeven");
    the_audio_el7.pause();
  });

  // 播放
  var btn_play_el8 = document.getElementById("PlayBtn8");
  btn_play_el8.addEventListener("click", function () {
    let the_audio_el8 = document.getElementById("musicEight");
    the_audio_el8.play();
  });

  // 暫停
  var btn_pause_el8 = document.getElementById("PauseBtn8");
  btn_pause_el8.addEventListener("click", function () {
    let the_audio_el8 = document.getElementById("musicEight");
    the_audio_el8.pause();
  });

  // 結束播放
  // var btn_stop_el = document.getElementById("btn_stop");
  // btn_stop_el.addEventListener("click", function(){
  //   let the_audio_el = document.getElementById("the_audio");
  //   the_audio_el.pause();
  //   the_audio_el.currentTime = 0;
  // });

});

/*
$(function(){
  
  // 播放
  $("#btn_play").on("click", function(){
    $("#the_audio")[0].play();
  });
  
  // 暫停
  $("#btn_pause").on("click", function(){
    $("#the_audio")[0].pause();
  });
  
  // 結束播放
  $("#btn_stop").on("click", function(){
    $("#the_audio")[0].pause();
    $("#the_audio")[0].currentTime = 0;
  });
  
});
*/