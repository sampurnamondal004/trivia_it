const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".quit");
const continue_btn = info_box.querySelector(".restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector(".time_line");
const timeText = document.querySelector(".time_left_txt");
const timeCount = document.querySelector(".timer_sec");
const next_btn = document.querySelector(".next_btn");
const bottom_ques_counter = document.querySelector(".total_que");

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let timeValue = 15;

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
};

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
};

continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(que_count);
    queCounter(que_numb);
    startTimer(timeValue);
};

function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = questions[index].options.map(opt => `<div class="option"><span>${opt}</span></div>`).join('');
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    option.forEach(opt => opt.setAttribute("onclick", "optionSelected(this)"));
}

function queCounter(index){
    bottom_ques_counter.innerHTML = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
}

function startTimer(time) {
    counter = setInterval(() => {
        timeCount.textContent = time < 10 ? "0" + time : time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Time Off";
        }
    }, 1000);
}
