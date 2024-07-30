const BOT_TOKEN = '7326028582:AAHQthM2_Wz8YCIyvQKm25ChG6wRAa-1Wrk';
const CHAT_ID = '1153847102';  // Заміни на справжній chat ID

function chooseCategory(category) {
    alert(`Ви обрали категорію: ${category}`);

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `Користувач обрав категорію: ${category}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
