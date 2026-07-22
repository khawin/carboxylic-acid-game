const compounds = [
  c("methanoic", "methanoic acid", "formic acid", 284, "CH2O2", "HCOOH", ["meth", "anoic acid"], "straight", "กรดสายตรงคาร์บอน 1 อะตอม"),
  c("ethanoic", "ethanoic acid", "acetic acid", 176, "C2H4O2", "CH3COOH", ["eth", "anoic acid"], "straight", "กรดสายตรงคาร์บอน 2 อะตอม"),
  c("propanoic", "propanoic acid", "propanoic acid", 1032, "C3H6O2", "CH3CH2COOH", ["prop", "anoic acid"], "straight", "กรดสายตรงคาร์บอน 3 อะตอม"),
  c("butanoic", "butanoic acid", "butanoic acid", 264, "C4H8O2", "CH3CH2CH2COOH", ["but", "anoic acid"], "straight", "กรดสายตรงคาร์บอน 4 อะตอม"),
  c("pentanoic", "pentanoic acid", "pentanoic acid", 7991, "C5H10O2", "CH3(CH2)3COOH", ["pent", "anoic acid"], "straight", "กรดสายตรงคาร์บอน 5 อะตอม"),
  c("hexanoic", "hexanoic acid", "hexanoic acid", 8892, "C6H12O2", "CH3(CH2)4COOH", ["hex", "anoic acid"], "straight", "กรดสายตรงคาร์บอน 6 อะตอม"),
  c("heptanoic", "heptanoic acid", "heptanoic acid", 8094, "C7H14O2", "CH3(CH2)5COOH", ["hept", "anoic acid"], "straight", "กรดสายตรงคาร์บอน 7 อะตอม"),
  c("octanoic", "octanoic acid", "octanoic acid", 379, "C8H16O2", "CH3(CH2)6COOH", ["oct", "anoic acid"], "straight", "กรดสายตรงคาร์บอน 8 อะตอม"),
  c("nonanoic", "nonanoic acid", "nonanoic acid", 8158, "C9H18O2", "CH3(CH2)7COOH", ["non", "anoic acid"], "straight", "กรดสายตรงคาร์บอน 9 อะตอม"),
  c("decanoic", "decanoic acid", "decanoic acid", 2969, "C10H20O2", "CH3(CH2)8COOH", ["dec", "anoic acid"], "straight", "กรดสายตรงคาร์บอน 10 อะตอม"),
  c("2-methylpropanoic", "2-methylpropanoic acid", "2-methylpropanoic acid", 6590, "C4H8O2", "(CH3)2CHCOOH", ["2-methyl", "prop", "anoic acid"], "alkyl", "กิ่ง methyl อยู่ตำแหน่ง 2"),
  c("2-methylbutanoic", "2-methylbutanoic acid", "2-methylbutanoic acid", 8314, "C5H10O2", "CH3CH2CH(CH3)COOH", ["2-methyl", "but", "anoic acid"], "alkyl", "เริ่มนับจาก -COOH จึงได้กิ่งที่ตำแหน่ง 2"),
  c("3-methylbutanoic", "3-methylbutanoic acid", "3-methylbutanoic acid", 10430, "C5H10O2", "(CH3)2CHCH2COOH", ["3-methyl", "but", "anoic acid"], "alkyl", "กิ่ง methyl อยู่ตำแหน่ง 3"),
  c("2-methylpentanoic", "2-methylpentanoic acid", "2-methylpentanoic acid", 7341, "C6H12O2", "CH3CH2CH2CH(CH3)COOH", ["2-methyl", "pent", "anoic acid"], "alkyl", "โซ่หลัก pentanoic acid มีกิ่งตำแหน่ง 2"),
  c("3-methylpentanoic", "3-methylpentanoic acid", "3-methylpentanoic acid", 7755, "C6H12O2", "CH3CH2CH(CH3)CH2COOH", ["3-methyl", "pent", "anoic acid"], "alkyl", "โซ่หลัก pentanoic acid มีกิ่งตำแหน่ง 3"),
  c("4-methylpentanoic", "4-methylpentanoic acid", "4-methylpentanoic acid", 12587, "C6H12O2", "CH3CH(CH3)CH2CH2COOH", ["4-methyl", "pent", "anoic acid"], "alkyl", "นับจาก -COOH ทำให้กิ่งอยู่ตำแหน่ง 4"),
  c("2-methylhexanoic", "2-methylhexanoic acid", "2-methylhexanoic acid", 20653, "C7H14O2", "CH3(CH2)3CH(CH3)COOH", ["2-methyl", "hex", "anoic acid"], "alkyl", "โซ่หลัก hexanoic acid มีกิ่ง methyl ตำแหน่ง 2"),
  c("3-methylhexanoic", "3-methylhexanoic acid", "3-methylhexanoic acid", 95315, "C7H14O2", "CH3CH2CH2CH(CH3)CH2COOH", ["3-methyl", "hex", "anoic acid"], "alkyl", "โซ่หลัก hexanoic acid มีกิ่ง methyl ตำแหน่ง 3"),
  c("4-methylhexanoic", "4-methylhexanoic acid", "4-methylhexanoic acid", 15271, "C7H14O2", "CH3CH(CH3)CH2CH2CH2COOH", ["4-methyl", "hex", "anoic acid"], "alkyl", "โซ่หลัก hexanoic acid มีกิ่ง methyl ตำแหน่ง 4"),
  c("2,2-dimethylpropanoic", "2,2-dimethylpropanoic acid", "2,2-dimethylpropanoic acid", 6417, "C5H10O2", "(CH3)3CCOOH", ["2,2-dimethyl", "prop", "anoic acid"], "multi", "มี methyl สองกิ่งที่ตำแหน่ง 2 จึงใช้ di-"),
  c("2,3-dimethylbutanoic", "2,3-dimethylbutanoic acid", "2,3-dimethylbutanoic acid", 26608, "C6H12O2", "CH3CH(CH3)CH(CH3)COOH", ["2,3-dimethyl", "but", "anoic acid"], "multi", "methyl อยู่ตำแหน่ง 2 และ 3"),
  c("2,2-dimethylbutanoic", "2,2-dimethylbutanoic acid", "2,2-dimethylbutanoic acid", 11684, "C6H12O2", "CH3CH2C(CH3)2COOH", ["2,2-dimethyl", "but", "anoic acid"], "multi", "methyl สองกิ่งอยู่ตำแหน่ง 2"),
  c("2,3-dimethylpentanoic", "2,3-dimethylpentanoic acid", "2,3-dimethylpentanoic acid", 13183277, "C7H14O2", "CH3CH2CH(CH3)CH(CH3)COOH", ["2,3-dimethyl", "pent", "anoic acid"], "multi", "โซ่หลัก pentanoic acid และมี methyl 2 ตำแหน่ง"),
  c("2,2-dimethylhexanoic", "2,2-dimethylhexanoic acid", "2,2-dimethylhexanoic acid", 163217, "C8H16O2", "CH3(CH2)3C(CH3)2COOH", ["2,2-dimethyl", "hex", "anoic acid"], "multi", "มีกิ่ง methyl ซ้ำตำแหน่ง 2"),
  c("2,2,3-trimethylbutanoic", "2,2,3-trimethylbutanoic acid", "2,2,3-trimethylbutanoic acid", 639797, "C7H14O2", "CH3CH(CH3)C(CH3)2COOH", ["2,2,3-trimethyl", "but", "anoic acid"], "multi", "methyl 3 กิ่ง ใช้ tri- และเลข 2,2,3"),
  c("2,3,3-trimethylbutanoic", "2,3,3-trimethylbutanoic acid", "2,3,3-trimethylbutanoic acid", 2778099, "C7H14O2", "CH3C(CH3)2CH(CH3)COOH", ["2,3,3-trimethyl", "but", "anoic acid"], "multi", "methyl 3 กิ่ง ใช้ tri- และเลข 2,3,3"),
  c("2-ethylbutanoic", "2-ethylbutanoic acid", "2-ethylbutanoic acid", 6915, "C6H12O2", "CH3CH2CH(CH2CH3)COOH", ["2-ethyl", "but", "anoic acid"], "alkyl", "กิ่ง ethyl อยู่ตำแหน่ง 2"),
  c("3-ethylhexanoic", "3-ethylhexanoic acid", "3-ethylhexanoic acid", 38755, "C8H16O2", "CH3CH2CH(CH2CH3)CH2CH2COOH", ["3-ethyl", "hex", "anoic acid"], "alkyl", "กิ่ง ethyl อยู่ตำแหน่ง 3"),
  c("2-ethylhexanoic", "2-ethylhexanoic acid", "2-ethylhexanoic acid", 8697, "C8H16O2", "CH3(CH2)3CH(CH2CH3)COOH", ["2-ethyl", "hex", "anoic acid"], "alkyl", "กิ่ง ethyl อยู่ตำแหน่ง 2"),
  c("2-ethyl-3-methylhexanoic", "2-ethyl-3-methylhexanoic acid", "2-ethyl-3-methylhexanoic acid", 522548, "C9H18O2", "CH3CH2CH2CH(CH3)CH(CH2CH3)COOH", ["2-ethyl", "3-methyl", "hex", "anoic acid"], "multi", "เรียง substituent ตามตัวอักษร: ethyl ก่อน methyl"),
  c("2-propylpentanoic", "2-propylpentanoic acid", "2-propylpentanoic acid", 3121, "C8H16O2", "CH3CH2CH2CH(CH2CH2CH3)COOH", ["2-propyl", "pent", "anoic acid"], "alkyl", "กิ่ง propyl อยู่ตำแหน่ง 2"),
  c("4-chloro-2-methylpentanoic", "4-chloro-2-methylpentanoic acid", "4-chloro-2-methylpentanoic acid", 21082824, "C6H11ClO2", "CH3CH(Cl)CH2CH(CH3)COOH", ["4-chloro", "2-methyl", "pent", "anoic acid"], "halo", "เรียง chloro ก่อน methyl ตามตัวอักษร"),
  c("3-chloro-2-methylbutanoic", "3-chloro-2-methylbutanoic acid", "3-chloro-2-methylbutanoic acid", 19773770, "C5H9ClO2", "CH3CH(Cl)CH(CH3)COOH", ["3-chloro", "2-methyl", "but", "anoic acid"], "halo", "มี chloro และ methyl อยู่คนละตำแหน่ง"),
  c("2-chlorohexanoic", "2-chlorohexanoic acid", "2-chlorohexanoic acid", 564933, "C6H11ClO2", "CH3(CH2)3CH(Cl)COOH", ["2-chloro", "hex", "anoic acid"], "halo", "กิ่ง chloro อยู่ตำแหน่ง 2"),
  c("2-fluoro-4-methylpentanoic", "2-fluoro-4-methylpentanoic acid", "2-fluoro-4-methylpentanoic acid", 256877, "C6H11FO2", "CH3CH(CH3)CH2CH(F)COOH", ["2-fluoro", "4-methyl", "pent", "anoic acid"], "halo", "เรียง fluoro ก่อน methyl ตามตัวอักษร"),
  c("3-bromo-2,2-dimethylhexanoic", "3-bromo-2,2-dimethylhexanoic acid", "3-bromo-2,2-dimethylhexanoic acid", 152142742, "C8H15BrO2", "CH3CH2CH2CH(Br)C(CH3)2COOH", ["3-bromo", "2,2-dimethyl", "hex", "anoic acid"], "halo", "มี bromo และ dimethyl ต้องใช้เลขตำแหน่งครบ"),
  c("2-bromopentanoic", "2-bromopentanoic acid", "2-bromopentanoic acid", 11446, "C5H9BrO2", "CH3CH2CH2CH(Br)COOH", ["2-bromo", "pent", "anoic acid"], "halo", "กิ่ง bromo อยู่ตำแหน่ง 2"),
  c("2-iodohexanoic", "2-iodohexanoic acid", "2-iodohexanoic acid", 13544387, "C6H11IO2", "CH3(CH2)3CH(I)COOH", ["2-iodo", "hex", "anoic acid"], "halo", "ใช้ iodo ไม่ใช่ lodo"),
  c("3-iodobutanoic", "3-iodobutanoic acid", "3-iodobutanoic acid", 12510983, "C4H7IO2", "CH3CH(I)CH2COOH", ["3-iodo", "but", "anoic acid"], "halo", "กิ่ง iodo อยู่ตำแหน่ง 3"),
];

