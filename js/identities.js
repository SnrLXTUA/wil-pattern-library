// Identity Cards JavaScript

document.addEventListener('DOMContentLoaded', function() {
  renderIdentityCards();
});

function renderIdentityCards() {
  const grid = document.getElementById('identity-grid');
  
  identities.forEach(identity => {
    const card = createIdentityCard(identity);
    grid.appendChild(card);
  });
}

function createIdentityCard(identity) {
  const card = document.createElement('div');
  card.className = 'identity-card';
  card.id = `identity-${identity.id}`;
  
  const recommendedPatternsList = identity.recommendedPatterns.map(patternId => {
    const pattern = patterns.find(p => p.id === patternId);
    return pattern ? `<li><a href="patterns.html#${pattern.id}" style="color: #3B82F6;">${pattern.name}</a></li>` : '';
  }).join('');
  
  card.innerHTML = `
    <div class="identity-header" onclick="toggleIdentity('${identity.id}')">
      <h3>${identity.name}</h3>
      <p style="margin: 0.5rem 0 0 0; color: rgba(255,255,255,0.9); font-size: 0.875rem;">Click to expand</p>
    </div>
    <div class="identity-content">
      <div class="identity-section">
        <h4>Your Identity Narrative</h4>
        <p>${identity.narrative}</p>
      </div>
      
      <div class="identity-section">
        <h4>Key Strengths</h4>
        <ul>
          ${identity.strengths.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
      
      <div class="identity-section">
        <h4>Growth Edges & Challenges</h4>
        <ul>
          ${identity.growthEdges.map(g => `<li>${g}</li>`).join('')}
        </ul>
      </div>
      
      <div class="identity-section">
        <h4>Preferred Ways of Working</h4>
        <ul>
          ${identity.preferredWays.map(w => `<li>${w}</li>`).join('')}
        </ul>
      </div>
      
      <div class="identity-section">
        <h4>Recommended Patterns</h4>
        <ul>
          ${recommendedPatternsList}
        </ul>
      </div>
    </div>
  `;
  
  return card;
}

function toggleIdentity(identityId) {
  const card = document.getElementById(`identity-${identityId}`);
  card.classList.toggle('expanded');
}
