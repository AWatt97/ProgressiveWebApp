const button = document.getElementById('notifications');
button.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      randomNotification();
    }
  });
})

const quizCategory = [
    {
        topic: "Science",
    },
    {
        topic: "History",
    },
    {
        topic: "Coding",
    },

];

function randomNotification() {
    const randomItem = Math.floor(Math.random() * quizCategory.length);
    const notifTitle = quizCategory[randomItem].topic;
    const notifBody = `It's time for another quiz!`;
    const notifImg = `icons/apple-icon-180.png`;
    const options = {
      body: notifBody,
      icon: notifImg,
    };
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
}

const observer = new IntersectionObserver((entries) =>  {
    entries.forEach((entry) =>  {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
        else{
            entry.target.classList.remove('reveal');
        }
    });
});

const hiddenObjects = document.querySelectorAll('.hide');
hiddenObjects.forEach((ele) => observer.observe(ele));