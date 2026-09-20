// Reusable quiz widget for the Superpowers teaching workspace.
//
// Usage in HTML:
//   <div class="quiz" data-quiz-id="l0001">
//     <div class="q" data-answer="2" data-explain="因为...">
//       <div class="q-number">Question 1</div>
//       <div class="q-text">题目文本</div>
//       <div class="opts">
//         <button data-i="0">选项 A</button>
//         <button data-i="1">选项 B</button>
//         <button data-i="2">选项 C</button>
//       </div>
//       <div class="feedback"></div>
//     </div>
//     ... 更多 .q ...
//     <div class="score"></div>
//   </div>
//
// Behaviour:
// - Click an option → immediate correct/wrong feedback (color + explanation).
// - Locked after first answer (no retry — this is recall practice, not puzzle).
// - Score auto-updates at bottom, saved to localStorage per data-quiz-id.
// - If localStorage already has answers for this quiz, it "restores" so the user
//   can see their previous attempt (supports spacing when they revisit).
// - "重置" small button on score line to clear.

(function () {
  function initQuiz(root) {
    const id = root.dataset.quizId || "default";
    const storeKey = `sp:quiz:${id}`;
    const saved = loadSaved(storeKey);
    const questions = Array.from(root.querySelectorAll(".q"));

    questions.forEach((q, qi) => {
      const answer = parseInt(q.dataset.answer, 10);
      const explain = q.dataset.explain || "";
      const feedback = q.querySelector(".feedback");
      const buttons = Array.from(q.querySelectorAll("button.opt"));
      const prior = saved && saved[String(qi)];

      function lock(picked) {
        buttons.forEach((b) => {
          b.disabled = true;
          const i = parseInt(b.dataset.i, 10);
          if (i === answer) b.classList.add("correct");
          else if (i === picked) b.classList.add("wrong");
        });
        if (feedback) {
          const ok = picked === answer;
          feedback.textContent =
            (ok ? "✓ 正确。 " : "✗ 不对。 ") + (explain || "").trim();
          feedback.classList.add("show", ok ? "ok" : "bad");
        }
        updateScore();
      }

      buttons.forEach((b) => {
        b.addEventListener("click", () => {
          const picked = parseInt(b.dataset.i, 10);
          const record = loadSaved(storeKey) || {};
          if (record[String(qi)] !== undefined) return;
          record[String(qi)] = picked;
          save(storeKey, record);
          lock(picked);
        });
      });

      if (prior !== undefined && prior !== null) lock(parseInt(prior, 10));
    });

    function updateScore() {
      const scoreEl = root.querySelector(".score");
      if (!scoreEl) return;
      const record = loadSaved(storeKey) || {};
      const attempted = Object.keys(record).length;
      const correct = questions.reduce((acc, q, i) => {
        const a = parseInt(q.dataset.answer, 10);
        const picked = record[String(i)];
        return acc + (picked !== undefined && parseInt(picked, 10) === a ? 1 : 0);
      }, 0);
      scoreEl.innerHTML =
        `得分：<strong>${correct}</strong> / ${questions.length}　已作答：${attempted}　` +
        `<button class="reset" type="button" style="all:unset;cursor:pointer;color:var(--accent);text-decoration:underline;font-size:0.85rem">重置本课</button>`;
      const resetBtn = scoreEl.querySelector(".reset");
      if (resetBtn && !resetBtn._bound) {
        resetBtn._bound = true;
        resetBtn.addEventListener("click", () => {
          localStorage.removeItem(storeKey);
          location.reload();
        });
      }
    }
    updateScore();
  }

  function loadSaved(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }
  function save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".quiz").forEach(initQuiz);
  });
})();
