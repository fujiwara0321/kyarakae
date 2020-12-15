let type = performance.navigation.type;

if (type == 1){
    let bg = document.getElementById('loader-bg'),
    loader = document.getElementById('loader');
/* ロード画面の非表示を解除 */
bg.classList.remove('is-hide');
loader.classList.remove('is-hide');

/* 読み込み完了 */
window.addEventListener('load', function(){
    bg.classList.add('fadeout-bg');
    loader.classList.add('fadeout-loader');
});

/* 10秒経ったら強制的にロード画面を非表示にする */
// setTimeout(`stopload()`,3000);

/* ロード画面を非表示にする処理 */


}