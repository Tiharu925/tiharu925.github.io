// GPS センサの値が変化したら何らか実行する geolocation.watchPosition メソッド
navigator.geolocation.watchPosition( (position) => {
    var lat  = position.coords.latitude;            // 緯度を取得
    var lng  = position.coords.longitude;           // 経度を取得
    var accu = position.coords.accuracy;            // 緯度・経度の精度を取得
    displayData(lat, lng, accu);                    // displayData 関数を実行
}, (error) => {                                     // エラー処理（今回は特に何もしない）
}, {
    enableHighAccuracy: true                        // 高精度で測定するオプション
});
 
// データを表示する displayData 関数
function displayData(lat, lng, accu) {
    var txt = document.getElementById("txt");       // データを表示するdiv要素の取得
    txt.innerHTML = "緯度, 経度: " + lat + ", " + lng + "<br>"  // データ表示
                  + "精度: "       + accu;
}

function Distance(X,Y,DX,DY) {
    
}
