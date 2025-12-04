// Quiz Logic for WIL Pattern Library

let selectedIdentity = null;
let selectedSkills = [];
let currentStep = 1;

// Initialize Quiz
document.addEventListener('DOMContentLoaded', function() {
  renderStep1();
  setupNavigation();
});

// Render Step 1: Identity Selection
function renderStep1() {
  const optionsContainer = document.getElementById('step1-options');
  optionsContainer.innerHTML = '';
  
  quizQuestions.step1.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'quiz-option';
    optionDiv.innerHTML = `
      <input type="radio" name="identity" value="${option.identity}" id="identity-${index}">
      <label for="identity-${index}" style="cursor: pointer; flex: 1;">${option.text}</label>
    `;
    
    optionDiv.addEventListener('click', function() {
      document.getElementById(`identity-${index}`).checked = true;
      selectedIdentity = option.identity;
      
      // Update UI
      document.querySelectorAll('#step1-options .quiz-option').forEach(el => {
        el.classList.remove('selected');
      });
      optionDiv.classList.add('selected');
      
      // Enable next button
      document.getElementById('next-btn').disabled = false;
    });
    
    optionsContainer.appendChild(optionDiv);
  });
}

// Render Step 2: Skills Selection
function renderStep2() {
  const optionsContainer = document.getElementById('step2-options');
  optionsContainer.innerHTML = '';
  
  // Display selected identity
  const identityObj = identities.find(i => i.id === selectedIdentity);
  document.getElementById('selected-identity-name').textContent = identityObj.name;
  
  quizQuestions.step2.options.forEach((skill, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'quiz-option';
    optionDiv.innerHTML = `
      <input type="checkbox" name="skills" value="${skill}" id="skill-${index}">
      <label for="skill-${index}" style="cursor: pointer; flex: 1;">${skill}</label>
    `;
    
    optionDiv.addEventListener('click', function(e) {
      if (e.target.tagName !== 'INPUT') {
        const checkbox = document.getElementById(`skill-${index}`);
        checkbox.checked = !checkbox.checked;
      }
      
      updateSelectedSkills();
      
      // Update UI
      if (document.getElementById(`skill-${index}`).checked) {
        optionDiv.classList.add('selected');
      } else {
        optionDiv.classList.remove('selected');
      }
    });
    
    optionsContainer.appendChild(optionDiv);
  });
}

function updateSelectedSkills() {
  selectedSkills = [];
  document.querySelectorAll('input[name="skills"]:checked').forEach(input => {
    selectedSkills.push(input.value);
  });
  
  // Enable results button if 2-4 skills selected
  const resultsBtn = document.getElementById('results-btn');
  if (selectedSkills.length >= 2 && selectedSkills.length <= 4) {
    resultsBtn.disabled = false;
  } else {
    resultsBtn.disabled = true;
  }
}

// Navigation Setup
function setupNavigation() {
  const nextBtn = document.getElementById('next-btn');
  const backBtn = document.getElementById('back-btn');
  const resultsBtn = document.getElementById('results-btn');
  
  nextBtn.addEventListener('click', function() {
    if (currentStep === 1 && selectedIdentity) {
      goToStep2();
    }
  });
  
  backBtn.addEventListener('click', function() {
    goToStep1();
  });
  
  resultsBtn.addEventListener('click', function() {
    goToResults();
  });
}

function goToStep2() {
  currentStep = 2;
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
  document.getElementById('back-btn').classList.remove('hidden');
  document.getElementById('next-btn').classList.add('hidden');
  document.getElementById('results-btn').classList.remove('hidden');
  
  renderStep2();
}

function goToStep1() {
  currentStep = 1;
  document.getElementById('step1').classList.remove('hidden');
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('back-btn').classList.add('hidden');
  document.getElementById('next-btn').classList.remove('hidden');
  document.getElementById('results-btn').classList.add('hidden');
}

function goToResults() {
  // Save to sessionStorage
  sessionStorage.setItem('quizIdentity', selectedIdentity);
  sessionStorage.setItem('quizSkills', JSON.stringify(selectedSkills));
  
  // Redirect to results page
  window.location.href = 'results.html';
}
