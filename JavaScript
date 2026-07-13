// ============================================
// 🌟 JavaScript - الموقع الاحترافي لإسلام
// ============================================

// ============================================
// ⭐ 1. إنشاء النجوم
// ============================================
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.setProperty('--duration', duration + 's');
        star.style.animationDelay = delay + 's';
        
        starsContainer.appendChild(star);
    }
}

// ============================================
// ⌨️ 2. تأثير الكتابة للاسم
// ============================================
function typeName() {
    const nameElement = document.getElementById('typingName');
    const name = 'إسلام';
    let index = 0;
    
    nameElement.textContent = '';
    nameElement.classList.add('typing-effect');
    
    function type() {
        if (index < name.length) {
            nameElement.textContent += name[index];
            index++;
            setTimeout(type, 200);
        }
    }
    
    setTimeout(type, 500);
}

// ============================================
// 🚀 3. بدء التجربة
// ============================================
function startExperience() {
    const intro = document.getElementById('introScreen');
    const main = document.getElementById('mainContent');
    
    intro.classList.add('hidden');
    
    setTimeout(() => {
        intro.style.display = 'none';
        main.style.display = 'block';
        document.body.style.overflow = 'auto';
        
        // بدء العداد
        startCounter();
        
        // بدء المؤقت للرسالة السرية
        setTimeout(showSecretMessage, 30000);
        
        // تشغيل الألعاب النارية بعد 5 ثواني من الدخول
        setTimeout(() => {
            document.getElementById('finaleSection').style.display = 'block';
            initFireworks();
        }, 4000);
        
    }, 1500);
}

// ============================================
// ⏳ 4. عداد الوقت من 12/07/2025
// ============================================
function startCounter() {
    const targetDate = new Date('2025-07-12T00:00:00');
    
    function updateCounter() {
        const now = new Date();
        const diff = now - targetDate;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }
    }
    
    updateCounter();
    setInterval(updateCounter, 1000);
}

// ============================================
// 🎵 5. تشغيل الموسيقى
// ============================================
let isMusicPlaying = false;
const music = document.getElementById('bgMusic');

function toggleMusic() {
    const btn = document.querySelector('.music-btn');
    
    if (isMusicPlaying) {
        music.pause();
        btn.textContent = '🎵 تشغيل الموسيقى';
        btn.classList.remove('playing');
    } else {
        music.play().catch(() => {});
        btn.textContent = '🔇 إيقاف الموسيقى';
        btn.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
}

// ============================================
// 🌹 6. زر المفاجأة - فتح الظرف
// ============================================
function showSurprise() {
    const envelopeSection = document.getElementById('envelopeSection');
    envelopeSection.style.display = 'flex';
    
    // تمرير سلس للظرف
    envelopeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const secretMsg = document.getElementById('secretMessage');
    
    envelope.classList.toggle('open');
    
    setTimeout(() => {
        secretMsg.style.display = 'block';
        secretMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 800);
}

// ============================================
// 💌 7. الرسالة السرية بعد 30 ثانية
// ============================================
function showSecretMessage() {
    // نضيف إشعار صغير يظهر للمستخدم
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ff6b9d, #c0392b);
        color: #fff;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-size: 1.1rem;
        box-shadow: 0 10px 40px rgba(255, 107, 157, 0.5);
        z-index: 999;
        animation: fadeInUp 0.8s ease;
        cursor: pointer;
        text-align: center;
        max-width: 90%;
    `;
    notification.textContent = '💌 لديك رسالة سرية! اضغط هنا لفتحها';
    
    document.body.appendChild(notification);
    
    notification.addEventListener('click', function() {
        this.remove();
        showSurprise();
        setTimeout(openEnvelope, 500);
    });
    
    // إزالة الإشعار بعد 10 ثواني
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s';
            setTimeout(() => notification.remove(), 500);
        }
    }, 10000);
}

// ============================================
// 🎆 8. الألعاب النارية
// ============================================
function initFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // جزيئات الألعاب النارية
    let particles = [];
    
    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 2;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.alpha = 1;
            this.decay = Math.random() * 0.02 + 0.01;
            this.size = Math.random() * 4 + 2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.05; // جاذبية
            this.vx *= 0.99;
            this.vy *= 0.99;
            this.alpha -= this.decay;
            this.size *= 0.995;
        }
        
        draw(ctx) {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    const colors = [
        '#ff6b9d', '#ff2d75', '#ffb3c6', '#ff1493',
        '#ff4500', '#ff6348', '#ffa502', '#ffd93d',
        '#6c5ce7', '#a29bfe', '#00b894', '#00cec9',
        '#fd79a8', '#e17055', '#fdcb6e'
    ];
    
    function createExplosion(x, y) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const count = Math.floor(Math.random() * 40) + 30;
        for (let i = 0; i < count; i++) {
            particles.push(new Particle(x, y, color));
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // إنشاء انفجارات جديدة
        if (Math.random() < 0.08) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height * 0.7;
            createExplosion(x, y);
        }
        
        // تحديث ورسم الجزيئات
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw(ctx);
            if (particles[i].alpha <= 0 || particles[i].size < 0.3) {
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // إضافة بعض الانفجارات الأولية
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height * 0.6;
                createExplosion(x, y);
            }, i * 300);
        }
    }, 300);
}

// ============================================
// 💖 9. إنشاء قلوب طائرة
// ============================================
function createFloatingHearts() {
    const hearts = ['❤️', '💖', '💗', '💝', '♥️'];
    const container = document.getElementById('mainContent');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 30 + 20}px;
            left: ${Math.random() * 100}%;
            bottom: -30px;
            z-index: 999;
            pointer-events: none;
            opacity: 0.8;
            animation: floatHeart ${Math.random() * 6 + 4}s linear forwards;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 1500);
}

// ============================================
// 🎬 10. إضافة أنماط CSS ديناميكية للقلوب
// ============================================
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes floatHeart {
        0% { transform: translateY(0) rotate(0deg) scale(0.5); opacity: 0.8; }
        50% { transform: translateY(-50vh) rotate(20deg) scale(1.2); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(-20deg) scale(0.5); opacity: 0; }
    }
    
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);

// ============================================
// 🚀 11. تشغيل كل شيء عند تحميل الصفحة
// ============================================
window.addEventListener('DOMContentLoaded', function() {
    createStars();
    typeName();
    createFloatingHearts();
    
    // منع التمرير في شاشة البداية
    document.body.style.overflow = 'hidden';
});
