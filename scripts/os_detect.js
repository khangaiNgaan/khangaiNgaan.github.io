function detectOS() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('windows nt')) {
        return 'windows';
    } else if (ua.includes('mac os x')) {
        return 'macos';
    } else if (ua.includes('linux')) {
        return 'linux';
    } else if (ua.includes('android')) {
        return 'aosp';
    } else if (ua.includes('iphone') || ua.includes('ipad')) {
        return 'ios';
    } else {
        return 'unknown';
    }
}

const os = detectOS();
document.documentElement.classList.add(`os-${os}`);
console.log(`Detected OS: ${os}`);