const socket = new WebSocket('ws://localhost:8080');

// عند فتح الاتصال
socket.onopen = () => {
    console.log('Connected to the server');
};

// عند استلام رسالة
socket.onmessage = (event) => {
    const message = event.data;
    // أضف الرسالة إلى واجهة المستخدم (مثلاً إلى chatMessages)
    const chatMessages = document.getElementById('chatMessages');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
};

// عند إرسال رسالة
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value;
    socket.send(message);
    input.value = ''; // مسح حقل الإدخال بعد الإرسال
}
