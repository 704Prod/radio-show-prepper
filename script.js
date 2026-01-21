const questions = {
  intro: [
    "How did you get your artist name?",
    "Where are you from, and how did that shape your sound?",
    "When did music stop being a hobby for you?"
  ],
  creative: [
    "How would you describe your sound to a first-time listener?",
    "What emotions show up most in your music?",
    "How has your sound evolved recently?"
  ],
  process: [
    "What does a typical studio session look like for you?",
    "How do you push through creative blocks?",
    "Do you work better alone or with collaborators?"
  ],
  performance: [
    "How do you prepare before going on stage?",
    "What’s your favorite reaction you’ve received from a crowd?",
    "Do you prefer studio sessions or live performances?"
  ],
  future: [
    "What’s next for you after this release?",
    "Where do you see yourself in the next year?",
    "What’s the long-term vision for your career?"
  ],
  closing: [
    "Where can people find your music?",
    "How can listeners support you right now?",
    "What message do you want to leave with new fans?"
  ]
};

function generateQuestion() {
  const category = document.getElementById("category").value;
  let pool = [];

  if (category === "all") {
    Object.values(questions).forEach(q => pool.push(...q));
  } else {
    pool = questions[category];
  }

  const question = pool[Math.floor(Math.random() * pool.length)];
  document.getElementById("questionBox").innerText = question;
}

function copyQuestion() {
  const text = document.getElementById("questionBox").innerText;
  navigator.clipboard.writeText(text);
}
