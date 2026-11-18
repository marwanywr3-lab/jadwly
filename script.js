// البيانات المعتمدة للجدول الدراسي (المادة، المعلم، الوقت فقط)
const SCHEDULE_DATA = [
  {
    dayIndex: 0, // الأحد
    dayName: "الأحد",
    lessons: [
      { period: "الحصة الأولى", subject: "العلوم", teacher: "علي مصلح البارقي", start: "07:00", end: "07:45", timeLabel: "07:00 ص - 07:45 ص" },
      { period: "الحصة الثانية", subject: "الرياضيات", teacher: "فراس بن عبدالله بن الوهيد", start: "07:46", end: "08:31", timeLabel: "07:46 ص - 08:31 ص" },
      { period: "الحصة الثالثة", subject: "اللغة الإنجليزية", teacher: "سلطان عبدالله القحطاني", start: "08:32", end: "09:17", timeLabel: "08:32 ص - 09:17 ص" },
      { period: "الحصة الرابعة", subject: "الدراسات الاجتماعية", teacher: "إبراهيم صالح زيد", start: "09:44", end: "10:29", timeLabel: "09:44 ص - 10:29 ص" },
      { period: "الحصة الخامسة", subject: "العلوم", teacher: "علي مصلح البارقي", start: "10:30", end: "11:15", timeLabel: "10:30 ص - 11:15 ص" },
      { period: "الحصة السادسة", subject: "التربية الفنية", teacher: "يحي سالم مران", start: "11:16", end: "12:01", timeLabel: "11:16 ص - 12:01 م" },
      { period: "الحصة السابعة", subject: "القرآن الكريم والدراسات الإسلامية", teacher: "علي بن عبدالكريم بن الحميدان", start: "12:02", end: "12:47", timeLabel: "12:02 م - 12:47 م" }
    ]
  },
  {
    dayIndex: 1, // الاثنين
    dayName: "الاثنين",
    lessons: [
      { period: "الحصة الأولى", subject: "التربية الفنية", teacher: "يحي سالم مران", start: "07:00", end: "07:45", timeLabel: "07:00 ص - 07:45 ص" },
      { period: "الحصة الثانية", subject: "التربية البدنية والدفاع عن النفس", teacher: "عمر عبدالله الخلف", start: "07:46", end: "08:31", timeLabel: "07:46 ص - 08:31 ص" },
      { period: "الحصة الثالثة", subject: "التربية البدنية والدفاع عن النفس", teacher: "عمر عبدالله الخلف", start: "08:32", end: "09:17", timeLabel: "08:32 ص - 09:17 ص" },
      { period: "الحصة الرابعة", subject: "القرآن الكريم والدراسات الإسلامية", teacher: "علي بن عبدالكريم بن الحميدان", start: "09:44", end: "10:29", timeLabel: "09:44 ص - 10:29 ص" },
      { period: "الحصة الخامسة", subject: "اللغة الإنجليزية", teacher: "سلطان عبدالله القحطاني", start: "10:30", end: "11:15", timeLabel: "10:30 ص - 11:15 ص" },
      { period: "الحصة السادسة", subject: "الرياضيات", teacher: "فراس بن عبدالله بن الوهيد", start: "11:16", end: "12:01", timeLabel: "11:16 ص - 12:01 م" },
      { period: "الحصة السابعة", subject: "اللغة العربية", teacher: "حسين محمد مباركي", start: "12:02", end: "12:47", timeLabel: "12:02 م - 12:47 م" }
    ]
  },
  {
    dayIndex: 2, // الثلاثاء
    dayName: "الثلاثاء",
    lessons: [
      { period: "الحصة الأولى", subject: "اللغة العربية", teacher: "حسين محمد مباركي", start: "07:00", end: "07:45", timeLabel: "07:00 ص - 07:45 ص" },
      { period: "الحصة الثانية", subject: "الدراسات الاجتماعية", teacher: "إبراهيم صالح زيد", start: "07:46", end: "08:31", timeLabel: "07:46 ص - 08:31 ص" },
      { period: "الحصة الثالثة", subject: "القرآن الكريم والدراسات الإسلامية", teacher: "علي بن عبدالكريم بن الحميدان", start: "08:32", end: "09:17", timeLabel: "08:32 ص - 09:17 ص" },
      { period: "الحصة الرابعة", subject: "المهارات الحياتية والأسرية", teacher: "عمر عبدالله الخلف", start: "09:44", end: "10:29", timeLabel: "09:44 ص - 10:29 ص" },
      { period: "الحصة الخامسة", subject: "الرياضيات", teacher: "فراس بن عبدالله بن الوهيد", start: "10:30", end: "11:15", timeLabel: "10:30 ص - 11:15 ص" },
      { period: "الحصة السادسة", subject: "المهارات الرقمية", teacher: "ماجد سليم العتيبي", start: "11:16", end: "12:01", timeLabel: "11:16 ص - 12:01 م" },
      { period: "الحصة السابعة", subject: "العلوم", teacher: "علي مصلح البارقي", start: "12:02", end: "12:47", timeLabel: "12:02 م - 12:47 م" }
    ]
  },
  {
    dayIndex: 3, // الأربعاء
    dayName: "الأربعاء",
    lessons: [
      { period: "الحصة الأولى", subject: "اللغة العربية", teacher: "حسين محمد مباركي", start: "07:00", end: "07:45", timeLabel: "07:00 ص - 07:45 ص" },
      { period: "الحصة الثانية", subject: "اللغة الإنجليزية", teacher: "سلطان عبدالله القحطاني", start: "07:46", end: "08:31", timeLabel: "07:46 ص - 08:31 ص" },
      { period: "الحصة الثالثة", subject: "الرياضيات", teacher: "فراس بن عبدالله بن الوهيد", start: "08:32", end: "09:17", timeLabel: "08:32 ص - 09:17 ص" },
      { period: "الحصة الرابعة", subject: "العلوم", teacher: "علي مصلح البارقي", start: "09:44", end: "10:29", timeLabel: "09:44 ص - 10:29 ص" },
      { period: "الحصة الخامسة", subject: "القرآن الكريم والدراسات الإسلامية", teacher: "علي بن عبدالكريم بن الحميدان", start: "10:30", end: "11:15", timeLabel: "10:30 ص - 11:15 ص" },
      { period: "الحصة السادسة", subject: "اللغة العربية", teacher: "حسين محمد مباركي", start: "11:16", end: "12:01", timeLabel: "11:16 ص - 12:01 م" },
      null
    ]
  },
  {
    dayIndex: 4, // الخميس
    dayName: "الخميس",
    lessons: [
      { period: "الحصة الأولى", subject: "اللغة الإنجليزية", teacher: "سلطان عبدالله القحطاني", start: "07:00", end: "07:45", timeLabel: "07:00 ص - 07:45 ص" },
      { period: "الحصة الثانية", subject: "اللغة العربية", teacher: "حسين محمد مباركي", start: "07:46", end: "08:31", timeLabel: "07:46 ص - 08:31 ص" },
      { period: "الحصة الثالثة", subject: "القرآن الكريم والدراسات الإسلامية", teacher: "علي بن عبدالكريم بن الحميدان", start: "08:32", end: "09:17", timeLabel: "08:32 ص - 09:17 ص" },
      { period: "الحصة الرابعة", subject: "الرياضيات", teacher: "فراس بن عبدالله بن الوهيد", start: "09:44", end: "10:29", timeLabel: "09:44 ص - 10:29 ص" },
      { period: "الحصة الخامسة", subject: "الدراسات الاجتماعية", teacher: "إبراهيم صالح زيد", start: "10:30", end: "11:15", timeLabel: "10:30 ص - 11:15 ص" },
      { period: "الحصة السادسة", subject: "الرياضيات", teacher: "فراس بن عبدالله بن الوهيد", start: "11:16", end: "12:01", timeLabel: "11:16 ص - 12:01 م" },
      null
    ]
  }
];

