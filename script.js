// إظهار/إخفاء قائمة الإيموجي
function toggleEmojiPicker() {
    const emojiPicker = document.getElementById('emojiPicker');
    emojiPicker.style.display = (emojiPicker.style.display === 'none' || emojiPicker.style.display === '') ? 'block' : 'none';
}

// إدراج الإيموجي في حقل الإدخال
function insertEmoji(emoji) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value += emoji; // إضافة الإيموجي إلى نص المدخل
    toggleEmojiPicker(); // إخفاء قائمة الإيموجي بعد الإدراج
}

// التعامل مع إرسال ملف
function sendFile() {
    const fileInput = document.getElementById('fileInput');
    const chatMessages = document.getElementById('chatMessages');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const newMessage = document.createElement('div');
            newMessage.innerHTML = `<strong>صورة مرفقة:</strong> <img src="${e.target.result}" style="max-width: 200px; max-height: 200px;">`;
            chatMessages.appendChild(newMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight; // التمرير إلى أسفل
        };
        reader.readAsDataURL(file); // قراءة الصورة
        fileInput.value = ''; // إعادة تعيين حقل الإدخال
    }
}

// التعامل مع دردشة
document.getElementById('sendChat').addEventListener('click', function() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (chatInput.value) {
        const newMessage = document.createElement('div');
        newMessage.textContent = `أنت: ${chatInput.value}`;
        chatMessages.appendChild(newMessage);
        
        // يمكن هنا إضافة ردود آلية إذا رغبت في ذلك
        const botMessage = document.createElement('div');
        botMessage.textContent = `شخص آخر: شكرًا على رسالتك!`;
        chatMessages.appendChild(botMessage);

        chatInput.value = ''; // إعادة تعيين حقل الإدخال
        chatMessages.scrollTop = chatMessages.scrollHeight; // التمرير إلى أسفل
    }
});
