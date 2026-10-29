(() => {
    "use strict";

    const questions = [
        {
            category: "SELECTOR BASICS",
            type: "single",
            title: "What does the CSS pseudo-element ::selection target?",
            options: [
                { id: "a", text: "Text currently highlighted by the user" },
                { id: "b", text: "The first letter of every paragraph" },
                { id: "c", text: "Every element selected with a CSS class" },
                { id: "d", text: "The text inside a focused input only" },
            ],
            correct: ["a"],
            explanation:
                "::selection styles the portion of document text highlighted by the user, for example by dragging a mouse across a paragraph.",
        },
        {
            category: "CSS SYNTAX",
            type: "single",
            title: "Which selector correctly styles selected text throughout a page?",
            code: "::selection {\n  color: white;\n  background-color: navy;\n}",
            options: [
                { id: "a", text: ":selection { ... }" },
                { id: "b", text: "::selection { ... }" },
                { id: "c", text: "selection() { ... }" },
                { id: "d", text: "selected::text { ... }" },
            ],
            correct: ["b"],
            explanation:
                "The correct pseudo-element uses two colons: ::selection. It can be styled like other CSS pseudo-elements.",
        },
        {
            category: "COLOR CONTROL",
            type: "multiple",
            title: "Which properties are commonly used to control selected text colors?",
            hint: "Choose every correct answer.",
            options: [
                { id: "a", text: "color" },
                { id: "b", text: "background-color" },
                { id: "c", text: "font-size" },
                { id: "d", text: "margin" },
            ],
            correct: ["a", "b"],
            explanation:
                "color sets the selected text color, while background-color sets its highlight background. font-size and margin do not style the selection highlight.",
        },
        {
            category: "READ THE CODE",
            type: "single",
            title: "What color will the selected text have in this example?",
            code: "::selection {\n  color: #182d3d;\n  background-color: #f4c95d;\n}",
            options: [
                { id: "a", text: "Yellow text on a dark blue background" },
                { id: "b", text: "Dark blue text on a yellow background" },
                { id: "c", text: "White text on a yellow background" },
                { id: "d", text: "Dark blue text on a white background" },
            ],
            correct: ["b"],
            explanation:
                "The color property controls the foreground text. background-color controls the highlight behind it.",
        },
        {
            category: "CSS VARIABLES",
            type: "single",
            title: "Which declaration creates a custom CSS property?",
            options: [
                { id: "a", text: "selection-color: gold;" },
                { id: "b", text: "$selection-color: gold;" },
                { id: "c", text: "--selection-color: gold;" },
                { id: "d", text: "var-selection-color: gold;" },
            ],
            correct: ["c"],
            explanation:
                "CSS custom properties use names beginning with two hyphens, such as --selection-color.",
        },
        {
            category: "CSS VARIABLES",
            type: "single",
            title: "How do you use a custom property inside a CSS declaration?",
            code: ":root {\n  --accent: #f4c95d;\n}\n\n::selection {\n  background-color: /* ? */;\n}",
            options: [
                { id: "a", text: "use(--accent)" },
                { id: "b", text: "var(--accent)" },
                { id: "c", text: "$accent" },
                { id: "d", text: "custom(--accent)" },
            ],
            correct: ["b"],
            explanation:
                "The var() function reads a custom property. Here, var(--accent) supplies the yellow selection background.",
        },
        {
            category: "DEBUG THE CSS",
            type: "single",
            title: "What is wrong with this CSS?",
            code: "selection {\n  color: white;\n  background-color: purple;\n}",
            options: [
                { id: "a", text: "The color property cannot use white" },
                {
                    id: "b",
                    text: "The selector needs the :: pseudo-element prefix",
                },
                { id: "c", text: "background-color needs three values" },
                { id: "d", text: "CSS does not support purple" },
            ],
            correct: ["b"],
            explanation:
                "Use ::selection, not selection. The missing pseudo-element prefix means the rule targets an ordinary element named selection instead.",
        },
        {
            category: "COLOR ACCESSIBILITY",
            type: "single",
            title: "Why should you check contrast in a custom text selection?",
            options: [
                { id: "a", text: "To make selected text easier to read" },
                { id: "b", text: "To make every font bold automatically" },
                { id: "c", text: "To prevent users from copying text" },
                { id: "d", text: "To increase the page width" },
            ],
            correct: ["a"],
            explanation:
                "Sufficient contrast helps users read highlighted text, including people with low vision. Check both colors together.",
        },
        {
            category: "PROPERTY LIMITS",
            type: "single",
            title: "Which property is ignored when styling ::selection?",
            options: [
                { id: "a", text: "color" },
                { id: "b", text: "background-color" },
                { id: "c", text: "text-shadow" },
                { id: "d", text: "background-image" },
            ],
            correct: ["d"],
            explanation:
                "::selection supports only a limited set of properties. background-image is ignored; color and background-color are supported.",
        },
        {
            category: "SCOPING",
            type: "single",
            title: "Which rule targets selected text specifically inside paragraphs?",
            options: [
                { id: "a", text: "p ::selection { ... }" },
                { id: "b", text: "p::selection { ... }" },
                { id: "c", text: "::selection p { ... }" },
                { id: "d", text: "p.selection { ... }" },
            ],
            correct: ["b"],
            explanation:
                "p::selection targets the selected text originating from paragraph elements. A space before ::selection changes the selector's meaning.",
        },
        {
            category: "MULTIPLE CHOICE",
            type: "multiple",
            title: "Which statements about ::selection are true?",
            hint: "Choose every correct answer.",
            options: [
                { id: "a", text: "It can style text highlighted by a user." },
                { id: "b", text: "It can set a selection background color." },
                { id: "c", text: "It turns a paragraph into a button." },
                { id: "d", text: "Every CSS property works on it." },
            ],
            correct: ["a", "b"],
            explanation:
                "::selection changes the appearance of highlighted text. It does not turn content into an interactive control, and only certain CSS properties apply.",
        },
        {
            category: "CSS VARIABLES",
            type: "single",
            title: "What is the main benefit of using a custom property for an accent color?",
            code: ":root {\n  --accent: #b6e3d2;\n}\n\n.button {\n  background: var(--accent);\n}",
            options: [
                {
                    id: "a",
                    text: "It lets you reuse and update a color consistently",
                },
                {
                    id: "b",
                    text: "It automatically adds JavaScript to the page",
                },
                { id: "c", text: "It replaces all HTML elements" },
                { id: "d", text: "It prevents CSS inheritance" },
            ],
            correct: ["a"],
            explanation:
                "A shared custom property makes repeated values easier to maintain. Changing --accent can update every declaration that references it.",
        },
        {
            category: "READ THE CODE",
            type: "single",
            title: "Which background color will the selection use?",
            code: ":root {\n  --highlight: coral;\n}\n\n::selection {\n  background-color: var(--highlight);\n}",
            options: [
                { id: "a", text: "The browser's default highlight only" },
                { id: "b", text: "Coral" },
                { id: "c", text: "Transparent" },
                { id: "d", text: "The color of the page text" },
            ],
            correct: ["b"],
            explanation:
                "var(--highlight) resolves to coral, so the selected text receives a coral background.",
        },
        {
            category: "PSEUDO-ELEMENTS",
            type: "single",
            title: "Why are two colons used in ::selection?",
            options: [
                {
                    id: "a",
                    text: "To identify a pseudo-element in modern CSS syntax",
                },
                { id: "b", text: "To indicate two CSS files" },
                { id: "c", text: "To create a custom property" },
                { id: "d", text: "To make the rule apply twice" },
            ],
            correct: ["a"],
            explanation:
                "Modern CSS uses the double-colon notation to distinguish pseudo-elements from pseudo-classes, which generally use one colon.",
        },
        {
            category: "DEBUG THE CSS",
            type: "multiple",
            title: "Which of these are valid declarations inside a basic ::selection rule?",
            hint: "Choose every correct answer.",
            options: [
                { id: "a", text: "color: white;" },
                { id: "b", text: "background-color: navy;" },
                { id: "c", text: "margin: 10px;" },
                { id: "d", text: "font-size: 30px;" },
            ],
            correct: ["a", "b"],
            explanation:
                "color and background-color are supported. margin and font-size do not control the selection highlight.",
        },
        {
            category: "DESIGN DECISIONS",
            type: "single",
            title: "You use a yellow selection background. Which text color is generally the better starting point?",
            options: [
                { id: "a", text: "A very light yellow" },
                {
                    id: "b",
                    text: "A pale cream almost identical to the background",
                },
                {
                    id: "c",
                    text: "A sufficiently dark color with strong contrast",
                },
                { id: "d", text: "No text color, regardless of contrast" },
            ],
            correct: ["c"],
            explanation:
                "A dark foreground on a light yellow background is a good starting point. Always verify the actual contrast and readability.",
        },
        {
            category: "CSS FUNDAMENTALS",
            type: "multiple",
            title: "Which are valid ways to write a color value in CSS?",
            hint: "Choose every correct answer.",
            options: [
                { id: "a", text: "gold" },
                { id: "b", text: "#f4c95d" },
                { id: "c", text: "rgb(244, 201, 93)" },
                { id: "d", text: "color(gold, maybe)" },
            ],
            correct: ["a", "b", "c"],
            explanation:
                "CSS supports named colors, hexadecimal colors, and rgb() color notation. color(gold, maybe) is not a valid standard color value.",
        },
        {
            category: "SELECTOR SCOPE",
            type: "single",
            title: "What does this selector mean?",
            code: "p::selection {\n  background-color: gold;\n}",
            options: [
                {
                    id: "a",
                    text: "Every paragraph permanently has a gold background",
                },
                {
                    id: "b",
                    text: "Text selected within paragraphs gets a gold highlight",
                },
                { id: "c", text: "Only the first paragraph can be selected" },
                { id: "d", text: "Every paragraph gets gold text" },
            ],
            correct: ["b"],
            explanation:
                "The rule affects the highlight of selected text originating in paragraphs, not the normal paragraph background.",
        },
        {
            category: "ACCESSIBILITY",
            type: "multiple",
            title: "Which practices help make custom selection styling more usable?",
            hint: "Choose every correct answer.",
            options: [
                { id: "a", text: "Check foreground and background contrast" },
                { id: "b", text: "Test selecting real text in the browser" },
                {
                    id: "c",
                    text: "Choose colors that make selected text unreadable",
                },
                { id: "d", text: "Keep the selection effect understandable" },
            ],
            correct: ["a", "b", "d"],
            explanation:
                "Check contrast, test the interaction, and avoid confusing or unreadable selection styles. Users should still be able to recognize highlighted text.",
        },
        {
            category: "PUT IT TOGETHER",
            type: "single",
            title: "Which snippet creates white selected text on a plum background?",
            options: [
                {
                    id: "a",
                    text: "::selection { color: plum; background-color: white; }",
                },
                {
                    id: "b",
                    text: "::selection { color: white; background-color: plum; }",
                },
                {
                    id: "c",
                    text: "selection { text: white; fill: plum; }",
                },
                {
                    id: "d",
                    text: "::selection { font-color: white; background: plum-text; }",
                },
            ],
            correct: ["b"],
            explanation:
                "Set color to white for the selected text and background-color to plum for the highlight. This is the correct selector and property pairing.",
        },
    ];

    const elements = {
        progressCount: document.querySelector("#progress-count"),
        progressBar: document.querySelector("#progress-bar"),
        progressFill: document.querySelector("#progress-fill"),
        progressCaption: document.querySelector("#progress-caption"),
        answeredCount: document.querySelector("#answered-count"),
        pointsCount: document.querySelector("#points-count"),
        questionPanel: document.querySelector("#question-panel"),
        questionCategory: document.querySelector("#question-category"),
        questionType: document.querySelector("#question-type"),
        questionIndex: document.querySelector("#question-index"),
        questionTitle: document.querySelector("#question-title"),
        questionCodeWrap: document.querySelector("#question-code-wrap"),
        questionCode: document.querySelector("#question-code"),
        questionHint: document.querySelector("#question-hint"),
        answerForm: document.querySelector("#answer-form"),
        answers: document.querySelector("#answers"),
        feedback: document.querySelector("#feedback"),
        feedbackIcon: document.querySelector("#feedback-icon"),
        feedbackTitle: document.querySelector("#feedback-title"),
        feedbackText: document.querySelector("#feedback-text"),
        checkButton: document.querySelector("#check-button"),
        nextButton: document.querySelector("#next-button"),
        resultPanel: document.querySelector("#result-panel"),
        resultTitle: document.querySelector("#result-title"),
        resultDescription: document.querySelector("#result-description"),
        scoreRing: document.querySelector("#score-ring"),
        finalScore: document.querySelector("#final-score"),
        finalCorrect: document.querySelector("#final-correct"),
        finalPoints: document.querySelector("#final-points"),
        finalStatus: document.querySelector("#final-status"),
        restartButton: document.querySelector("#restart-button"),
    };

    const state = {
        order: [],
        current: 0,
        selected: new Set(),
        answered: 0,
        correct: 0,
        locked: false,
    };

    /* =========================================
        SHARED ROADMAP RESULTS
        This format is also used by the other skill checks.
    ========================================= */

    const SKILL_RESULTS_KEY = "freetimezp:roadmap:skill-check-results:v1";

    const SKILL_TEST_ID = "004";
    const SKILL_TEST_TITLE = "HTML Text Selection";

    let resultSaved = false;

    function saveSkillCheckResult(score, total, percentage) {
        try {
            const stored = localStorage.getItem(SKILL_RESULTS_KEY);
            const data = stored ? JSON.parse(stored) : {};

            const tests =
                data.tests && typeof data.tests === "object" ? data.tests : {};

            const previous = tests[SKILL_TEST_ID] || {};
            const completedAt = new Date().toISOString();

            const attempt = {
                score,
                total,
                percentage,
                completedAt,
            };

            const previousBest = previous.best;

            const best =
                !previousBest || percentage >= previousBest.percentage
                    ? attempt
                    : previousBest;

            const history = Array.isArray(previous.history)
                ? previous.history
                : [];

            tests[SKILL_TEST_ID] = {
                testId: SKILL_TEST_ID,
                title: SKILL_TEST_TITLE,
                attempts: (Number(previous.attempts) || 0) + 1,
                latest: attempt,
                best,
                history: [...history, attempt].slice(-10),
            };

            localStorage.setItem(
                SKILL_RESULTS_KEY,
                JSON.stringify({
                    schemaVersion: 1,
                    updatedAt: completedAt,
                    tests,
                }),
            );
        } catch (error) {
            // The quiz still works if browser storage is unavailable.
            console.warn("Could not save skill-check results:", error);
        }
    }

    function shuffle(items) {
        const result = [...items];

        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }

        return result;
    }

    function pad(number) {
        return String(number).padStart(2, "0");
    }

    function getQuestion() {
        return questions[state.order[state.current]];
    }

    function arraysMatch(first, second) {
        return (
            first.length === second.length &&
            first.every((item) => second.includes(item))
        );
    }

    function updateProgress() {
        const total = questions.length;
        const progress = (state.answered / total) * 100;

        elements.progressCount.textContent = pad(
            Math.min(state.current + 1, total),
        );
        elements.progressFill.style.width = `${progress}%`;
        elements.progressBar.setAttribute(
            "aria-valuenow",
            String(state.answered),
        );
        elements.answeredCount.textContent = pad(state.answered);
        elements.pointsCount.textContent = pad(state.correct);

        elements.progressCaption.textContent =
            state.answered === 0
                ? "Ready to begin"
                : `${state.answered} OF ${total} COMPLETED`;
    }

    function renderQuestion() {
        const question = getQuestion();

        resultSaved = false;

        state.selected.clear();
        state.locked = false;

        elements.questionCategory.textContent = question.category;
        elements.questionType.textContent =
            question.type === "multiple" ? "MULTIPLE ANSWERS" : "SINGLE ANSWER";
        elements.questionIndex.textContent = `Q.${pad(state.current + 1)}`;
        elements.questionTitle.textContent = question.title;

        elements.questionCodeWrap.hidden = !question.code;
        elements.questionCode.textContent = question.code || "";

        elements.questionHint.hidden = !question.hint;
        elements.questionHint.textContent = question.hint || "";

        elements.feedback.hidden = true;
        elements.feedback.classList.remove("is-incorrect");
        elements.checkButton.hidden = false;
        elements.nextButton.hidden = true;

        elements.answers.replaceChildren();

        shuffle(question.options).forEach((option, index) => {
            const label = document.createElement("label");
            label.className = "answer-option";
            label.dataset.type = question.type;
            label.dataset.answerId = option.id;

            const input = document.createElement("input");
            input.type = question.type === "multiple" ? "checkbox" : "radio";
            input.name = "answer";
            input.value = option.id;
            input.setAttribute("aria-label", option.text);

            const marker = document.createElement("span");
            marker.className = "answer-marker";
            marker.textContent = String.fromCharCode(65 + index);

            const copy = document.createElement("span");
            copy.className = "answer-copy";
            copy.textContent = option.text;

            label.append(input, marker, copy);
            elements.answers.append(label);

            input.addEventListener("change", () => {
                if (state.locked) return;

                if (question.type === "single") {
                    state.selected.clear();
                    document
                        .querySelectorAll(".answer-option")
                        .forEach((item) => {
                            item.classList.remove("is-selected");
                        });
                }

                if (input.checked) {
                    state.selected.add(option.id);
                    label.classList.add("is-selected");
                } else {
                    state.selected.delete(option.id);
                    label.classList.remove("is-selected");
                }
            });
        });

        updateProgress();
    }

    function submitAnswer(event) {
        event.preventDefault();

        if (state.locked) return;

        if (state.selected.size === 0) {
            elements.feedback.hidden = false;
            elements.feedback.classList.add("is-incorrect");

            elements.feedbackIcon.textContent = "!";
            elements.feedbackTitle.textContent = "Choose an answer first";
            elements.feedbackText.textContent =
                "Select at least one option before checking your answer.";
            return;
        }

        const question = getQuestion();
        const isCorrect = arraysMatch([...state.selected], question.correct);

        state.locked = true;
        state.answered += 1;

        if (isCorrect) {
            state.correct += 1;
        }

        document.querySelectorAll(".answer-option").forEach((label) => {
            const input = label.querySelector("input");
            const answerId = label.dataset.answerId;

            input.disabled = true;
            label.classList.remove("is-selected");

            if (question.correct.includes(answerId)) {
                label.classList.add("is-correct");
                label.querySelector(".answer-marker").textContent = "✓";
            } else if (state.selected.has(answerId)) {
                label.classList.add("is-wrong");
                label.querySelector(".answer-marker").textContent = "×";
            }
        });

        elements.feedback.hidden = false;
        elements.feedback.classList.toggle("is-incorrect", !isCorrect);
        elements.feedbackIcon.textContent = isCorrect ? "✓" : "×";
        elements.feedbackTitle.textContent = isCorrect
            ? "Exactly right!"
            : "Not quite — keep learning";
        elements.feedbackText.textContent = question.explanation;

        elements.checkButton.hidden = true;
        elements.nextButton.hidden = false;
        elements.nextButton.innerHTML =
            state.current === questions.length - 1
                ? 'VIEW RESULTS <span aria-hidden="true">↗</span>'
                : 'NEXT QUESTION <span aria-hidden="true">→</span>';

        updateProgress();
    }

    function nextQuestion() {
        if (!state.locked) return;

        if (state.current < questions.length - 1) {
            state.current += 1;
            renderQuestion();
            elements.questionPanel.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            showResults();
        }
    }

    function showResults() {
        elements.questionPanel.hidden = true;
        document.querySelector(".exam-sidebar").hidden = true;
        elements.resultPanel.hidden = false;

        const total = questions.length;
        const percentage = Math.round((state.correct / total) * 100);

        elements.finalScore.textContent = `${percentage}%`;
        elements.finalCorrect.textContent = `${state.correct} / ${total}`;
        elements.finalPoints.textContent = `${state.correct} / ${total}`;
        elements.scoreRing.style.background = `conic-gradient(var(--mint) ${percentage}%, #e1e7e1 ${percentage}%)`;

        if (percentage >= 90) {
            elements.resultTitle.textContent = "Excellent work.";
            elements.resultDescription.textContent =
                "You've got a strong understanding of custom text selection and accent colors. Keep building on those CSS skills.";
            elements.finalStatus.textContent = "EXCELLENT";
        } else if (percentage >= 70) {
            elements.resultTitle.textContent = "Nice progress.";
            elements.resultDescription.textContent =
                "You understand many of the key ideas. Review any tricky concepts, then try again to sharpen your skills.";
            elements.finalStatus.textContent = "GOOD JOB";
        } else if (percentage >= 50) {
            elements.resultTitle.textContent = "Keep experimenting.";
            elements.resultDescription.textContent =
                "You're building the foundation. Revisit Lesson 004 and try the assessment again after practicing the examples.";
            elements.finalStatus.textContent = "KEEP GOING";
        } else {
            elements.resultTitle.textContent = "Every expert starts here.";
            elements.resultDescription.textContent =
                "Review the lesson, experiment with ::selection in your browser, and give it another try. Learning happens one step at a time.";
            elements.finalStatus.textContent = "PRACTICE MORE";
        }

        if (!resultSaved) {
            saveSkillCheckResult(state.correct, total, percentage);
            resultSaved = true;
        }

        elements.progressCount.textContent = pad(total);
        elements.progressFill.style.width = "100%";
        elements.progressBar.setAttribute("aria-valuenow", String(total));
        elements.progressCaption.textContent = "Assessment complete";

        elements.resultPanel.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    function restart() {
        state.order = shuffle(questions.map((_, index) => index));
        state.current = 0;
        state.selected.clear();
        state.answered = 0;
        state.correct = 0;
        state.locked = false;

        elements.questionPanel.hidden = false;
        document.querySelector(".exam-sidebar").hidden = false;
        elements.resultPanel.hidden = true;

        renderQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    elements.answerForm.addEventListener("submit", submitAnswer);
    elements.nextButton.addEventListener("click", nextQuestion);
    elements.restartButton.addEventListener("click", restart);

    restart();
})();
