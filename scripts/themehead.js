(function() {
    // 配置路径
    const lightPath = '../css/style.css';
    const darkPath = '../css/style-dark.css';
    
    // 读取本地存储，默认为 'auto'
    const savedMode = localStorage.getItem('theme-mode') || 'auto';
    const cssLink = document.getElementById('main-css');
    
    let isDark = false;

    // 判断逻辑
    if (savedMode === 'auto') {
        // Auto 模式：检查系统设置
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
        // 手动模式：检查是否为 'dark'
        isDark = (savedMode === 'dark');
    }

    // 如果计算结果需要深色，立刻替换 href
    // 这里的 cssLink 必须存在，且如果是深色才执行操作
    if (isDark && cssLink) {
        cssLink.setAttribute('href', darkPath);
    }
})();