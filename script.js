const weddingDate = new Date("[Wedding Date Here]").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById("timer").innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "The Big Day is Here!";
    }
}, 1000);