const ARABIC_DAYS = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
let selectedDayIndex = new Date().getDay() <= 4 ? new Date().getDay() : 0;

function timeToSeconds(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 3600 + m * 60;
}

function formatCountdown(totalSeconds) {
  if (totalSeconds < 0) totalSeconds = 0;
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return hrs > 0 ? `${pad(hrs)}:${pad(mins)}:${pad(secs)}` : `${pad(mins)}:${pad(secs)}`;
}

function initTheme() {
  const saved = localStorage.getItem("jadwali-theme");
  const initialTheme = saved || "light";
  applyTheme(initialTheme);

  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("jadwali-theme", next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabel");
  if (theme === "dark") {
    icon.textContent = "☀️";
    label.textContent = "الوضع الفاتح";
  } else {
    icon.textContent = "🌙";
    label.textContent = "الوضع الداكن";
  }
}

function renderDayPills() {
  const container = document.getElementById("dayPills");
  container.innerHTML = "";
  SCHEDULE_DATA.forEach((day) => {
    const btn = document.createElement("button");
    btn.className = `day-pill-btn ${day.dayIndex === selectedDayIndex ? "active" : ""}`;
    btn.textContent = day.dayName;
    btn.addEventListener("click", () => {
      selectedDayIndex = day.dayIndex;
      switchView("today");
      renderDayPills();
      updateLiveStatus();
    });
    container.appendChild(btn);
  });
}

function initViewSwitcher() {
  const btnFull = document.getElementById("btnFullView");
  const btnToday = document.getElementById("btnTodayView");

  btnFull.addEventListener("click", () => switchView("full"));
  btnToday.addEventListener("click", () => switchView("today"));
}

function switchView(view) {
  const fullContainer = document.getElementById("fullTableContainer");
  const todayContainer = document.getElementById("todayCardsContainer");
  const btnFull = document.getElementById("btnFullView");
  const btnToday = document.getElementById("btnTodayView");

  if (view === "today") {
    fullContainer.classList.add("hidden");
    todayContainer.classList.remove("hidden");
    btnToday.classList.add("active");
    btnFull.classList.remove("active");
  } else {
    todayContainer.classList.add("hidden");
    fullContainer.classList.remove("hidden");
    btnFull.classList.add("active");
    btnToday.classList.remove("active");
  }
}

function evaluateCurrentState(now) {
  const dayOfWeek = now.getDay();
  const nowSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const todaySchedule = SCHEDULE_DATA.find((d) => d.dayIndex === dayOfWeek);

  if (!todaySchedule) {
    return {
      mode: "weekend",
      badge: "عطلة نهاية الأسبوع",
      title: "لا توجد حصص دراسية اليوم",
      meta: "الجدول القادم يبدأ يوم الأحد الساعة 07:00 ص",
      countdownLabel: "الحالة",
      countdownValue: "إجازة",
      progress: 0,
      activeDay: null,
      activeLessonIndex: -1,
      nextLessonIndex: -1
    };
  }

  const validLessons = todaySchedule.lessons
    .map((lesson, idx) => (lesson ? { ...lesson, idx } : null))
    .filter(Boolean);

  for (let i = 0; i < validLessons.length; i++) {
    const lesson = validLessons[i];
    const startSec = timeToSeconds(lesson.start);
    const endSec = timeToSeconds(lesson.end) + 59;

    if (nowSeconds >= startSec && nowSeconds <= endSec) {
      const remaining = endSec - nowSeconds;
      const total = endSec - startSec;
      const progress = Math.min(100, Math.max(0, ((nowSeconds - startSec) / total) * 100));
      const nextLesson = validLessons[i + 1];

      return {
        mode: "live",
        badge: `الآن • ${lesson.period}`,
        title: lesson.subject,
        meta: `المعلم: ${lesson.teacher} • الوقت: ${lesson.timeLabel}${nextLesson ? ` | القادمة: ${nextLesson.subject}` : ""}`,
        countdownLabel: "متبقي على نهاية الحصة",
        countdownValue: formatCountdown(remaining),
        progress,
        activeDay: dayOfWeek,
        activeLessonIndex: lesson.idx,
        nextLessonIndex: nextLesson ? nextLesson.idx : -1
      };
    }
  }

  for (let i = 0; i < validLessons.length; i++) {
    const lesson = validLessons[i];
    const startSec = timeToSeconds(lesson.start);

    if (nowSeconds < startSec) {
      const remaining = startSec - nowSeconds;
      const isBreak = i > 0 && nowSeconds > timeToSeconds(validLessons[i - 1].end);
      return {
        mode: "next",
        badge: isBreak ? "فترة راحة / فسحة" : "الحصة القادمة اليوم",
        title: `${lesson.subject} (${lesson.period})`,
        meta: `المعلم: ${lesson.teacher} • تبدأ الساعة ${lesson.timeLabel.split("-")[0].trim()}`,
        countdownLabel: "تبدأ بعد",
        countdownValue: formatCountdown(remaining),
        progress: 0,
        activeDay: dayOfWeek,
        activeLessonIndex: -1,
        nextLessonIndex: lesson.idx
      };
    }
  }

  const nextSchoolDay = dayOfWeek === 4 ? "الأحد" : ARABIC_DAYS[dayOfWeek + 1];
  return {
    mode: "finished",
    badge: "انتهى اليوم الدراسي",
    title: "انتهت جميع حصص اليوم",
    meta: `أحسنت! الدوام القادم يوم ${nextSchoolDay} الساعة 07:00 ص`,
    countdownLabel: "الحالة",
    countdownValue: "منتهي",
    progress: 100,
    activeDay: dayOfWeek,
    activeLessonIndex: -1,
    nextLessonIndex: -1
  };
}

function renderSchedule(state) {
  const tbody = document.getElementById("scheduleBody");
  tbody.innerHTML = "";

  SCHEDULE_DATA.forEach((day) => {
    const tr = document.createElement("tr");
    const isToday = day.dayIndex === state.activeDay;
    if (isToday) tr.classList.add("today-row");

    const dayTd = document.createElement("td");
    dayTd.className = "day-cell";
    dayTd.innerHTML = `${day.dayName}${isToday ? '<span class="today-tag">اليوم</span>' : ""}`;
    tr.appendChild(dayTd);

    day.lessons.forEach((lesson, idx) => {
      const td = document.createElement("td");
      if (!lesson) {
        td.className = "empty-cell";
        td.textContent = "—";
      } else {
        td.className = "lesson-cell";
        let badgeHtml = "";
        if (isToday && idx === state.activeLessonIndex) {
          td.classList.add("active-now");
          badgeHtml = `<div class="cell-badge">الحصة الحالية</div>`;
        } else if (isToday && idx === state.nextLessonIndex) {
          td.classList.add("up-next");
          badgeHtml = `<div class="cell-badge">الحصة القادمة</div>`;
        }

        td.innerHTML = `
          ${badgeHtml}
          <div class="lesson-subject">${lesson.subject}</div>
          <div class="lesson-teacher">${lesson.teacher}</div>
          <div class="lesson-time">${lesson.timeLabel}</div>
        `;
      }
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  const selectedDayObj = SCHEDULE_DATA.find((d) => d.dayIndex === selectedDayIndex) || SCHEDULE_DATA[0];
  document.getElementById("selectedDayHeading").textContent = `حصص يوم ${selectedDayObj.dayName}`;
  const cardsGrid = document.getElementById("dayCardsGrid");
  cardsGrid.innerHTML = "";

  selectedDayObj.lessons.forEach((lesson, idx) => {
    if (!lesson) return;
    const isSelectedToday = selectedDayObj.dayIndex === state.activeDay;
    const card = document.createElement("div");
    card.className = "day-card";

    let statusText = "";
    if (isSelectedToday && idx === state.activeLessonIndex) {
      card.classList.add("active-now");
      statusText = " • جارية الآن";
    } else if (isSelectedToday && idx === state.nextLessonIndex) {
      card.classList.add("up-next");
      statusText = " • القادمة";
    }

    card.innerHTML = `
      <div class="day-card-top">
        <span>${lesson.period}${statusText}</span>
        <span class="lesson-time">${lesson.timeLabel}</span>
      </div>
      <div class="lesson-subject">${lesson.subject}</div>
      <div class="lesson-teacher">${lesson.teacher}</div>
    `;
    cardsGrid.appendChild(card);
  });
}

function updateLiveStatus() {
  const now = new Date();

  const dateFormatter = new Intl.DateTimeFormat("ar-SA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  document.getElementById("currentDateText").textContent = dateFormatter.format(now);

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  document.getElementById("currentTimeText").textContent = timeFormatter.format(now);

  const state = evaluateCurrentState(now);
  const banner = document.getElementById("statusBanner");
  banner.classList.remove("is-live", "is-next");
  if (state.mode === "live") banner.classList.add("is-live");
  if (state.mode === "next") banner.classList.add("is-next");

  document.getElementById("statusBadgeText").textContent = state.badge;
  document.getElementById("statusTitle").textContent = state.title;
  document.getElementById("statusMeta").textContent = state.meta;
  document.getElementById("countdownLabel").textContent = state.countdownLabel;
  document.getElementById("countdownValue").textContent = state.countdownValue;
  document.getElementById("progressBar").style.width = `${state.progress}%`;

  renderSchedule(state);
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderDayPills();
  initViewSwitcher();
  updateLiveStatus();
  setInterval(updateLiveStatus, 1000);
});
