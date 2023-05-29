// Bot's response messages
const botMessages = [
    "Hello!",
    "How are you today?",
    "What can I help you with?",
    "Sorry, I don't understand. Can you please rephrase?",
    "Thank you. Have a nice day!"
];

// Function to generate a random bot message
function generateBotMessage() {
    const randomIndex = Math.floor(Math.random() * botMessages.length);
    return botMessages[randomIndex];
}

// Function to add a message to the chat log
function addMessageToChatLog(sender, message) {
    const chatLog = document.getElementById("chat-log");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else if (sender === "bot") {
        messageDiv.classList.add("bot-message");
    }

    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
}

// Function to handle user input and generate bot response
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value;

    if (userMessage.trim() === "") {
        return;
    }

    addMessageToChatLog("user", userMessage);
    userInput.value = "";

    // Simulating bot response delay
    setTimeout(function() {
        const botMessage = generateBotMessage();
        addMessageToChatLog("bot", botMessage);
    }, 500);
}