// Chat geçmişini tutacak dizi
let chatHistory = [];
let currentChatId = null;
let chats = JSON.parse(localStorage.getItem('chats')) || [];

// Sistem mesajı
const systemMessage = `Sen Gençlik ve Spor Bakanlığı'nın KariyerAI adlı yapay zeka asistanısın. 
Görevin gençlere kariyer planlaması ve sınav hazırlığı konusunda yardımcı olmak. 

Temel Özellikler:
- Her zaman Türkçe yanıt ver
- Nazik, yardımsever ve profesyonel ol
- Gençlerin ilgi alanlarını, yeteneklerini ve hedeflerini derinlemesine analiz et
- Kişiselleştirilmiş öneriler sun
- Güncel iş piyasası trendlerini göz önünde bulundur
- Eğitim fırsatları ve staj programları hakkında bilgi ver
- Kariyer değişikliği isteyenler için alternatif yollar öner

Önerilen Kaynaklar ve Kullanım Kriterleri:
1. BTK Akademi (https://www.btkakademi.gov.tr/portal):
   - Teknoloji ve bilişim alanında eğitim almak isteyenler
   - Dijital becerilerini geliştirmek isteyenler
   - Siber güvenlik ve yazılım geliştirme konularında kendini geliştirmek isteyenler
   - BTK sertifikaları almak isteyenler

2. E-Rehberlik (https://e-rehberlik.gsb.gov.tr/testList):
   - Kariyer testleri çözmek isteyenler
   - Meslek seçimi yapmak isteyenler
   - Yetenek ve ilgi alanlarını keşfetmek isteyenler
   - Kişilik analizi yapmak isteyenler

3. MK Veritabanları (https://mk.gov.tr/veritabanları/Veritabanlar%C4%B1%20Listesi/liste):
   - Akademik araştırma yapmak isteyenler
   - Tez yazacak öğrenciler
   - Bilimsel makale taraması yapacaklar
   - Akademik kaynaklara ulaşmak isteyenler

4. Hemba (https://www.hemba.gov.tr/):
   - İş arayan gençler
   - Staj fırsatları arayanlar
   - Kariyer danışmanlığı almak isteyenler
   - İş piyasası trendlerini takip etmek isteyenler

5. İŞKUR Programları (https://www.iskur.gov.tr/is-arayan/aktif-isgucu-programlari/):
   - İş arayanlar
   - Meslek edinmek isteyenler
   - İşsizlik sigortası hakkında bilgi almak isteyenler
   - Aktif işgücü programlarına katılmak isteyenler

6. Mentorum (https://mentorum.gsb.gov.tr/):
   - Mentorluk almak isteyenler
   - Kariyer danışmanlığı almak isteyenler
   - Sektör profesyonelleriyle tanışmak isteyenler
   - Kariyer yolculuğunda rehberlik almak isteyenler

7. YÖK Tez Merkezi (https://tez.yok.gov.tr/UlusalTezMerkezi/):
   - Tez yazacak öğrenciler
   - Akademik araştırma yapacaklar
   - Benzer tezleri incelemek isteyenler
   - Akademik çalışmalar için kaynak arayanlar

PDF Analiz ve Öneriler:
1. Program Türüne Göre:
   - Ders Programı:
     * Derslerin zorluk seviyelerine göre çalışma stratejileri
     * Dersler arası geçişlerde zaman yönetimi
     * Derslere göre kariyer fırsatları
     * Ders dışı aktiviteler için zaman planlaması
   
   - Sınav Programı:
     * Sınav tarihlerine göre çalışma planı
     * Ders bazlı çalışma stratejileri
     * Sınav öncesi hazırlık teknikleri
     * Stres yönetimi ve motivasyon
   
   - Staj Programı:
     * Staj fırsatları ve başvuru süreçleri
     * Sektör deneyimi kazanma yolları
     * Kariyer gelişimi için öneriler
     * Networking fırsatları
   
   - Etkinlik Programı:
     * Sosyal etkinlikler ve kulüpler
     * Kişisel gelişim fırsatları
     * Networking etkinlikleri
     * Hobiler ve ilgi alanları

2. Eğitim Seviyesine Göre:
   - Lise:
     * Üniversite hazırlık süreci
     * Ders çalışma teknikleri
     * Sınav stratejileri
     * Kariyer hedeflerini belirleme
     * Meslek seçimi
     * Sosyal etkinlikler
     * Yetenek geliştirme
     * Üniversite tercihleri
   
   - Üniversite:
     * 1. Sınıf:
       - Üniversite hayatına adaptasyon
       - Temel derslere odaklanma
       - Sosyal çevre oluşturma
       - Kariyer hedeflerini belirleme
     
     * 2. Sınıf:
       - Bölüm derslerine odaklanma
       - İlk staj deneyimleri
       - Kariyer yönlendirmesi
       - Sosyal etkinliklere katılım
     
     * 3. Sınıf:
       - İleri seviye dersler
       - Staj ve iş deneyimi
       - Kariyer planlaması
       - Sektör araştırması
     
     * 4. Sınıf:
       - Bitirme projesi
       - İş başvuruları
       - Kariyer geçişi
       - Sertifika ve kurslar
     
     * Mezun:
       - İş arama stratejileri
       - Kariyer değişikliği
       - Sertifika ve kurs önerileri
       - Networking fırsatları

3. Kullanıcı Amacına Göre:
   - Çalışma Programı İsteyenler:
     * Günlük/haftalık çalışma planı
     * Ders çalışma teknikleri
     * Zaman yönetimi önerileri
     * Verimli çalışma stratejileri
   
   - Kariyer Önerileri İsteyenler:
     * Derslere uygun meslek seçenekleri
     * Sektör analizleri
     * Kariyer yolları
     * İş piyasası trendleri
   
   - Sınav Hazırlığı İsteyenler:
     * Konu tekrar stratejileri
     * Soru çözüm teknikleri
     * Sınav öncesi hazırlık planı
     * Stres yönetimi
   
   - Staj/İş Deneyimi İsteyenler:
     * Staj fırsatları
     * İş başvuru stratejileri
     * Deneyim kazanma yolları
     * Networking önerileri
   
   - Sosyal Etkinlikler İsteyenler:
     * Kulüp önerileri
     * Etkinlik planlaması
     * Networking fırsatları
     * Hobiler ve ilgi alanları

Yanıt Formatı:
- Açık ve anlaşılır bir dil kullan
- Madde işaretleri ile önerileri listele
- Gerektiğinde örnekler ver
- İlgili kaynaklar ve linkler ekle
- Motivasyonel ve cesaretlendirici bir ton kullan
- Kullanıcının eğitim seviyesine, program türüne ve amacına özel öneriler sun
- Güncel ve pratik çözümler öner
- Adım adım yönlendirme yap

Yüklenen PDF dosyasını ve kullanıcının cevaplarını detaylı analiz et, kişiye özel öneriler sun ve sürekli destek ol.`;

