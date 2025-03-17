let currentVideoContainer = null;

function addTodo() {
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        
        // Checkbox oluştur
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        li.appendChild(checkbox);
        
        // Metin ekle
        const textSpan = document.createElement('span');
        textSpan.className = 'todo-text';
        textSpan.textContent = input.value;
        li.appendChild(textSpan);
        
        // Silme butonu ekle
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            list.removeChild(li);
        };
        li.appendChild(deleteBtn);
        
        list.appendChild(li);
        input.value = "";
    }
}

// Sayfa yüklendiğinde profil bilgilerini doldur
document.addEventListener('DOMContentLoaded', () => {
    // Varsayılan profil bilgileri - boş
    const defaultProfile = {
        name: "Kullanıcı",
        role: "Öğrenci",
        education: [],
        skills: [],
        interests: [],
        about: ""
    };

    // localStorage'dan profil bilgilerini al veya varsayılan değerleri kullan
    let userProfile = JSON.parse(localStorage.getItem('userProfile')) || defaultProfile;

    // Kullanıcı adını güncelle
    document.querySelector('.settings-icon').setAttribute('title', userProfile.name);

    // Grafik verilerini güncelle
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    window.myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Kariyer Planlama', 'Kişisel Gelişim', 'Eğitim', 'Beceri Geliştirme'],
            datasets: [{
                data: [25, 25, 25, 25],
                backgroundColor: ['#2c3e50', '#95a5a6', '#f1c40f', '#e74c3c']
            }]
        }
    });

    // Video başlıklarını düzenlenebilir yap
    const videoTitles = document.querySelectorAll('.video-title');
    videoTitles.forEach((titleElement, index) => {
        titleElement.textContent = `Video ${index + 1}`;
        titleElement.contentEditable = true;
        titleElement.addEventListener('blur', function() {
            if (this.textContent.trim() === '') {
                this.textContent = `Video ${index + 1}`;
            }
        });
    });

    // Video butonlarına tıklama olayı ekle
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const container = this.closest('.video-container');
            const videoUrl = container.getAttribute('data-url');
            if (videoUrl) {
                window.open(videoUrl, '_blank');
            }
        });
    });

    // Modal close tuşu için event listener
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
});

function openModal(button) {
    currentVideoContainer = button.closest('.video-container');
    document.getElementById('videoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
    // Modal içindeki input alanlarını temizle
    document.getElementById('videoTitle').value = '';
    document.getElementById('videoUrl').value = '';
    // currentVideoContainer'ı sıfırla
    currentVideoContainer = null;
}

function saveVideo() {
    const title = document.getElementById('videoTitle').value;
    const url = document.getElementById('videoUrl').value;
    
    if (title && url) {
        currentVideoContainer.querySelector('.video-title').textContent = title;
        currentVideoContainer.setAttribute('data-url', url);
        
        // YouTube video ID'sini al
        const videoId = getYouTubeVideoId(url);
        if (videoId) {
            // Thumbnail URL'sini oluştur
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            
            // Video placeholder'ı güncelle
            const placeholder = currentVideoContainer.querySelector('.video-placeholder');
            placeholder.style.backgroundImage = `url(${thumbnailUrl})`;
            placeholder.style.backgroundSize = 'cover';
            placeholder.style.backgroundPosition = 'center';
        }
        
        closeModal();
    }
}

// YouTube video ID'sini URL'den çıkar
function getYouTubeVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function deleteVideo(button) {
    const container = button.closest('.video-container');
    container.querySelector('.video-title').textContent = `Video ${Array.from(document.querySelectorAll('.video-container')).indexOf(container) + 1}`;
    container.setAttribute('data-url', '');
    
    // Thumbnail'i kaldır
    const placeholder = container.querySelector('.video-placeholder');
    placeholder.style.backgroundImage = 'none';
    placeholder.style.backgroundColor = '#f0f0f0';
}

// Modal dışına tıklandığında kapatma
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}
