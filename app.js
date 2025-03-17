// Gemini API anahtarı
const API_KEY = 'AIzaSyAOZPcKFeXz7kvPd5o8j2DVqh7jOf7sp0A';

// Gemini API'yi başlat
const genAI = new GoogleGenerativeAI(API_KEY);

// Chat geçmişini tutacak dizi
let chatHistory = [];

// DOM elementlerini seç
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendMessage');

// Mesaj gönderme fonksiyonu
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Kullanıcı mesajını ekrana ekle
    appendMessage('user-message', userMessage);
    userInput.value = '';

    try {
        // Gemini modelini başlat
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Chat geçmişini ve yeni mesajı birleştir
        const fullPrompt = [...chatHistory, { role: 'user', content: userMessage }];
        
        // API'ye istek gönder
        const result = await model.generateContent(userMessage);
        const response = await result.response;
        const aiMessage = response.text();

        // AI mesajını ekrana ekle
        appendMessage('ai-message', aiMessage);

        // Chat geçmişini güncelle
        chatHistory.push(
            { role: 'user', content: userMessage },
            { role: 'assistant', content: aiMessage }
        );
    } catch (error) {
        console.error('Hata:', error);
        appendMessage('ai-message', 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.');
    }
}

// Mesajları ekrana ekleyen yardımcı fonksiyon
function appendMessage(className, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = content;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener'ları ekle
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}); 