// DOM elementlerini seç
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendMessage');

// API endpoint'i
const API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Sohbet geçmişini temizle
    chats = [];
    saveChats();
    
    // Yeni sohbet oluştur
    createNewChat();
});

// Yeni sohbet oluştur
function createNewChat() {
    const chatId = Date.now().toString();
    
    // Yeni sohbeti oluştur
    chats.push({
        id: chatId,
        messages: []
    });
    
    currentChatId = chatId;
    saveChats();
    clearChatMessages();
    
    // Yeni sohbet için hoş geldin mesajını göster
    const welcomeMessage = "Merhaba! Ben KariyerAI, kariyer planlamanızda size yardımcı olmak için buradayım. 🤖 Kişiselleştirilmiş bir kullanıcı deneyimi için PDF olarak yüklediğiniz dosyaları tarayarak deneyimi üst düzeye çıkaralım. Kariyer hedefleriniz, ilgi alanlarınız veya yetenekleriniz hakkında şimdi konuşmaya başlayalım. 🚀 Size nasıl yardımcı olabilirim?";
    appendMessage('ai-message', welcomeMessage);
    
    // Sohbet listesini güncelle
    updateChatList();
}

// PDF yükleme ve okuma fonksiyonu
async function handlePdfUpload(event) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
        // PDF önizleme alanını göster
        const pdfPreview = document.getElementById('pdfPreview');
        const pdfFileName = document.getElementById('pdfFileName');
        pdfFileName.textContent = file.name;
        pdfPreview.style.display = 'flex';
        
        // PDF dosyasını geçici olarak sakla
        window.selectedPdfFile = file;
        window.pdfContent = null; // PDF içeriğini saklamak için

        // Yükleniyor mesajını ekle
        const loadingMessage = createLoadingMessage();

        try {
            window.pdfContent = await readPdfContent(file);
            
            // Yükleniyor mesajını kaldır
            loadingMessage.remove();
            
            // PDF içeriğinde program kelimesi geçiyorsa yapay zeka program türünü ve sınıf bilgisini sorsun
            if (window.pdfContent.toLowerCase().includes('program')) {
                appendMessage('ai-message', 'Size daha iyi yardımcı olabilmem için birkaç bilgiye ihtiyacım var:\n\n1. Bu programın türü nedir?\n- Ders programı\n- Sınav programı\n- Staj programı\n- Etkinlik programı\n\n2. Hangi eğitim seviyesindesiniz?\n- Lise\n- 1. Sınıf\n- 2. Sınıf\n- 3. Sınıf\n- 4. Sınıf\n- Mezun\n\n3. Bu programla ne yapmak istiyorsunuz?\n- Çalışma programı oluşturmak\n- Derslere uygun kariyer önerileri almak\n- Sınav hazırlık stratejisi belirlemek\n- Staj/iş deneyimi planlamak\n- Sosyal etkinlikler planlamak\n\nLütfen bu bilgileri paylaşır mısınız?\n\nEğer başka bir şey analiz etmek isterseniz, <button class="analyze-other-button" onclick="startNewAnalysis()"><i class="fas fa-search"></i> Başka bir şey analiz edeceğim</button> butonuna tıklayabilirsiniz.');
            } else {
                appendMessage('ai-message', 'Bu PDF bir program içermiyor gibi görünüyor. Eğer başka bir şey analiz etmek isterseniz, <button class="analyze-other-button" onclick="startNewAnalysis()"><i class="fas fa-search"></i> Başka bir şey analiz edeceğim</button> butonuna tıklayabilirsiniz.');
            }
        } catch (error) {
            console.error('PDF okuma hatası:', error);
            // Yükleniyor mesajını kaldır
            loadingMessage.remove();
            appendMessage('ai-message', 'PDF dosyası okunurken bir hata oluştu. Lütfen tekrar deneyin.');
        }
    } else {
        appendMessage('ai-message', 'Lütfen geçerli bir PDF dosyası yükleyin.');
    }
}

