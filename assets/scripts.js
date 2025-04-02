feather.replace();
// const audio = document.getElementById("audio");

// window.onload = function() {
//   audio.play();
// };

// const span = document.querySelector("span");
// const copy = document.querySelector(".copy");
const copy_rek = document.querySelector(".rek");

// klipboardini langsung hardcode
copy_rek.onclick = function() {
navigator.clipboard.writeText("6690601646");
alert("Nomor rekening berhasil disalin");
// console.log(navigator.clipboard.readText());
};

// span.onclick = function() {
//   document.execCommand("copy");
//   alert("Nomor rekening berhasil disalin");
// }

// // clipboard ini kalo ngambil dari isi element
// span.addEventListener("copy", function(event) {
//   event.preventDefault();
//   if (event.clipboardData) {
//     event.clipboardData.setData("text/plain", span.textContent);
//     // console.log(event.clipboardData.getData("text"))
//   }
// });
