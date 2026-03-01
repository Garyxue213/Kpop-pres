const LINES = {
  vocal: {
    name: "Main Vocal Line",
    tagline: "You carry melody, control, and emotional delivery.",
    description:
      "Role fit: strong for types that score higher on feeling and structure. This role centers on stable live singing, high-note responsibility, and chorus anchors.",
    strengths: [
      "Industry fact: Main vocals usually handle the hardest melodic sections and key climaxes.",
      "Industry fact: Lead/support vocals often bridge verse-to-chorus transitions and harmonies.",
      "Known examples: Taeyeon (Girls' Generation), Chen (EXO), DK (SEVENTEEN)."
    ],
    songs: ["Taeyeon - INVU", "EXO - Universe", "SEVENTEEN - Kidult"]
  },
  dance: {
    name: "Main Dancer Line",
    tagline: "You communicate first through movement and stage impact.",
    description:
      "Role fit: strong for types that score higher on sensing and perceiving. This role focuses on difficult choreography, performance precision, and center transitions.",
    strengths: [
      "Industry fact: Main dancers frequently lead dance breaks and difficult formations.",
      "Industry fact: Dance line members often set performance timing for the team.",
      "Known examples: Lisa (BLACKPINK), Momo (TWICE), J-Hope (BTS)."
    ],
    songs: ["ITZY - WANNABE", "ATEEZ - BOUNCY", "NCT 127 - Kick It"]
  },
  rap: {
    name: "Rap Line",
    tagline: "You drive momentum, attitude, and rhythmic contrast.",
    description:
      "Role fit: strong for types that score higher on thinking and perceiving with high expression. This role emphasizes flow control, diction, and tonal intensity.",
    strengths: [
      "Industry fact: Rap parts often create dynamic contrast before or after chorus sections.",
      "Industry fact: Rap line members commonly participate in lyric writing for verses.",
      "Known examples: G-Dragon (BIGBANG), Soyeon ((G)I-DLE), Changbin (Stray Kids)."
    ],
    songs: ["BLACKPINK - DDU-DU DDU-DU", "BTS - UGH!", "(G)I-DLE - MY BAG"]
  },
  visual: {
    name: "Visual / Concept Line",
    tagline: "You shape the concept identity fans remember.",
    description:
      "Role fit: strong for types that score higher on intuition and feeling with aesthetic focus. This role emphasizes concept continuity, camera presence, and visual storytelling.",
    strengths: [
      "Industry fact: Visual roles focus on concept coherence across teasers, MV, and stage styling.",
      "Industry fact: Center/visual members often anchor key camera shots in choreo formations.",
      "Known examples: Jin (BTS), Irene (Red Velvet), Jang Wonyoung (IVE)."
    ],
    songs: ["IVE - LOVE DIVE", "Red Velvet - Psycho", "NewJeans - Ditto"]
  },
  leader: {
    name: "Leader Line",
    tagline: "You keep the team stable while performance pressure rises.",
    description:
      "Role fit: strong for types that score higher on judging and social coordination. This role centers on communication, conflict management, and team direction.",
    strengths: [
      "Industry fact: Leaders often represent the group in interviews and coordinate team communication.",
      "Industry fact: Leader role includes balancing performance quality with member morale.",
      "Known examples: RM (BTS), S.Coups (SEVENTEEN), Bang Chan (Stray Kids)."
    ],
    songs: ["BTS - ON", "SEVENTEEN - Super", "Stray Kids - S-Class"]
  },
  producer: {
    name: "Producer / Composer Line",
    tagline: "You build the sound architecture behind the stage.",
    description:
      "Role fit: strong for types that score higher on intuition and thinking. This role emphasizes songwriting, arrangement choices, and long-term sonic identity.",
    strengths: [
      "Industry fact: Producer line work includes melody writing, arrangement, and recording direction.",
      "Industry fact: Self-producing groups rely heavily on internal producer members.",
      "Known examples: Woozi (SEVENTEEN), SUGA (BTS), 3RACHA (Stray Kids)."
    ],
    songs: ["Stray Kids - God's Menu", "SEVENTEEN - Cheers", "IU - eight (prod. & feat. SUGA)"]
  }
};