// PDF içeriğini okuma fonksiyonu
async function readPdfContent(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + '\n';
        }
        return fullText;
    } catch (error) {
        console.error('PDF okuma hatası:', error);
        throw error;
    }
}

// Yeni analiz başlatma fonksiyonu
function startNewAnalysis() {
    // Kullanıcıya mesaj gönder
    appendMessage('ai-message', 'Ne analiz etmek istediğinizi yazabilirsiniz. Size yardımcı olmaktan mutluluk duyarım!');
}

// Sohbet listesini güncelle
function updateChatList() {
    const chatList = document.querySelector('.chat-list');
    chatList.innerHTML = '';
    
    chats.forEach((chat, index) => {
        const chatItem = document.createElement('div');
        chatItem.className = `chat-item ${chat.id === currentChatId ? 'active' : ''}`;
        chatItem.setAttribute('data-id', chat.id);
        
        // Sohbet başlığını belirle
        let chatTitle = 'Yeni Sohbet';
        if (chat.messages && chat.messages.length > 0) {
            const firstUserMessage = chat.messages.find(m => m.role === 'user');
            if (firstUserMessage) {
                chatTitle = firstUserMessage.content.substring(0, 30) + (firstUserMessage.content.length > 30 ? '...' : '');
            }
        }
        
        chatItem.innerHTML = `
            <i class="fas fa-comment"></i>
            <span>${chatTitle}</span>
            <i class="fas fa-times delete-chat"></i>
        `;
        
        chatItem.addEventListener('click', (e) => {
            if (!e.target.classList.contains('delete-chat')) {
                loadChat(chat.id);
            }
        });
        
        chatItem.querySelector('.delete-chat').addEventListener('click', () => {
            deleteChat(chat.id);
        });
        
        chatList.appendChild(chatItem);
    });
}

