// ページ読み込み時にアニメーションを表示
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  
  // 1秒後にローダーを非表示にする
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000); // 1000ミリ秒（1秒）
});
