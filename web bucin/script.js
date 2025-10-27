// Fungsi ini dijalankan saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // ===========================================
    // === BAGIAN 1: HUJAN HATI (OTOMATIS) ===
    // ===========================================
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        heart.style.left = Math.random() * 95 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        const size = Math.random() * 20 + 10;
        heart.style.fontSize = size + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000); 
    }

    // Panggil fungsi createHeart setiap 300 milidetik
    setInterval(createHeart, 300);

    
    // ▼▼▼ BARU: BAGIAN 1B: HUJAN ANIMASI TAMBAHAN (SPARKLE) ▼▼▼
    
    // Daftar emoji untuk animasi tambahan
    const sparkles = ['✨', '💕', '💛', '💜', '💖'];

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle'); // Pakai class CSS baru .sparkle

        // 1. Ambil emoji acak dari daftar
        const randomEmoji = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.innerHTML = randomEmoji; // Pakai innerHTML agar emoji terbaca

        // 2. Posisi horizontal acak
        sparkle.style.left = Math.random() * 95 + 'vw';
        
        // 3. Durasi animasi acak (dibuat sedikit beda dari hati)
        sparkle.style.animationDuration = (Math.random() * 6 + 4) + 's'; // Antara 4-10 detik

        // 4. Ukuran acak
        const size = Math.random() * 10 + 10; // Antara 10px - 20px
        sparkle.style.fontSize = size + 'px';
        
        // 5. Opacity acak (dibuat sedikit lebih jelas)
        sparkle.style.opacity = Math.random() * 0.5 + 0.5; // Antara 0.5 - 1.0

        document.body.appendChild(sparkle);

        // 6. Hapus setelah selesai (sesuai durasi maks)
        setTimeout(() => {
            sparkle.remove();
        }, 10000); // 10 detik
    }

    // Panggil fungsi createSparkle (buat intervalnya beda agar tidak barengan)
    setInterval(createSparkle, 500); // Hujan sparkle setiap 0.5 detik

    // ▲▲▲ BATAS AKHIR BAGIAN BARU ▲▲▲


    // ==================================================
    // === BAGIAN 2: JEJAK HATI MOUSE (INTERAKTIF) ===
    // ==================================================

    let canCreateMouseHeart = true; 

    function createMouseHeart(x, y) {
        const mouseHeart = document.createElement('div');
        mouseHeart.classList.add('mouse-heart');
        mouseHeart.style.left = (x - 10) + 'px';
        mouseHeart.style.top = (y - 10) + 'px';
        const size = Math.random() * 15 + 10;
        mouseHeart.style.fontSize = size + 'px';
        
        document.body.appendChild(mouseHeart);

        setTimeout(() => {
            mouseHeart.remove();
        }, 1000); 
    }

    document.addEventListener('mousemove', (e) => {
        if (canCreateMouseHeart) {
            createMouseHeart(e.clientX, e.clientY);
            canCreateMouseHeart = false; 
            
            setTimeout(() => {
                canCreateMouseHeart = true;
            }, 50);
        }
    });

    // ==================================================
    // === BAGIAN 3: LOGIKA PANTUN INTERAKTIF ===
    // ==================================================

    // 1. Definisikan array (daftar) pantunnya
    const messages = [
        { line1: "Hai Kamu...", line2: "Aku ada sesuatu nih" },
        { line1: "Ikan hiu bawa koper", line2: '<img src="dudu-bubu-cute-gif.gif" class="pantun-gif">' },
        { line1: "I love you forever", line2: '<img src="bubu-dudu-sseeyall.gif" class="pantun-gif">' },
        { line1: "Sate apa yg bikin aku bahagia?", line2: '<img src="bubu-dudu-sseeya.gif" class="pantun-gif">' },
        { line1: "Saterusnya sama kamu", line2: '<img src="bubududu.gif" class="pantun-gif">' },
        { line1: "Jalan-jalan ke Papua", line2: "Jangan lupa beli manisan" },
        { line1: "Walau kita tak bersua", line2: "Cintaku takkan terhapuskan" },
        { line1: "Yang terakhir nihh...", line2: "Buat MyPrincess" },
        { line1: "Makasih ya...", line2: "Udah lihat ini semua ❤️" }
    ];


    let messageIndex = 0; 

    // 2. Ambil elemen-elemen dari HTML
    const startContainer = document.getElementById('start-container');
    const startButton = document.getElementById('startButton');
    const mainMessage = document.getElementById('mainMessage');
    const nextButton = document.getElementById('nextButton');
    const textLine1 = document.getElementById('text-line1');
    const textLine2 = document.getElementById('text-line2');
    const song = document.getElementById('song');
    const finalScreen = document.getElementById('final-screen');

    // 3. Fungsi untuk menampilkan pesan (menggunakan .innerHTML)
    function showMessage(index) {
        textLine1.textContent = messages[index].line1;
        textLine2.innerHTML = messages[index].line2; 
    }

    // 4. Event listener untuk Tombol START
    startButton.addEventListener('click', () => {
        startContainer.style.display = 'none'; 
        mainMessage.classList.add('show');
        song.play(); 
        showMessage(messageIndex);
    });

    // 5. Event listener untuk Tombol NEXT
    nextButton.addEventListener('click', () => {
        messageIndex++; 
        
        if (messageIndex < messages.length) {
            showMessage(messageIndex);
        } 
        else if (messageIndex === messages.length) {
            mainMessage.style.display = 'none';
            finalScreen.style.display = 'block'; 
        }
    });
});