// Sohbet yükle
function loadChat(chatId) {
    const chat = chats.find(c => c.id === chatId);
    if (chat) {
        // Mevcut sohbetin mesajlarını kaydet
        if (currentChatId) {
            const currentChat = chats.find(c => c.id === currentChatId);
            if (currentChat) {
                currentChat.messages = Array.from(chatMessages.children).map(msg => ({
                    role: msg.classList.contains('user-message') ? 'user' : 'assistant',
                    content: msg.textContent,
                    className: msg.className // CSS sınıfını da kaydet
                }));
                saveChats();
            }
        }
        
        currentChatId = chatId;
        clearChatMessages();
        
        // Eğer sohbette mesaj varsa, mesajları yükle
        if (chat.messages && chat.messages.length > 0) {
            chat.messages.forEach(message => {
                appendMessage(message.className || (message.role === 'user' ? 'user-message' : 'ai-message'), message.content);
            });
        } else {
            // Eğer sohbette mesaj yoksa, hoş geldin mesajını göster
            const welcomeMessage = "Merhaba! Ben KariyerAI, kariyer planlamanızda size yardımcı olmak için buradayım. 🤖 Kişiselleştirilmiş bir kullanıcı deneyimi için PDF olarak yüklediğiniz dosyaları tarayarak deneyimi üst düzeye çıkaralım. Kariyer hedefleriniz, ilgi alanlarınız veya yetenekleriniz hakkında şimdi konuşmaya başlayalım. 🚀 Size nasıl yardımcı olabilirim?";
            appendMessage('ai-message', welcomeMessage);
        }
        
        updateChatList();
    }
}

// Sohbet sil
function deleteChat(chatId) {
    chats = chats.filter(chat => chat.id !== chatId);
    if (currentChatId === chatId) {
        currentChatId = null;
        clearChatMessages();
    }
    saveChats();
    updateChatList();
}

// Sohbetleri kaydet
function saveChats() {
    localStorage.setItem('chats', JSON.stringify(chats));
}

// Mesajları ekrana ekleyen yardımcı fonksiyon
function appendMessage(className, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    
    // Mesaj içeriğini satır satır böl ve her satırı ayrı bir paragraf olarak ekle
    const lines = content.split('\n');
    lines.forEach(line => {
        if (line.trim()) {
            const p = document.createElement('p');
            
            // URL'leri ve butonları bul
            const urlRegex = /(https?:\/\/[^\s]+)/g;
            const buttonRegex = /<button[^>]*>.*?<\/button>/g;
            const parts = line.split(/(<button[^>]*>.*?<\/button>|https?:\/\/[^\s]+)/g);
            
            parts.forEach(part => {
                if (part.match(urlRegex)) {
                    // Link oluştur
                    const link = document.createElement('a');
                    link.href = part;
                    link.textContent = part;
                    link.target = '_blank';
                    link.style.color = '#0044cc';
                    link.style.textDecoration = 'underline';
                    link.style.cursor = 'pointer';
                    p.appendChild(link);
                } else if (part.match(buttonRegex)) {
                    // Buton HTML'ini doğrudan ekle
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = part;
                    const button = tempDiv.firstChild;
                    p.appendChild(button);
                } else {
                    // Normal metin
                    p.appendChild(document.createTextNode(part));
                }
            });
            
            p.style.margin = '5px 0';
            messageDiv.appendChild(p);
        }
    });

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Sohbet mesajlarını temizle
function clearChatMessages() {
    chatMessages.innerHTML = '';
}

// Yeni sohbet butonuna tıklama olayı
document.querySelector('.new-chat-button').addEventListener('click', createNewChat);

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    updateChatList();
    if (chats.length === 0) {
        createNewChat();
    } else {
        loadChat(chats[0].id);
    }
});