const QUESTIONS = [
  {
    text: "1) At a concert, you naturally...",
    answers: [
      { text: "Talk, chant, and hype everyone around you.", points: { E: 1 } },
      { text: "Focus deeply on details and absorb quietly.", points: { I: 1 } }
    ]
  },
  {
    text: "2) In group practice, you prefer...",
    answers: [
      { text: "Learning by immediate action with others.", points: { E: 1 } },
      { text: "Practicing alone first, then joining in.", points: { I: 1 } }
    ]
  },
  {
    text: "3) Your energy after a long performance day comes from...",
    answers: [
      { text: "Team interaction and shared excitement.", points: { E: 1 } },
      { text: "Quiet reset time and private reflection.", points: { I: 1 } }
    ]
  },
  {
    text: "4) When watching choreography, you notice...",
    answers: [
      { text: "Exact timing, spacing, and execution details.", points: { S: 1 } },
      { text: "Concept meaning, symbolism, and storyline.", points: { N: 1 } }
    ]
  },
  {
    text: "5) In comeback planning, you trust...",
    answers: [
      { text: "What has worked reliably on stage before.", points: { S: 1 } },
      { text: "A fresh concept even if it is risky.", points: { N: 1 } }
    ]
  },
  {
    text: "6) Your ideal role in arranging a performance is...",
    answers: [
      { text: "Refining concrete sections step by step.", points: { S: 1 } },
      { text: "Building the big narrative arc first.", points: { N: 1 } }
    ]
  },
  {
    text: "7) If two members disagree, you decide by...",
    answers: [
      { text: "Objective standards and performance impact.", points: { T: 1 } },
      { text: "Team harmony and emotional effect.", points: { F: 1 } }
    ]
  },
  {
    text: "8) Your feedback style is usually...",
    answers: [
      { text: "Direct, specific, and results-focused.", points: { T: 1 } },
      { text: "Supportive, careful, and people-focused.", points: { F: 1 } }
    ]
  },
  {
    text: "9) Under pressure, your default is...",
    answers: [
      { text: "Analyze the issue and optimize fast.", points: { T: 1 } },
      { text: "Read the room and stabilize emotions first.", points: { F: 1 } }
    ]
  },
  {
    text: "10) Your rehearsal style is...",
    answers: [
      { text: "Planned schedule with checkpoints.", points: { J: 1 } },
      { text: "Flexible flow based on the moment.", points: { P: 1 } }
    ]
  },
  {
    text: "11) For a release week, your instinct is...",
    answers: [
      { text: "Lock the plan early and execute.", points: { J: 1 } },
      { text: "Keep options open until the final pass.", points: { P: 1 } }
    ]
  },
  {
    text: "12) In creative projects, you are strongest at...",
    answers: [
      { text: "Finishing, polishing, and delivering on time.", points: { J: 1 } },
      { text: "Adapting and improvising new ideas.", points: { P: 1 } }
    ]
  }
];

const DIMENSIONS = [
  ["E", "I"],
  ["S", "N"],
  ["T", "F"],
  ["J", "P"]
];

const TYPE_TO_LINE_OVERRIDES = {
  ENTJ: "leader",
  ENFJ: "leader",
  ESTJ: "leader",
  ESFJ: "leader",
  INTP: "producer",
  INTJ: "producer",
  ENTP: "producer",
  ISTP: "producer",
  ESFP: "dance",
  ESTP: "dance",
  ISFP: "visual",
  ENFP: "visual",
  ISFJ: "vocal",
  INFJ: "vocal",
  INFP: "vocal"
};

const CLIPS = {
  vocal: {
    title: "Taeyeon - INVU (Official MV)",
    videoId: "AbZH7XWDW_k",
    start: 74
  },
  dance: {
    title: "ITZY - WANNABE (Official MV)",
    videoId: "fE2h3lGlOsk",
    start: 44
  },
  rap: {
    title: "BLACKPINK - DDU-DU DDU-DU (Official MV)",
    videoId: "IHNzOHi8sJs",
    start: 82
  },
  visual: {
    title: "IVE - LOVE DIVE (Official MV)",
    videoId: "Y8JFxS1HlDo",
    start: 56
  },
  leader: {
    title: "BTS - ON (Official MV)",
    videoId: "gwMa6gpoE9I",
    start: 100
  },
  producer: {
    title: "Stray Kids - God's Menu (Official MV)",
    videoId: "TQTlCHxyuu8",
    start: 40
  }
};

const state = {
  index: 0,
  selected: null,
  primaryResultKey: null,
  activeLineKey: null,
  mbtiType: "",
  lineFit: null,
  scores: {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  }
};

