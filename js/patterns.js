// Pattern Library JavaScript

let currentFilters = {
  category: 'all',
  complexity: 'all'
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  renderCategoryFilters();
  renderPatternGrid();
  setupFilterListeners();
});

// Render category filter buttons
function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.setAttribute('data-category', cat.id);
    btn.textContent = cat.name;
    btn.addEventListener('click', () => filterByCategory(cat.id));
    container.appendChild(btn);
  });
}

// Setup filter listeners
function setupFilterListeners() {
  document.querySelectorAll('[data-complexity]').forEach(btn => {
    btn.addEventListener('click', () => filterByComplexity(btn.getAttribute('data-complexity')));
  });
}

// Filter by category
function filterByCategory(category) {
  currentFilters.category = category;
  
  // Update active state
  document.querySelectorAll('[data-category]').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    }
  });
  
  renderPatternGrid();
}

// Filter by complexity
function filterByComplexity(complexity) {
  currentFilters.complexity = complexity;
  
  // Update active state
  document.querySelectorAll('[data-complexity]').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-complexity') === complexity) {
      btn.classList.add('active');
    }
  });
  
  renderPatternGrid();
}

// Render pattern grid
function renderPatternGrid() {
  const grid = document.getElementById('pattern-grid');
  const filteredPatterns = patterns.filter(pattern => {
    const categoryMatch = currentFilters.category === 'all' || 
                         pattern.category.toLowerCase() === currentFilters.category;
    const complexityMatch = currentFilters.complexity === 'all' || 
                           pattern.complexity === currentFilters.complexity;
    return categoryMatch && complexityMatch;
  });
  
  // Update count
  document.getElementById('count').textContent = filteredPatterns.length;
  
  // Show/hide no results message
  if (filteredPatterns.length === 0) {
    document.getElementById('no-results').classList.remove('hidden');
    grid.style.display = 'none';
  } else {
    document.getElementById('no-results').classList.add('hidden');
    grid.style.display = 'grid';
  }
  
  // Render cards
  grid.innerHTML = '';
  filteredPatterns.forEach(pattern => {
    const card = createPatternCard(pattern);
    grid.appendChild(card);
  });
}

// Create pattern card
function createPatternCard(pattern) {
  const card = document.createElement('div');
  card.className = 'pattern-card';
  card.onclick = () => openPatternModal(pattern);
  
  card.innerHTML = `
    <div class="pattern-header">
      <h3>${pattern.name}</h3>
      <span class="complexity-badge complexity-${pattern.complexity}">${pattern.complexity}</span>
    </div>
    <div class="category-badge category-${pattern.category.toLowerCase()}">${pattern.category}</div>
    <p class="pattern-description">${pattern.description}</p>
    <div class="pattern-tags">
      ${pattern.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
  `;
  
  return card;
}

// Open pattern modal
function openPatternModal(pattern) {
  const modal = document.getElementById('pattern-modal');
  const title = document.getElementById('modal-title');
  const badges = document.getElementById('modal-badges');
  const content = document.getElementById('modal-content');
  const adobeBtn = document.getElementById('modal-adobe-btn');
  
  // Set title
  title.textContent = pattern.name;
  
  // Set badges
  badges.innerHTML = `
    <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap;">
      <span class="category-badge category-${pattern.category.toLowerCase()}">${pattern.category}</span>
      <span class="complexity-badge complexity-${pattern.complexity}">${pattern.complexity}</span>
    </div>
  `;
  
  // Set content
  const identityNames = pattern.identities.map(id => {
    const identity = identities.find(i => i.id === id);
    return identity ? identity.name : '';
  }).join(', ');
  
  content.innerHTML = `
    <p style="font-size: 1.125rem; color: #1F2937; margin-bottom: 1.5rem;">${pattern.fullDescription || pattern.description}</p>
    
    <div style="background: #F9FAFB; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem;">Skills Developed</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${pattern.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
      </div>
    </div>
    
    <div style="background: #EFF6FF; border-radius: 0.5rem; padding: 1rem;">
      <h4 style="margin-bottom: 0.5rem; color: #3B82F6;">Good For</h4>
      <p style="margin: 0; color: #1F2937;">${identityNames}</p>
    </div>
  `;
  
  // Set Adobe Express button
  adobeBtn.onclick = () => {
    if (pattern.adobeExpressLink && pattern.adobeExpressLink !== '#') {
      window.open(pattern.adobeExpressLink, '_blank');
    } else {
      alert('Adobe Express template coming soon!');
    }
  };
  
  // Show modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal(event) {
  if (event && event.target !== event.currentTarget) return;
  
  const modal = document.getElementById('pattern-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
