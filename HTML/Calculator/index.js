var typeBox = document.getElementById("type-box");

function dis(val) {
  document.getElementById("type-box").value += val;
}

function solve() {
  let x = document.getElementById("type-box").value;
  let y = eval(x);
  document.getElementById("type-box").value = y;
}

function clr() {
  document.getElementById("type-box").value = "";
}

typeBox.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    solve();
  }
});

typeBox.addEventListener("keydown", function (e) {
  if (e.keyCode === 61) {
    solve();
  }
});