const ui = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  startBtn: document.getElementById("start-btn"),
  nextBtn: document.getElementById("next-btn"),
  restartBtn: document.getElementById("restart-btn"),
  copyBtn: document.getElementById("copy-btn"),
  playClipBtn: document.getElementById("play-clip-btn"),
  questionCounter: document.getElementById("question-counter"),
  questionText: document.getElementById("question-text"),
  answers: document.getElementById("answers"),
  progressBar: document.getElementById("progress-bar"),
  resultTitle: document.getElementById("result-title"),
  resultTagline: document.getElementById("result-tagline"),
  resultDescription: document.getElementById("result-description"),
  resultStrengths: document.getElementById("result-strengths"),
  resultSongs: document.getElementById("result-songs"),
  scoreBreakdown: document.getElementById("score-breakdown"),
  clipFrame: document.getElementById("clip-frame"),
  clipCaption: document.getElementById("clip-caption"),
  lineNav: document.getElementById("line-nav")
};

function switchScreen(screenKey) {
  [ui.startScreen, ui.quizScreen, ui.resultScreen].forEach((screen) => {
    screen.classList.remove("active");
  });

  if (screenKey === "start") ui.startScreen.classList.add("active");
  if (screenKey === "quiz") ui.quizScreen.classList.add("active");
  if (screenKey === "result") ui.resultScreen.classList.add("active");
}

function renderQuestion() {
  const question = QUESTIONS[state.index];
  ui.questionCounter.textContent = `Question ${state.index + 1} / ${QUESTIONS.length}`;
  ui.questionText.textContent = question.text;

  ui.answers.innerHTML = "";
  state.selected = null;
  ui.nextBtn.disabled = true;

  question.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = answer.text;

    button.addEventListener("click", () => {
      state.selected = answerIndex;
      [...ui.answers.children].forEach((child) => child.classList.remove("selected"));
      button.classList.add("selected");
      ui.nextBtn.disabled = false;
    });

    ui.answers.appendChild(button);
  });

  const progress = ((state.index + 1) / QUESTIONS.length) * 100;
  ui.progressBar.style.width = `${progress}%`;
  ui.nextBtn.textContent = state.index === QUESTIONS.length - 1 ? "See Result" : "Next";
}

function addPoints(pointsMap) {
  Object.keys(pointsMap).forEach((key) => {
    state.scores[key] += pointsMap[key];
  });
}

function getMbtiType() {
  return DIMENSIONS.map(([a, b]) => (state.scores[a] >= state.scores[b] ? a : b)).join("");
}

function getLineFitScores(type) {
  const letters = new Set(type.split(""));
  const fit = {
    vocal: 0,
    dance: 0,
    rap: 0,
    visual: 0,
    leader: 0,
    producer: 0
  };

  if (letters.has("I")) {
    fit.vocal += 2;
    fit.producer += 2;
    fit.visual += 1;
  }
  if (letters.has("E")) {
    fit.dance += 2;
    fit.rap += 2;
    fit.leader += 2;
  }
  if (letters.has("S")) {
    fit.dance += 2;
    fit.vocal += 1;
    fit.leader += 1;
  }
  if (letters.has("N")) {
    fit.producer += 2;
    fit.visual += 2;
    fit.vocal += 1;
  }
  if (letters.has("T")) {
    fit.producer += 2;
    fit.rap += 2;
    fit.leader += 1;
  }
  if (letters.has("F")) {
    fit.vocal += 2;
    fit.visual += 2;
    fit.leader += 1;
  }
  if (letters.has("J")) {
    fit.leader += 2;
    fit.vocal += 1;
    fit.producer += 1;
  }
  if (letters.has("P")) {
    fit.dance += 1;
    fit.rap += 2;
    fit.visual += 1;
    fit.producer += 1;
  }

  if (TYPE_TO_LINE_OVERRIDES[type]) {
    fit[TYPE_TO_LINE_OVERRIDES[type]] += 2;
  }

  return fit;
}

function getResultKey(type) {
  const lineFit = getLineFitScores(type);
  const sorted = Object.entries(lineFit).sort((a, b) => b[1] - a[1]);

  const [topKey, topScore] = sorted[0];
  const tied = sorted.filter(([, score]) => score === topScore).map(([key]) => key);
  if (tied.length === 1) return { key: topKey, lineFit };

  const priority = ["leader", "producer", "vocal", "dance", "rap", "visual"];
  const resolved = priority.find((key) => tied.includes(key)) || topKey;
  return { key: resolved, lineFit };
}

function buildClipUrl(clip, autoplay) {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    start: String(clip.start || 0),
    rel: "0",
    modestbranding: "1",
    playsinline: "1"
  });
  return `https://www.youtube-nocookie.com/embed/${clip.videoId}?${params.toString()}`;
}