const compoundById = Object.fromEntries(compounds.map((compound) => [compound.id, compound]));

const stagePools = {
  builder: ["2-methylpropanoic", "2-methylbutanoic", "3-methylbutanoic", "2,2-dimethylpropanoic", "2,3-dimethylbutanoic", "2-ethylbutanoic"],
  choice: ["2-methylpentanoic", "3-methylpentanoic", "4-methylpentanoic", "2,2-dimethylbutanoic", "4-methylhexanoic", "2-ethylhexanoic"],
  match: ["pentanoic", "hexanoic", "2-methylhexanoic", "3-methylhexanoic", "2-chlorohexanoic", "2-bromopentanoic"],
  boss: ["2,3-dimethylpentanoic", "2-ethyl-3-methylhexanoic", "4-chloro-2-methylpentanoic", "3-bromo-2,2-dimethylhexanoic", "2-fluoro-4-methylpentanoic", "2-iodohexanoic", "2-propylpentanoic", "2,2,3-trimethylbutanoic", "2,3,3-trimethylbutanoic", "3-ethylhexanoic", "2,2-dimethylhexanoic", "3-chloro-2-methylbutanoic"],
};

const app = document.querySelector("#app");
const scoreEl = document.querySelector("#score");
const livesEl = document.querySelector("#lives");
const keysEl = document.querySelector("#keys");

const kahootColors = ["red", "blue", "yellow", "green"];
const playerAssets = {
  male: "assets/characters/student-ai.png",
  female: "assets/characters/student-female-ai.png",
};

