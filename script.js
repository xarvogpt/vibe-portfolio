// 스무스 스크롤 기능
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// 콘솔에 환영 메시지 출력
console.log('포트폴리오 사이트에 오신 것을 환영합니다! 🚀');