function setCelebrationClip(lineKey, autoplay) {
  const clip = CLIPS[lineKey];
  if (!clip) {
    ui.clipFrame.src = "";
    ui.clipCaption.textContent = "";
    return;
  }

  ui.clipFrame.src = buildClipUrl(clip, autoplay);
  ui.clipCaption.textContent = `${clip.title} (starts at ${clip.start || 0}s)`;
}

function renderLineButtons(activeKey) {
  ui.lineNav.innerHTML = "";

  Object.keys(LINES).forEach((lineKey) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `line-pill${lineKey === activeKey ? " active" : ""}`;
    button.textContent = LINES[lineKey].name;
    button.addEventListener("click", () => {
      renderLineView(lineKey, true);
    });
    ui.lineNav.appendChild(button);
  });
}

function renderScoreBreakdown(viewingLineKey) {
  const mbtiScores = DIMENSIONS.map(([a, b]) => `${a}:${state.scores[a]} vs ${b}:${state.scores[b]}`).join(
    "  |  "
  );

  const fitScores = Object.entries(state.lineFit)
    .sort((a, b) => b[1] - a[1])
    .map(([line, score]) => `${LINES[line].name.replace(" Line", "")}: ${score}`)
    .join("  |  ");

  const viewLabel =
    viewingLineKey === state.primaryResultKey
      ? "Showing your top result"
      : `Preview mode: ${LINES[viewingLineKey].name}`;

  ui.scoreBreakdown.textContent = `${viewLabel}\nMBTI axis scores: ${mbtiScores}\nRole-fit scores: ${fitScores}`;
}

function renderLineView(lineKey, autoplay) {
  const result = LINES[lineKey];
  if (!result) return;

  state.activeLineKey = lineKey;

  ui.resultTitle.textContent = result.name;
  ui.resultTagline.textContent = result.tagline;
  ui.resultDescription.textContent = result.description;

  ui.resultStrengths.innerHTML = "";
  result.strengths.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ui.resultStrengths.appendChild(li);
  });

  ui.resultSongs.innerHTML = "";
  result.songs.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = song;
    ui.resultSongs.appendChild(li);
  });

  renderScoreBreakdown(lineKey);
  renderLineButtons(lineKey);
  setCelebrationClip(lineKey, autoplay);
}

function renderResult() {
  const type = getMbtiType();
  const { key: resultKey, lineFit } = getResultKey(type);

  state.mbtiType = type;
  state.primaryResultKey = resultKey;
  state.lineFit = lineFit;

  renderLineView(resultKey, true);
}

function startQuiz() {
  state.index = 0;
  state.selected = null;
  state.primaryResultKey = null;
  state.activeLineKey = null;
  state.mbtiType = "";
  state.lineFit = null;

  Object.keys(state.scores).forEach((key) => {
    state.scores[key] = 0;
  });

  ui.clipFrame.src = "";
  ui.clipCaption.textContent = "";
  ui.lineNav.innerHTML = "";

  switchScreen("quiz");
  renderQuestion();
}

function submitCurrentAnswer() {
  if (state.selected === null) return;

  const selectedAnswer = QUESTIONS[state.index].answers[state.selected];
  addPoints(selectedAnswer.points);

  if (state.index < QUESTIONS.length - 1) {
    state.index += 1;
    renderQuestion();
    return;
  }

  renderResult();
  switchScreen("result");
}

async function copyResult() {
  const text = [
    "I took the K-pop Line MBTI Quiz!",
    `Result: ${ui.resultTitle.textContent}`,
    `Tagline: ${ui.resultTagline.textContent}`
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    ui.copyBtn.textContent = "Copied";
    setTimeout(() => {
      ui.copyBtn.textContent = "Copy My Result";
    }, 1200);
  } catch (err) {
    ui.copyBtn.textContent = "Copy Failed";
    setTimeout(() => {
      ui.copyBtn.textContent = "Copy My Result";
    }, 1200);
  }
}

function replayClip() {
  if (!state.activeLineKey) return;
  setCelebrationClip(state.activeLineKey, true);
}

ui.startBtn.addEventListener("click", startQuiz);
ui.nextBtn.addEventListener("click", submitCurrentAnswer);
ui.restartBtn.addEventListener("click", startQuiz);
ui.copyBtn.addEventListener("click", copyResult);
ui.playClipBtn.addEventListener("click", replayClip);
