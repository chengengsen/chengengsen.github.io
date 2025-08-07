// 高德地图初始化
function initMap() {
  // 替换为你的高德地图API Key
  const map = new AMap.Map('company-map', {
    zoom: 17,
    center: [114.025, 22.535], // 深圳NEO大厦经纬度
    viewMode: '3D'
  });

  // 添加标记
  const marker = new AMap.Marker({
    position: [114.025, 22.535],
    map: map,
    title: '智玩科技总部'
  });

  // 信息窗口
  const infoWindow = new AMap.InfoWindow({
    content: '<div style="padding:10px;">' +
             '<h4>智玩科技</h4>' +
             '<p>深圳市福田区车公庙NEO大厦A座18层</p>' +
             '<p>营业时间: 9:00-18:00 (工作日)</p>' +
             '</div>'
  });

  // 点击标记显示信息窗口
  marker.on('click', function() {
    infoWindow.open(map, marker.getPosition());
  });

  // 自动打开信息窗口
  infoWindow.open(map, marker.getPosition());
}

// 加载高德地图API
if (typeof AMap !== 'undefined') {
  initMap();
} else {
  const script = document.createElement('script');
  script.src = `https://webapi.amap.com/maps?v=2.0&key=你的高德地图KEY&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
  window.initMap = initMap;
}