const learningSteps = [
  {
    title: "Carboxylic acid คืออะไร?",
    lesson: "กรดคาร์บอกซิลิกคือสารอินทรีย์ที่มีหมู่ -COOH อยู่ในโมเลกุล ในสูตรโครงสร้างแบบย่อมักเห็นท้ายชื่อเป็น COOH เช่น CH3COOH ส่วนสูตรเส้นพันธะจะเห็นคาร์บอนิล C=O และ O-H อยู่ติดกับคาร์บอนตัวเดียวกัน",
    compound: "ethanoic",
    promptType: "bond",
    question: "จากรูปนี้ สารนี้มีหมู่ carboxylic acid หรือไม่?",
    options: ["มี เพราะมีหมู่ -COOH", "ไม่มี เพราะเป็นแอลกอฮอล์", "ไม่มี เพราะเป็นอีเทอร์", "มี แต่ไม่ต้องมี O-H"],
    answer: "มี เพราะมีหมู่ -COOH",
    note: "ดูที่ปลายโครงสร้าง ถ้ามี C=O และ O-H รวมกันเป็น -COOH คือกรดคาร์บอกซิลิก",
  },
  {
    title: "เริ่มนับโซ่หลักจากตรงไหน?",
    lesson: "การเรียกชื่อกรดคาร์บอกซิลิกต้องนับคาร์บอนของหมู่ -COOH เป็นตำแหน่งที่ 1 เสมอ แล้วค่อยไล่ตำแหน่งคาร์บอนถัดไปตามโซ่หลัก",
    compound: "butanoic",
    promptType: "bond",
    question: "จากสูตรเส้นพันธะนี้ ต้องเริ่มนับตำแหน่ง 1 จากฝั่งไหน?",
    options: ["ฝั่งที่มี -COOH", "ฝั่งปลาย CH3", "ฝั่งที่ยาวกว่าเสมอ", "ฝั่งไหนก็ได้"],
    answer: "ฝั่งที่มี -COOH",
    note: "คาร์บอนใน -COOH เป็น C-1 เสมอ แม้อีกฝั่งจะดูยาวกว่า",
  },
  {
    title: "ชื่อโซ่หลักลงท้ายอย่างไร?",
    lesson: "เมื่อเป็นกรดคาร์บอกซิลิกสายอิ่มตัว ให้ใช้รากชื่อจำนวนคาร์บอนของโซ่หลัก แล้วลงท้ายด้วย anoic acid เช่น 3 คาร์บอนคือ propanoic acid",
    compound: "propanoic",
    promptType: "bond",
    question: "โซ่หลักในรูปนี้ควรเรียกว่าอะไร?",
    options: ["propanoic acid", "propanol", "propane", "butanoic acid"],
    answer: "propanoic acid",
    note: "มีคาร์บอนรวม 3 ตัวเมื่อรวมคาร์บอนของ -COOH จึงเป็น propanoic acid",
  },
  {
    title: "กิ่งและเลขตำแหน่ง",
    lesson: "ถ้ามีกิ่ง ให้ระบุเลขตำแหน่งหน้าชื่อกิ่ง เช่น 2-methyl ถ้ามีกิ่งชนิดเดียวกันหลายกิ่ง ให้รวมเลขตำแหน่งคั่นด้วย comma และใช้ di-, tri-, tetra- ตามจำนวนกิ่ง",
    compound: "2-methylpropanoic",
    promptType: "bond",
    question: "ชื่อที่ถูกต้องของโครงสร้างนี้คือข้อใด?",
    options: ["2-methylpropanoic acid", "3-methylpropanoic acid", "methylbutanoic acid", "2-ethylpropanoic acid"],
    answer: "2-methylpropanoic acid",
    note: "เริ่มนับจาก -COOH ทำให้กิ่ง methyl อยู่ตำแหน่ง 2",
  },
  {
    title: "กิ่งซ้ำใช้ di-/tri-",
    lesson: "เมื่อมีกิ่งเหมือนกันมากกว่า 1 กิ่ง ให้เขียนเลขตำแหน่งทั้งหมด เช่น 2,3-dimethyl และใช้ hyphen เชื่อมกับชื่อโซ่หลัก",
    compound: "2,3-dimethylbutanoic",
    promptType: "bond",
    question: "ชื่อใดใช้เลขตำแหน่งและ di- ถูกต้อง?",
    options: ["2,3-dimethylbutanoic acid", "2-methyl-3-methylbutanoic acid", "3,4-dimethylbutanoic acid", "2,3-methylbutanoic acid"],
    answer: "2,3-dimethylbutanoic acid",
    note: "มี methyl 2 กิ่งที่ตำแหน่ง 2 และ 3 จึงใช้ 2,3-dimethyl",
  },
];

const state = {
  screen: "home",
  score: 0,
  lives: 5,
  correct: 0,
  attempted: 0,
  startedAt: Date.now(),
  completedStages: new Set(),
  roundPlan: null,
  currentStage: null,
  builder: null,
  choice: null,
  match: null,
  boss: null,
  bossModifiers: null,
  pendingReward: null,
  modal: null,
  playerGender: "male",
  learning: null,
  summary: null,
  timerId: null,
};

function c(id, displayName, pubchemName, cid, formula, condensed, parts, category, note) {
  return {
    id,
    displayName,
    pubchemName,
    cid,
    formula,
    condensed,
    parts,
    category,
    note,
    images: {
      bond: `assets/structures/${id}-bond.png`,
    },
    sourceUrl: `https://pubchem.ncbi.nlm.nih.gov/compound/${cid}`,
  };
}

function resetGame() {
  clearTimer();
  state.screen = "intro";
  state.score = 0;
  state.lives = 5;
  state.correct = 0;
  state.attempted = 0;
  state.startedAt = Date.now();
  state.completedStages = new Set();
  state.currentStage = null;
  state.builder = null;
  state.choice = null;
  state.match = null;
  state.boss = null;
  state.bossModifiers = { damage: false, time: false, rounds: false };
  state.pendingReward = null;
  state.modal = null;
  state.summary = null;
  state.roundPlan = {
    builder: stagePools.builder.map((id, index) => ({ compound: compoundById[id], promptType: index % 3 === 1 ? "condensed" : "bond" })),
    choice: stagePools.choice.map((id, index) => ({ compound: compoundById[id], promptType: index % 3 === 2 ? "condensed" : "bond" })),
    match: stagePools.match.map((id, index) => ({ compound: compoundById[id], cardType: ["bond", "condensed", "formula", "bond", "condensed", "bond"][index] })),
    boss: stagePools.boss.map((id, index) => ({ compound: compoundById[id], promptType: index % 4 === 1 ? "condensed" : "bond" })),
  };
  render();
}

function updateStatus() {
  const statusGrid = document.querySelector(".status-grid");
  if (statusGrid) statusGrid.classList.toggle("hidden", !state.roundPlan);
  scoreEl.textContent = String(Math.max(0, state.score));
  livesEl.textContent = "♥".repeat(Math.max(0, state.lives)) || "0";
  keysEl.textContent = `${state.completedStages.size}/3`;
}

