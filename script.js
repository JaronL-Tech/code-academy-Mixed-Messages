function
getRandomMessage() {
    const teamMessages = [
        "You are fan!",
        "A fan of the Dallas Cowboys!",
        "Believe in yourself!",
        "Every year is our year!",
        "Last year is the past, this year is the future!",
        "You are a winner!",
        "You are a champion!",
    ];
    const randomIndex = Math.floor(Math.random() * teamMessages.length);
    return teamMessages[randomIndex];
}