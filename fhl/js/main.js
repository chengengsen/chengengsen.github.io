// 导航栏移动端切换
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navbar = document.querySelector('.navbar ul');

  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // 轮播横幅自动切换
  const banners = [
    {
      title: "人工智能解决方案",
      desc: "为企业提供定制化AI服务",
      image: "images/ai-toy-banner.jpg",
      cta: "了解更多"
    },
    {
      title: "情感交互玩具",
      desc: "让玩具理解孩子的情绪",
      image: "images/emotion-toy-banner.jpg",
      cta: "查看案例"
    }
  ];

  let currentBanner = 0;
  const bannerContent = document.querySelector('.banner-content');
  
  function changeBanner() {
    currentBanner = (currentBanner + 1) % banners.length;
    const banner = banners[currentBanner];
    
    // 更新背景图
    document.querySelector('.hero-banner').style.backgroundImage = 
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.image})`;
    
    // 更新内容
    bannerContent.querySelector('h1').textContent = banner.title;
    bannerContent.querySelector('p').textContent = banner.desc;
    bannerContent.querySelector('a').textContent = banner.cta;
  }

  // 每5秒切换一次
  setInterval(changeBanner, 5000);

  // 服务方案标签切换
  const tabs = document.querySelectorAll('.service-tabs .tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // 移除所有active类
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // 添加当前active类
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});