function setScreen(screen) {
  if (!(state.boss && ["builder", "choice", "match"].includes(screen))) {
    clearTimer();
  }
  state.screen = screen;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function render() {
  updateStatus();
  const routes = {
    home: renderHome,
    intro: renderIntro,
    map: renderMap,
    builder: renderBuilder,
    choice: renderChoice,
    match: renderMatch,
    learning: renderLearning,
    summary: renderSummary,
    data: renderData,
    credits: renderCredits,
  };
  routes[state.screen]();
  bindModalActions();
}

function renderHome() {
  app.innerHTML = `
    <section class="game-screen home-screen candy-screen">
      <div class="hero-copy">
        <img class="school-logo" src="assets/logos/saard-logo.png" alt="โลโก้โรงเรียน" />
        <p class="game-kicker">Organic Acid RPG</p>
        <h2>IUPAC Lab Escape</h2>
        <p class="lead">เกมภารกิจในแล็บกรดอินทรีย์สำหรับฝึกนับโซ่หลัก หาเลขตำแหน่งกิ่ง และเรียกชื่อ IUPAC ให้แม่น</p>
        <div class="gender-picker" aria-label="เลือกตัวละคร">
          <button class="gender-button ${state.playerGender === "male" ? "selected" : ""}" type="button" data-gender="male">
            <img src="${playerAssets.male}" alt="นักเรียนชาย" />
            <span>นักเรียนชาย</span>
          </button>
          <button class="gender-button ${state.playerGender === "female" ? "selected" : ""}" type="button" data-gender="female">
            <img src="${playerAssets.female}" alt="นักเรียนหญิง" />
            <span>นักเรียนหญิง</span>
          </button>
        </div>
        <div class="hero-actions">
          <button class="start-button" type="button" data-action="start"><span>▶</span> เริ่มภารกิจ</button>
          <button class="game-button secondary" type="button" data-action="learning">โหมดเรียนรู้</button>
          <button class="game-button secondary" type="button" data-action="data">คลังความรู้</button>
          <button class="game-button quiet" type="button" data-action="credits">เครดิต</button>
        </div>
      </div>
      <div class="hero-party">
        <img src="${playerImage()}" alt="ตัวละครนักเรียน ม.6" />
        <div class="mission-card">
          <strong>เป้าหมาย</strong>
          <span>ฝึก 3 ด่านเพื่อปลด debuff แล้วท้าดวล ดร.ซู</span>
        </div>
      </div>
    </section>
  `;
  app.querySelectorAll("[data-gender]").forEach((button) => button.addEventListener("click", () => selectPlayer(button.dataset.gender)));
  bind("[data-action='start']", resetGame);
  bind("[data-action='learning']", startLearning);
  bind("[data-action='data']", () => setScreen("data"));
  bind("[data-action='credits']", () => setScreen("credits"));
}

function renderIntro() {
  app.innerHTML = `
    <section class="game-screen story-screen">
      <div class="character-frame">
        <img src="${playerImage()}" alt="นักเรียน ม.6" />
      </div>
      <div class="dialogue-panel">
        <p class="game-kicker">Mission Briefing</p>
        <h2>คุณคือนักเรียน ม.6 ที่ต้องปลดล็อกแล็บกรดอินทรีย์</h2>
        <p class="lead">ระบบแล็บจะเปิดทางออกเมื่อคุณผ่าน 3 ด่านฝึกเรียกชื่อกรดคาร์บอกซิลิก และชนะ Final Boss “ดร.ซู”</p>
        <div class="rule-grid">
          <div><strong>หัวใจ</strong><span>มี 5 หลอด ตอบผิดเสียหัวใจ</span></div>
          <div><strong>ด่าน</strong><span>เลือกเล่นด่าน 1-3 ได้อิสระ</span></div>
          <div><strong>บอส</strong><span>เข้าได้ทันที แต่จะยากมากถ้ายังไม่อ่อนแอ</span></div>
        </div>
        <button class="game-button primary" type="button" data-action="map">เปิดแผนที่แล็บ</button>
      </div>
    </section>
  `;
  bind("[data-action='map']", () => setScreen("map"));
}

function startLearning() {
  state.learning = { index: 0, phase: "lesson", answered: false, feedback: "" };
  setScreen("learning");
}

function renderLearning() {
  const learning = state.learning || { index: 0, phase: "lesson", answered: false, feedback: "" };
  state.learning = learning;
  const step = learningSteps[learning.index];
  const isLesson = learning.phase === "lesson";
  const compound = compoundById[step.compound];
  app.innerHTML = `
    <section class="game-screen learning-screen ${isLesson ? "lesson-mode" : "quiz-mode"}">
      <div class="learning-header">
        <div>
          <p class="game-kicker">โหมดเรียนรู้ · Step ${learning.index + 1}/${learningSteps.length}</p>
          <h2>${step.title}</h2>
        </div>
      </div>
      ${isLesson ? renderLearningLesson(step, compound) : renderLearningQuiz(step, compound, learning)}
      ${state.modal ? renderModal() : ""}
    </section>
  `;
  bind("[data-learn='next']", () => {
    state.learning.phase = "quiz";
    state.learning.answered = false;
    state.learning.feedback = "";
    render();
  });
  bind("[data-learn='home']", () => {
    state.learning = null;
    setScreen("home");
  });
  bind("[data-learn='continue']", () => {
    if (state.learning.index < learningSteps.length - 1) {
      state.learning.index += 1;
      state.learning.phase = "lesson";
      state.learning.answered = false;
      state.learning.feedback = "";
      render();
    } else {
      renderLearningComplete();
    }
  });
  app.querySelectorAll("[data-learn-option]").forEach((button) => button.addEventListener("click", () => answerLearning(button.dataset.learnOption)));
}

function renderLearningLesson(step, compound) {
  return `
    <div class="learning-layout">
      <article class="learning-card">
        <p class="game-kicker">ใบความรู้</p>
        <p class="lead">${step.lesson}</p>
        <div class="learning-tips">
          <span>ดูหมู่ -COOH ก่อน</span>
          <span>นับคาร์บอนของ -COOH เป็นตำแหน่ง 1</span>
          <span>ชื่อกรดสายอิ่มตัวลงท้าย anoic acid</span>
        </div>
        <div class="hero-actions">
          <button class="game-button secondary" type="button" data-learn="home">กลับหน้าแรก</button>
          <button class="game-button primary" type="button" data-learn="next">ถัดไป: ลองทำโจทย์</button>
        </div>
      </article>
      ${structureCard(compound, step.promptType, "ตัวอย่างที่ต้องสังเกต")}
    </div>
  `;
}

function renderLearningQuiz(step, compound, learning) {
  return `
    <div class="choice-layout learning-quiz">
      ${structureCard(compound, step.promptType, step.question)}
      <div>
        <div class="instruction">${step.question}</div>
        <div class="kahoot-grid">
          ${step.options.map((option, index) => `<button class="kahoot-option ${kahootColors[index]}" type="button" data-learn-option="${escapeAttr(option)}" ${learning.answered ? "disabled" : ""}><span>${["▲", "◆", "●", "■"][index]}</span>${option}</button>`).join("")}
        </div>
        ${feedback(learning.feedback)}
        ${learning.answered ? `<div class="control-row"><button class="game-button primary" type="button" data-learn="continue">${learning.index < learningSteps.length - 1 ? "ไป Step ถัดไป" : "จบโหมดเรียนรู้"}</button></div>` : ""}
      </div>
    </div>
  `;
}

function answerLearning(option) {
  const learning = state.learning;
  if (!learning || learning.answered) return;
  const step = learningSteps[learning.index];
  const correct = option === step.answer;
  learning.answered = true;
  learning.feedback = {
    type: correct ? "good" : "bad",
    text: correct ? `ถูกต้อง: ${step.note}` : `ยังไม่ถูก คำตอบคือ ${step.answer} · ${step.note}`,
  };
  render();
}

function renderLearningComplete() {
  state.learning = null;
  app.innerHTML = `
    <section class="game-screen result-screen learning-complete">
      <div class="result-card">
        <p class="game-kicker">Learning Complete</p>
        <h2>พร้อมหนีแล็บกรดอินทรีย์แล้ว</h2>
        <p class="lead">ตอนนี้คุณรู้พื้นฐานการดู -COOH การนับจากตำแหน่ง 1 การตั้งชื่อโซ่หลัก และการระบุกิ่งแล้ว</p>
        <div class="hero-actions">
          <button class="game-button primary" type="button" data-action="start">เริ่มภารกิจ</button>
          <button class="game-button secondary" type="button" data-action="home">กลับหน้าแรก</button>
        </div>
      </div>
    </section>
  `;
  bind("[data-action='start']", resetGame);
  bind("[data-action='home']", () => setScreen("home"));
}

function renderMap() {
  app.innerHTML = `
    <section class="game-screen map-screen">
      <div class="map-header" style="--map-avatar: url('${playerImage()}')">
        <div>
          <p class="game-kicker">Lab Map</p>
          <h2>เลือกด่านที่จะทำภารกิจ</h2>
          <p class="lead">เล่นด่าน 1-3 เพื่อเลือกพลังลดความโหดของบอส หรือท้าดวล ดร.ซู ตั้งแต่ต้นก็ได้</p>
        </div>
      </div>
      <div class="stage-grid">
        ${stageCard("builder", "ด่าน 1", "Name Builder", "ต่อชื่อ IUPAC จากภาพสูตรโครงสร้าง", "ต่อชื่อ")}
        ${stageCard("choice", "ด่าน 2", "Acid Rush", "เลือกชื่อที่ถูกต้องจาก 4 ตัวเลือกใน 90 วิ", "เลือกตอบ")}
        ${stageCard("match", "ด่าน 3", "Matching Lab", "จับคู่สูตร 6 ใบกับชื่อ 6 ใบ", "จับคู่")}
        <article class="stage-card boss-card">
          <span class="stage-number">Final</span>
          <h3>ดร.ซู</h3>
          <p>${bossStatusText()}</p>
          <button class="game-button boss" type="button" data-stage="boss">เข้าห้องบอส</button>
        </article>
      </div>
      ${state.modal ? renderModal() : ""}
    </section>
  `;
  app.querySelectorAll("[data-stage]").forEach((button) => button.addEventListener("click", () => startStage(button.dataset.stage)));
}

function stageCard(stage, number, title, desc, action) {
  const done = state.completedStages.has(stage);
  return `
    <article class="stage-card stage-card-${stage} ${done ? "complete" : ""}">
      <span class="stage-number">${number}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
      <button class="game-button ${done ? "secondary" : "primary"}" type="button" data-stage="${stage}" ${done ? "disabled" : ""}>${done ? "ผ่านแล้ว" : action}</button>
    </article>
  `;
}

function startStage(stage) {
  if (stage !== "boss" && state.completedStages.has(stage)) return;
  if (stage === "builder") return startBuilder(false);
  if (stage === "choice") return startChoice(false);
  if (stage === "match") return startMatch(false);
  if (stage === "boss") return confirmBossStart();
}

function confirmBossStart() {
  if (state.completedStages.size === 3) return startBoss(true);
  state.modal = { type: "bossWarning" };
  setScreen("map");
}

function startBuilder(isBoss, bossRound = null) {
  const rounds = isBoss ? [bossRound] : state.roundPlan.builder;
  state.builder = { isBoss, rounds, index: 0, selected: [], locked: false, feedback: "" };
  state.currentStage = "builder";
  setScreen("builder");
}

function renderBuilder() {
  const game = state.builder;
  const round = game.rounds[game.index];
  const compound = round.compound;
  const selected = game.selected.length
    ? game.selected.map((part) => `<span class="answer-chip">${part}</span>`).join("")
    : `<span class="placeholder">แตะชิ้นส่วนชื่อด้านล่าง</span>`;
  app.innerHTML = `
    <section class="game-screen play-screen ${playScreenClass("builder", game.isBoss)}">
      ${gameHeader(game.isBoss ? "Final Boss: Name Builder" : "ด่าน 1: Name Builder", game.isBoss ? bossProgress() : `${game.index + 1}/${game.rounds.length}`, game.isBoss ? bossTimerData() : null)}
      <div class="question-layout">
        ${structureCard(compound, round.promptType, "ต่อชื่อ IUPAC จากภาพนี้")}
        <div class="answer-zone">
          <div class="instruction">ต่อชื่อ IUPAC จากภาพนี้</div>
          <div class="answer-strip">${selected}</div>
          <div class="token-bank">
            ${tokenOptions(compound).map((part) => `<button class="token-button" type="button" data-token="${escapeAttr(part)}">${part}</button>`).join("")}
          </div>
          ${feedback(game.feedback)}
          <div class="control-row">
            <button class="game-button primary" type="button" data-action="check">ตอบ</button>
            <button class="game-button quiet" type="button" data-action="undo">ย้อนกลับ</button>
            <button class="game-button quiet" type="button" data-action="clear">ล้าง</button>
          </div>
        </div>
      </div>
      ${state.modal ? renderModal() : ""}
    </section>
  `;
  app.querySelectorAll("[data-token]").forEach((button) => {
    button.addEventListener("click", () => {
      if (game.locked) return;
      game.selected.push(button.dataset.token);
      game.feedback = "";
      renderBuilder();
    });
  });
  bind("[data-action='undo']", () => {
    if (game.locked) return;
    game.selected.pop();
    game.feedback = "";
    renderBuilder();
  });
  bind("[data-action='clear']", () => {
    if (game.locked) return;
    game.selected = [];
    game.feedback = "";
    renderBuilder();
  });
  bind("[data-action='check']", () => answerBuilder());
}

function answerBuilder() {
  const game = state.builder;
  if (game.locked) return;
  const round = game.rounds[game.index];
  const correct =
    game.selected.length === round.compound.parts.length &&
    game.selected.every((part, index) => part === round.compound.parts[index]);
  recordAttempt(correct, correct ? 100 : -25);
  game.locked = true;
  game.feedback = {
    type: correct ? "good" : "bad",
    text: correct ? `ถูกต้อง: ${round.compound.note}` : `ยังไม่ถูก คำตอบคือ ${round.compound.displayName}`,
  };
  if (state.lives <= 0) return endGame("หัวใจหมด", false);
  renderBuilder();
  setTimeout(() => {
    if (game.isBoss) return finishBossRound(correct);
    if (game.index < game.rounds.length - 1) {
      game.index += 1;
      game.selected = [];
      game.locked = false;
      game.feedback = "";
      renderBuilder();
    } else {
      completeStage("builder", "ผ่านด่าน 1 แล้ว");
    }
  }, 900);
}

function startChoice(isBoss, bossRound = null) {
  const rounds = isBoss ? [bossRound] : state.roundPlan.choice;
  state.choice = {
    isBoss,
    rounds,
    index: 0,
    answered: false,
    feedback: "",
    timeLeft: isBoss ? null : 90,
    totalTime: isBoss ? null : 90,
  };
  state.currentStage = "choice";
  setScreen("choice");
  if (!isBoss) startAcidRushTimer();
}

function renderChoice() {
  const game = state.choice;
  const round = game.rounds[game.index];
  const compound = round.compound;
  const options = round.options || buildOptions(compound);
  app.innerHTML = `
    <section class="game-screen play-screen ${playScreenClass("choice", game.isBoss)}">
      ${gameHeader(game.isBoss ? "Final Boss: Acid Rush" : "ด่าน 2: Acid Rush", game.isBoss ? bossProgress() : `${game.index + 1}/${game.rounds.length} · เวลา ${game.timeLeft}s`, game.isBoss ? bossTimerData() : { current: game.timeLeft, total: game.totalTime, label: "Acid Rush" })}
      <div class="choice-layout">
        ${structureCard(compound, round.promptType, "เลือกชื่อที่ถูกต้อง")}
        <div class="kahoot-grid">
          ${options.map((option, index) => `<button class="kahoot-option ${kahootColors[index]}" type="button" data-option="${escapeAttr(option)}"><span>${["▲", "◆", "●", "■"][index]}</span>${option}</button>`).join("")}
        </div>
      </div>
      ${feedback(game.feedback)}
      ${state.modal ? renderModal() : ""}
    </section>
  `;
  app.querySelectorAll("[data-option]").forEach((button) => button.addEventListener("click", () => answerChoice(button.dataset.option)));
}

function answerChoice(option) {
  const game = state.choice;
  if (game.answered) return;
  const round = game.rounds[game.index];
  const correct = option === round.compound.displayName;
  game.answered = true;
  recordAttempt(correct, correct ? 100 : -25);
  game.feedback = {
    type: correct ? "good" : "bad",
    text: correct ? `ถูกต้อง: ${round.compound.note}` : `ยังไม่ถูก คำตอบคือ ${round.compound.displayName}`,
  };
  if (state.lives <= 0) return endGame("หัวใจหมด", false);
  renderChoice();
  setTimeout(() => {
    if (game.isBoss) return finishBossRound(correct);
    if (game.index < game.rounds.length - 1) {
      game.index += 1;
      game.answered = false;
      game.feedback = "";
      renderChoice();
    } else {
      clearTimer();
      completeStage("choice", "ผ่านด่าน 2 แล้ว");
    }
  }, 850);
}

function startAcidRushTimer() {
  clearTimer();
  state.timerId = setInterval(() => {
    if (!state.choice || state.choice.isBoss || state.screen !== "choice") return clearTimer();
    state.choice.timeLeft -= 1;
    updateTimerDisplay(`${state.choice.index + 1}/${state.choice.rounds.length} · เวลา ${state.choice.timeLeft}s`, state.choice.timeLeft, state.choice.totalTime);
    if (state.choice.timeLeft <= 0) {
      clearTimer();
      endGame("หมดเวลาในด่าน Acid Rush", false);
    }
  }, 1000);
}

function startMatch(isBoss, bossRound = null) {
  const compoundsForRound = isBoss
    ? bossRound.matchCompounds
    : state.roundPlan.match.map((round) => round.compound);
  const cards = buildMatchCards(compoundsForRound, isBoss);
  state.match = { isBoss, cards, selected: [], lockedPairs: new Set(), feedback: "" };
  state.currentStage = "match";
  setScreen("match");
}

function renderMatch() {
  const game = state.match;
  app.innerHTML = `
    <section class="game-screen play-screen ${playScreenClass("match", game.isBoss)}">
      ${gameHeader(game.isBoss ? "Final Boss: Matching" : "ด่าน 3: Matching Lab", game.isBoss ? bossProgress() : `${game.lockedPairs.size}/${game.cards.length / 2} คู่`, game.isBoss ? bossTimerData() : null)}
      <div class="match-brief">จับคู่สูตรกับชื่อให้ถูกต้อง</div>
      <div class="flashcard-board ${game.isBoss ? "boss-match" : ""}">
        ${game.cards.map((card) => renderFlashCard(card, game)).join("")}
      </div>
      ${feedback(game.feedback)}
      ${state.modal ? renderModal() : ""}
    </section>
  `;
  app.querySelectorAll("[data-card]").forEach((button) => button.addEventListener("click", () => selectMatchCard(button.dataset.card)));
}

function selectMatchCard(cardId) {
  const game = state.match;
  const card = game.cards.find((item) => item.cardId === cardId);
  if (!card || game.lockedPairs.has(card.pairId) || game.selected.includes(cardId)) return;
  game.selected.push(cardId);
  game.feedback = "";
  if (game.selected.length === 2) {
    const [a, b] = game.selected.map((id) => game.cards.find((item) => item.cardId === id));
    const correct = a.pairId === b.pairId && a.role !== b.role;
    recordAttempt(correct, correct ? 80 : -25);
    if (correct) {
      game.lockedPairs.add(a.pairId);
      game.feedback = { type: "good", text: `จับคู่ถูก: ${compoundById[a.pairId].displayName}` };
    } else {
      game.feedback = { type: "bad", text: "ยังไม่ใช่คู่เดียวกัน ลองดูสูตรและชื่ออีกครั้ง" };
    }
    game.selected = [];
    if (state.lives <= 0) return endGame("หัวใจหมด", false);
    const done = game.lockedPairs.size === game.cards.length / 2;
    renderMatch();
    if (done) {
      setTimeout(() => {
        if (game.isBoss) return finishBossRound(true);
        completeStage("match", "ผ่านด่าน 3 แล้ว");
      }, 800);
    }
    return;
  }
  renderMatch();
}

function startBoss(skipWarning = false) {
  if (!skipWarning && state.completedStages.size < 3) return confirmBossStart();
  const allBossRounds = [
    bossBuilder("2,3-dimethylpentanoic", "bond"),
    bossChoice("2-ethyl-3-methylhexanoic", "condensed"),
    bossMatch(["4-chloro-2-methylpentanoic", "3-bromo-2,2-dimethylhexanoic"]),
    bossBuilder("2-fluoro-4-methylpentanoic", "bond"),
    bossChoice("2-iodohexanoic", "bond"),
    bossMatch(["2-propylpentanoic", "2,2,3-trimethylbutanoic"]),
    bossBuilder("2,3,3-trimethylbutanoic", "bond"),
    bossChoice("3-bromo-2,2-dimethylhexanoic", "condensed"),
    bossMatch(["2-ethyl-3-methylhexanoic", "4-chloro-2-methylpentanoic"]),
    bossBuilder("3-ethylhexanoic", "bond"),
    bossChoice("2,2-dimethylhexanoic", "bond"),
    bossMatch(["3-chloro-2-methylbutanoic", "2,3-dimethylpentanoic"]),
  ];
  const roundCount = state.bossModifiers?.rounds ? 9 : 12;
  const totalTime = state.bossModifiers?.time ? 180 : 100;
  const damage = state.bossModifiers?.damage ? 1 : 2;
  state.boss = { rounds: allBossRounds.slice(0, roundCount), index: 0, correct: 0, timeLeft: totalTime, totalTime, damage };
  startBossTimer();
  runBossRound();
}

function runBossRound() {
  const round = state.boss.rounds[state.boss.index];
  if (round.type === "builder") return startBuilder(true, round);
  if (round.type === "choice") return startChoice(true, round);
  return startMatch(true, round);
}

function finishBossRound(correct) {
  if (correct) {
    state.boss.correct += 1;
    state.score += 50;
  }
  if (state.boss.index < state.boss.rounds.length - 1) {
    state.boss.index += 1;
    runBossRound();
  } else {
    const pass = state.boss.correct / state.boss.rounds.length >= 0.7;
    const bonus = pass ? state.boss.timeLeft * 2 : 0;
    state.score += bonus;
    endGame(pass ? "ชนะ ดร.ซู และออกจากแล็บสำเร็จ" : "คะแนนบอสยังไม่ถึง 70%", pass);
  }
}

function completeStage(stage, message) {
  const firstClear = !state.completedStages.has(stage);
  state.completedStages.add(stage);
  state.score += 150;
  updateStatus();
  if (firstClear && availableRewards().length) {
    state.pendingReward = { stage, message };
    openRewardModal(message);
    return;
  }
  state.pendingReward = null;
  state.modal = null;
  app.innerHTML = `
    <section class="game-screen result-screen">
      <div class="result-card">
        <p class="game-kicker">Stage Clear</p>
        <h2>${message}</h2>
        <p class="lead">ผ่านแล้ว ${state.completedStages.size}/3 ด่าน ${state.completedStages.size === 3 ? "ห้อง ดร.ซู ปลดล็อกแล้ว" : "เลือกด่านต่อไปจากแผนที่"}</p>
        <button class="game-button primary" type="button" data-action="map">กลับแผนที่</button>
      </div>
    </section>
  `;
  bind("[data-action='map']", () => setScreen("map"));
}

function availableRewards() {
  const rewards = [
    { id: "damage", title: "ลดดาเมจ", icon: "🛡", detail: "ตอบผิดในห้องบอสเสีย 1 หัวใจ" },
    { id: "time", title: "เพิ่มเวลา", icon: "⏱", detail: "เวลาบอสเพิ่มเป็น 180 วินาที" },
    { id: "rounds", title: "ลดจำนวนข้อ", icon: "✂", detail: "จำนวนข้อบอสลดเหลือ 9 ข้อ" },
  ];
  return rewards.filter((reward) => !state.bossModifiers?.[reward.id]);
}

function openRewardModal(message) {
  state.modal = { type: "reward", message };
  setScreen("map");
}

function renderModal() {
  if (state.modal.type === "zoom") {
    return `
      <div class="modal-backdrop" role="dialog" aria-modal="true">
        <div class="game-modal zoom-modal">
          <div class="zoom-head">
            <p class="game-kicker">ขยายสูตรโครงสร้าง</p>
            <button class="game-button quiet compact" type="button" data-modal="close">ปิด</button>
          </div>
          <h2>${state.modal.title}</h2>
          <img class="zoom-image" src="${state.modal.src}" alt="${state.modal.title}" />
        </div>
      </div>
    `;
  }
  if (state.modal.type === "reward") {
    const rewards = availableRewards();
    return `
      <div class="modal-backdrop" role="dialog" aria-modal="true">
        <div class="game-modal reward-modal">
          <p class="game-kicker">Stage Clear Reward</p>
          <h2>${state.modal.message}</h2>
          <p class="lead">เลือกพลัง 1 อย่างเพื่อทำให้ ดร.ซู อ่อนแอลง พลังที่เลือกแล้วจะไม่แสดงซ้ำ</p>
          <div class="reward-grid">
            ${rewards.map((reward) => `
              <button class="reward-card" type="button" data-reward="${reward.id}">
                <span>${reward.icon}</span>
                <strong>${reward.title}</strong>
                <small>${reward.detail}</small>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }
  const config = bossConfigText();
  return `
    <div class="modal-backdrop" role="dialog" aria-modal="true">
      <div class="game-modal warning-modal">
        <p class="game-kicker">Boss Warning</p>
        <h2>จะเข้าห้อง ดร.ซู ตอนนี้เลยไหม?</h2>
        <p class="lead">คุณยังผ่านด่านฝึกไม่ครบ บอสจะอยู่ในโหมดยากมาก: ${config}</p>
        <div class="hero-actions">
          <button class="game-button secondary" type="button" data-modal="close">ไปฝึกก่อน</button>
          <button class="game-button boss" type="button" data-modal="boss">ท้าดวลเลย</button>
        </div>
      </div>
    </div>
  `;
}

function closeModal() {
  state.modal = null;
  render();
}

function chooseReward(rewardId) {
  if (!state.bossModifiers || state.bossModifiers[rewardId]) return;
  state.bossModifiers[rewardId] = true;
  const pending = state.pendingReward;
  state.pendingReward = null;
  state.modal = null;
  app.innerHTML = `
    <section class="game-screen result-screen">
      <div class="result-card">
        <p class="game-kicker">Reward Equipped</p>
        <h2>${pending?.message || "ผ่านด่านแล้ว"}</h2>
        <p class="lead">${rewardLabel(rewardId)} ถูกติดตั้งแล้ว ตอนนี้สถานะบอสคือ ${bossConfigText()}</p>
        <button class="game-button primary" type="button" data-action="map">กลับแผนที่</button>
      </div>
    </section>
  `;
  bind("[data-action='map']", () => setScreen("map"));
}

function rewardLabel(rewardId) {
  if (rewardId === "damage") return "ลดดาเมจ";
  if (rewardId === "time") return "เพิ่มเวลา";
  return "ลดจำนวนข้อ";
}

function bossConfig() {
  return {
    damage: state.bossModifiers?.damage ? 1 : 2,
    time: state.bossModifiers?.time ? 180 : 100,
    rounds: state.bossModifiers?.rounds ? 9 : 12,
  };
}

function bossConfigText() {
  const config = bossConfig();
  return `${config.rounds} ข้อ · ${config.time} วิ · ผิดเสีย ${config.damage} หัวใจ`;
}

function bossStatusText() {
  const unlocked = state.completedStages.size === 3;
  const activeRewards = ["damage", "time", "rounds"].filter((id) => state.bossModifiers?.[id]).length;
  return `${unlocked ? "พร้อมลุย" : "เข้าได้ทันทีแต่มีคำเตือน"} · ${bossConfigText()} · debuff ${activeRewards}/3`;
}

function endGame(reason, won) {
  clearTimer();
  state.summary = { reason, won, endedAt: Date.now() };
  setScreen("summary");
}

function renderSummary() {
  const elapsed = Math.max(1, Math.round(((state.summary?.endedAt || Date.now()) - state.startedAt) / 1000));
  const accuracy = state.attempted ? Math.round((state.correct / state.attempted) * 100) : 0;
  app.innerHTML = `
    <section class="game-screen summary-screen">
      <div class="summary-card">
        <p class="game-kicker">${state.summary?.won ? "Mission Complete" : "Mission Report"}</p>
        <h2>${state.summary?.reason || "สรุปผลรอบนี้"}</h2>
        <div class="score-hero">
          <span>คะแนนรอบนี้</span>
          <strong>${Math.max(0, state.score)}</strong>
        </div>
        <div class="summary-grid">
          <div><span>ความถูกต้อง</span><strong>${accuracy}%</strong></div>
          <div><span>ตอบถูก</span><strong>${state.correct}/${state.attempted}</strong></div>
          <div><span>เวลา</span><strong>${elapsed}s</strong></div>
          <div><span>ด่านที่ผ่าน</span><strong>${state.completedStages.size}/3</strong></div>
          <div><span>หัวใจเหลือ</span><strong>${Math.max(0, state.lives)}</strong></div>
        </div>
        <p class="lead">${summaryAdvice(accuracy)}</p>
        <div class="hero-actions">
          <button class="game-button primary" type="button" data-action="restart">เล่นใหม่</button>
          <button class="game-button secondary" type="button" data-action="data">คลังความรู้</button>
          <button class="game-button quiet" type="button" data-action="credits">เครดิต</button>
        </div>
      </div>
      <img class="summary-boss" src="assets/characters/dr-su-male-ai.png" alt="ดร.ซู" />
    </section>
  `;
  bind("[data-action='restart']", resetGame);
  bind("[data-action='data']", () => setScreen("data"));
  bind("[data-action='credits']", () => setScreen("credits"));
}

function renderData() {
  app.innerHTML = `
    <section class="game-screen data-screen">
      <div class="page-panel">
        <p class="game-kicker">Fact-check Library</p>
        <h2>คลังข้อมูลกรดคาร์บอกซิลิก</h2>
        <p class="lead">ข้อมูลชื่อ สูตร และ CID ตรวจสอบกับ PubChem เบื้องต้นแล้ว ก่อนส่งงานจริงควรเปิด PubChem และตำรา สสวท. ตรวจซ้ำทีละข้อ</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th>ชื่อในเกม</th><th>สูตรโมเลกุล</th><th>สูตรย่อ</th><th>ประเภทโจทย์</th><th>PubChem</th></tr></thead>
            <tbody>
              ${compounds.map((compound) => `<tr><td><strong>${compound.displayName}</strong><br><span>PubChem preferred: ${compound.pubchemName}</span></td><td>${formatChem(compound.formula)}</td><td>${formatChem(compound.condensed)}</td><td>${compound.category}</td><td><a href="${compound.sourceUrl}" target="_blank" rel="noopener">CID ${compound.cid}</a></td></tr>`).join("")}
            </tbody>
          </table>
        </div>
        <button class="game-button primary" type="button" data-action="back">กลับเกม</button>
      </div>
    </section>
  `;
  bind("[data-action='back']", () => setScreen(state.roundPlan ? "map" : "home"));
}

function renderCredits() {
  app.innerHTML = `
    <section class="game-screen credits-screen">
      <div class="page-panel">
        <p class="game-kicker">AI Ethics & Credits</p>
        <h2>เครดิตและความโปร่งใส</h2>
        <div class="credit-grid">
          <div><strong>AI Tool</strong><span>Codex / OpenAI ใช้ช่วยเขียนโค้ด วาง UX/UI และจัดคำอธิบาย feedback</span></div>
          <div><strong>Structure Assets</strong><span>ภาพสูตรเส้นพันธะดาวน์โหลดจาก PubChem PNG ตาม CID และเก็บไว้ในโปรเจกต์</span></div>
          <div><strong>AI Visual Assets</strong><span>ภาพตัวละครนักเรียน, ดร.ซู และพื้นหลังด่าน สร้างด้วย OpenAI image generation แล้วเก็บใน assets/characters/ และ assets/backgrounds/</span></div>
          <div><strong>School Logo</strong><span>โลโก้โรงเรียนใช้จากเว็บไซต์ saard.ac.th ตามลิงก์ที่ผู้จัดทำระบุ</span></div>
          <div><strong>Privacy</strong><span>เกมไม่เก็บข้อมูลส่วนตัว คะแนนอยู่เฉพาะรอบที่เล่น</span></div>
        </div>
        <p class="lead">Final Productive Prompt: สร้างเกม Escape Room/RPG เรื่องการเรียกชื่อกรดคาร์บอกซิลิกตาม IUPAC เน้นโซ่ alkane มีกิ่ง methyl, ethyl, propyl และ halo substituents มี Name Builder, Acid Rush แบบ 4 ตัวเลือกสีสด, Matching Lab และ Final Boss ดร.ซู</p>
        <button class="game-button primary" type="button" data-action="home">หน้าแรก</button>
      </div>
    </section>
  `;
  bind("[data-action='home']", () => setScreen("home"));
}

function structureCard(compound, promptType, instruction) {
  const isCondensed = promptType === "condensed";
  const label = isCondensed ? "สูตรโครงสร้างแบบย่อ" : "สูตรโครงสร้างแบบเส้นพันธะ";
  const visual = isCondensed
    ? `<div class="condensed-prompt">${formatChem(compound.condensed)}</div>`
    : `<div class="structure-image-wrap"><img src="${compound.images.bond}" alt="${label} ของ ${compound.displayName}" /><button class="zoom-button" type="button" data-zoom-src="${compound.images.bond}" data-zoom-title="${escapeAttr(compound.displayName)}">🔍</button></div>`;
  return `
    <div class="structure-card">
      <div class="card-title"><span>${instruction}</span><strong>${label}</strong></div>
      ${visual}
      <div class="structure-meta">
        <span>${formatChem(compound.formula)}</span>
      </div>
    </div>
  `;
}

function gameHeader(title, progress, timer = null) {
  const bossHeader = state.boss ? " boss-title-card" : "";
  return `
    <header class="play-header${bossHeader}">
      <div>
        <p class="game-kicker">${progress}</p>
        <h2>${title}</h2>
        ${timer ? timerBar(timer) : ""}
      </div>
    </header>
  `;
}

function bossProgress() {
  const boss = state.boss;
  return `Boss ${boss.index + 1}/${boss.rounds.length} · เวลา ${boss.timeLeft}s · ดาเมจ ${boss.damage}`;
}

function feedback(item) {
  if (!item) return "";
  return `<div class="feedback ${item.type}">${item.text}</div>`;
}

function tokenOptions(compound) {
  const roots = ["meth", "eth", "prop", "but", "pent", "hex", "hept"];
  const prefixes = ["2-methyl", "3-methyl", "4-methyl", "2,2-dimethyl", "2,3-dimethyl", "2-ethyl", "3-ethyl", "2-propyl", "2-chloro", "3-chloro", "4-chloro", "2-fluoro", "3-bromo", "2-iodo", "2,2,3-trimethyl", "2,3,3-trimethyl"];
  const parts = [...compound.parts];
  const targetCount = 12;
  const distractors = shuffle([...new Set([...roots, ...prefixes, "anoic acid"])].filter((part) => part && !parts.includes(part))).slice(0, Math.max(0, targetCount - parts.length));
  return shuffle([...new Set([...parts, ...distractors])]);
}

function buildOptions(compound) {
  const targetRoot = compound.parts.find((part) => ["meth", "eth", "prop", "but", "pent", "hex", "hept", "oct", "non", "dec"].includes(part));
  const scored = compounds
    .filter((item) => item.id !== compound.id)
    .map((item) => {
      let score = 0;
      if (item.formula === compound.formula) score += 8;
      if (item.category === compound.category) score += 5;
      if (targetRoot && item.parts.includes(targetRoot)) score += 4;
      if (item.parts.some((part) => compound.parts.includes(part))) score += 3;
      if (formulaCarbonCount(item.formula) === formulaCarbonCount(compound.formula)) score += 2;
      return { item, score };
    })
    .sort((a, b) => b.score - a.score || a.item.displayName.localeCompare(b.item.displayName));
  const distractors = scored.slice(0, 3).map(({ item }) => item.displayName);
  return shuffle([compound.displayName, ...distractors]);
}

function formulaCarbonCount(formula) {
  const match = formula.match(/C(\d*)/);
  if (!match) return 0;
  return match[1] ? Number(match[1]) : 1;
}

function buildMatchCards(items, compact) {
  const formulaTypes = compact ? ["bond", "condensed"] : ["bond", "condensed", "formula", "bond", "condensed", "bond"];
  const formulaCards = items.map((compound, index) => ({
    cardId: `f-${compound.id}-${index}`,
    pairId: compound.id,
    role: "formula",
    type: formulaTypes[index % formulaTypes.length],
    compound,
  }));
  const nameCards = items.map((compound, index) => ({
    cardId: `n-${compound.id}-${index}`,
    pairId: compound.id,
    role: "name",
    type: "name",
    compound,
  }));
  return shuffle([...formulaCards, ...nameCards]);
}

function renderFlashCard(card, game) {
  const selected = game.selected.includes(card.cardId);
  const matched = game.lockedPairs.has(card.pairId);
  const content = card.type === "name"
    ? `<strong>${card.compound.displayName}</strong>`
    : card.type === "formula"
      ? `<strong>${formatChem(card.compound.formula)}</strong><small>สูตรโมเลกุล</small>`
      : card.type === "condensed"
        ? `<strong>${formatChem(card.compound.condensed)}</strong><small>สูตรโครงสร้างแบบย่อ</small>`
        : `<img src="${card.compound.images.bond}" alt="สูตรเส้นพันธะของ ${card.compound.displayName}" />`;
  const zoom = card.type === "bond" ? `<button class="zoom-button mini" type="button" data-zoom-src="${card.compound.images.bond}" data-zoom-title="${escapeAttr(card.compound.displayName)}">🔍</button>` : "";
  return `<div class="flashcard-shell">${zoom}<button class="flashcard ${selected ? "selected" : ""} ${matched ? "matched" : ""}" type="button" data-card="${card.cardId}" ${matched ? "disabled" : ""}>${content}</button></div>`;
}

function recordAttempt(correct, points) {
  state.attempted += 1;
  if (correct) {
    state.correct += 1;
    state.score += points;
  } else {
    const damage = state.boss ? state.boss.damage : 1;
    state.lives -= damage;
    state.score += points;
  }
  updateStatus();
}

function bossBuilder(id, promptType) {
  return { type: "builder", compound: compoundById[id], promptType };
}

function bossChoice(id, promptType) {
  const compound = compoundById[id];
  return { type: "choice", compound, promptType, options: buildOptions(compound) };
}

function bossMatch(ids) {
  return { type: "match", matchCompounds: ids.map((id) => compoundById[id]) };
}

function startBossTimer() {
  clearTimer();
  state.timerId = setInterval(() => {
    if (!state.boss) return clearTimer();
    state.boss.timeLeft -= 1;
    if (["builder", "choice", "match"].includes(state.screen)) updateTimerDisplay(bossProgress(), state.boss.timeLeft, state.boss.totalTime);
    if (state.boss.timeLeft <= 0) endGame("หมดเวลาในห้อง ดร.ซู", false);
  }, 1000);
}

function timerBar(timer) {
  const total = Math.max(1, timer.total || 1);
  const current = Math.max(0, timer.current || 0);
  const pct = Math.min(100, Math.max(0, (current / total) * 100));
  return `
    <div class="timer-panel" aria-label="เวลาที่เหลือ">
      <div class="timer-label">${timer.label || "Timer"} · ${current}s</div>
      <div class="timer-track"><span class="timer-fill" style="width:${pct}%"></span></div>
    </div>
  `;
}

function updateTimerDisplay(text, current, total) {
  const kicker = document.querySelector(".game-kicker");
  if (kicker) kicker.textContent = text;
  const label = document.querySelector(".timer-label");
  if (label) label.textContent = `${state.boss ? "Boss Timer" : "Acid Rush"} · ${Math.max(0, current)}s`;
  const fill = document.querySelector(".timer-fill");
  if (fill) fill.style.width = `${Math.min(100, Math.max(0, (Math.max(0, current) / Math.max(1, total)) * 100))}%`;
}

function bossTimerData() {
  return { current: state.boss?.timeLeft || 0, total: state.boss?.totalTime || 1, label: "Boss Timer" };
}

function clearTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function summaryAdvice(accuracy) {
  if (state.summary?.won) return "เยี่ยมมาก รอบนี้คุณนับตำแหน่งกิ่งและใช้ di-/tri- ได้ดี";
  if (accuracy >= 70) return "ใกล้ผ่านแล้ว ลองทบทวนการเริ่มนับจาก carbon ของ -COOH และการเรียง substituent";
  return "แนะนำให้เริ่มจากหา -COOH ก่อน แล้วไล่นับโซ่หลักทีละตำแหน่งก่อนเลือกชื่อ";
}

function playerImage() {
  return playerAssets[state.playerGender] || playerAssets.male;
}

function selectPlayer(gender) {
  state.playerGender = gender === "female" ? "female" : "male";
  renderHome();
}

function playScreenClass(stage, isBoss) {
  if (isBoss) return "stage-bg-boss";
  if (stage === "builder") return "stage-bg-builder";
  if (stage === "choice") return "stage-bg-choice";
  return "stage-bg-match";
}

function openZoomModal(src, title) {
  state.modal = { type: "zoom", src, title };
  render();
}

function bindModalActions() {
  bind("[data-modal='close']", closeModal);
  bind("[data-modal='boss']", () => {
    state.modal = null;
    startBoss(true);
  });
  app.querySelectorAll("[data-reward]").forEach((button) => button.addEventListener("click", () => chooseReward(button.dataset.reward)));
  app.querySelectorAll("[data-zoom-src]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openZoomModal(button.dataset.zoomSrc, button.dataset.zoomTitle || "สูตรโครงสร้างแบบเส้นพันธะ");
    });
  });
}

function bind(selector, handler) {
  const node = app.querySelector(selector);
  if (node) node.addEventListener("click", handler);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function escapeAttr(text) {
  return escapeHtml(text).replace(/'/g, "&#39;");
}

function escapeHtml(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function formatChem(text) {
  return `<span class="chem">${escapeHtml(text).replace(/(\d+)/g, "<sub>$1</sub>")}</span>`;
}

document.querySelector("#homeButton").addEventListener("click", () => setScreen("home"));
document.querySelector("#dataButton").addEventListener("click", () => setScreen("data"));
document.querySelector("#creditButton").addEventListener("click", () => setScreen("credits"));

render();