// PDF yükleme butonuna tıklama olayı
document.getElementById('uploadPdfButton').addEventListener('click', () => {
    document.getElementById('pdfInput').click();
});

// PDF silme butonuna tıklama olayı
document.getElementById('removePdfButton').addEventListener('click', () => {
    // PDF önizleme alanını gizle
    document.getElementById('pdfPreview').style.display = 'none';
    // PDF input alanını temizle
    document.getElementById('pdfInput').value = '';
    // Seçili PDF dosyasını ve içeriğini temizle
    window.selectedPdfFile = null;
    window.pdfContent = null;
});

// PDF input değişikliği izle
document.getElementById('pdfInput').addEventListener('change', handlePdfUpload);

// Event listener'ları ekle
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Yeni sohbet butonuna tıklama olayı ekle
document.querySelector('.new-chat-button').addEventListener('click', createNewChat);

// API yanıtı alma fonksiyonu
async function getAIResponse(message, pdfContent = null) {
    try {
        let fullMessage = systemMessage;
        
        if (pdfContent) {
            fullMessage += `\n\nPDF İçeriği:\n${pdfContent}`;
        }
        
        fullMessage += `\n\nKullanıcı: ${message}\nAsistan:`;
        
        const response = await fetch(`${API_ENDPOINT}?key=${window.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: fullMessage
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error('API yanıt vermedi');
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('API hatası:', error);
        throw error;
    }
}

// Yükleniyor mesajı oluşturma fonksiyonu
function createLoadingMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message loading-message';
    
    const dotsDiv = document.createElement('div');
    dotsDiv.className = 'loading-dots';
    
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'loading-dot';
        dotsDiv.appendChild(dot);
    }
    
    messageDiv.appendChild(dotsDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}

// Mesaj gönderme fonksiyonu
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage && !window.pdfContent) return;

    // Kullanıcı mesajını ekrana ekle
    if (userMessage) {
        appendMessage('user-message', userMessage);
    }

    // PDF varsa, PDF'i de mesaj olarak ekle
    if (window.selectedPdfFile) {
        const pdfMessage = `📎 PDF Dosyası: ${window.selectedPdfFile.name}`;
        appendMessage('user-message', pdfMessage);
    }

    userInput.value = '';

    // Yükleniyor mesajını ekle
    const loadingMessage = createLoadingMessage();

    try {
        // AI yanıtını al
        const aiResponse = await getAIResponse(userMessage, window.pdfContent);
        
        // Yükleniyor mesajını kaldır
        loadingMessage.remove();
        
        // AI yanıtını ekrana ekle
        appendMessage('ai-message', aiResponse);

        // Mevcut sohbetin mesajlarını güncelle
        if (currentChatId) {
            const currentChat = chats.find(c => c.id === currentChatId);
            if (currentChat) {
                currentChat.messages = Array.from(chatMessages.children).map(msg => ({
                    role: msg.classList.contains('user-message') ? 'user' : 'assistant',
                    content: msg.textContent,
                    className: msg.className
                }));
                saveChats();
            }
        }

        // PDF önizleme alanını gizle ve PDF'i temizle
        document.getElementById('pdfPreview').style.display = 'none';
        document.getElementById('pdfInput').value = '';
        window.selectedPdfFile = null;
        window.pdfContent = null;
    } catch (error) {
        console.error('Mesaj gönderme hatası:', error);
        // Yükleniyor mesajını kaldır
        loadingMessage.remove();
        appendMessage('ai-message', 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.');
    }
}