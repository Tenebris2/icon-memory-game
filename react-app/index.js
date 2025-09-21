const icons = [
    'devicon-react-original',
    'devicon-angularjs-plain',
    'devicon-vuejs-plain',
    'devicon-javascript-plain',
    'devicon-python-plain',
    'devicon-nodejs-plain',
    'devicon-java-plain',
    'devicon-cplusplus-plain',
    'devicon-go-plain',
    'devicon-ruby-plain',
    'devicon-swift-plain',
    'devicon-kotlin-plain'
];

let userSequence = [];

function startLevel() {
    localStorage.setItem("level", 1);
    window.location.href = "numberLoading.html";
}

function generateIconSequence(length) {
    const sequence = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * icons.length);
        sequence.push(icons[randomIndex]);
    }
    return sequence;
}

function checkCorrection(){
    const correctSequence = JSON.parse(localStorage.getItem("icon-sequence-answer"));
    
    if (JSON.stringify(userSequence) === JSON.stringify(correctSequence)) {
        var currentLevel = localStorage.getItem("level");
        currentLevel = Number(currentLevel);
        localStorage.setItem("level", currentLevel + 1);
        window.location.href = "numberEnding.html";
    } else {
        localStorage.setItem("user-sequence", JSON.stringify(userSequence));
        window.location.href = "numberWrong.html";
    }
}

function nextLevel(){
    window.location.href = "numberAnswer.html";
}

function addToSequence(iconClass) {
    userSequence.push(iconClass);
    updateUserSequenceDisplay();
}

function updateUserSequenceDisplay() {
    const userSequenceDiv = document.getElementById('user-sequence-display');
    userSequenceDiv.innerHTML = '';
    for (const iconClass of userSequence) {
        const iconElement = document.createElement('i');
        iconElement.className = iconClass + ' icon-display';
        userSequenceDiv.appendChild(iconElement);
    }
}

function clearUserSequence() {
    userSequence = [];
    updateUserSequenceDisplay();
}
