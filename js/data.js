// WIL Pattern Library - Data Configuration
// Edit this file to update content without touching HTML/CSS

const identities = [
  {
    id: 'reflective-analyst',
    name: 'The Reflective Analyst',
    narrative: "You're someone who needs to process experiences deeply before moving forward. You notice patterns others miss because you take time to sit with complexity. In meetings, you might be quieter, but when you speak, you've usually seen something important. You learn best when you can step back, think things through, and connect what's happening now to bigger frameworks. Your superpower is turning messy experiences into clear insights.",
    strengths: [
      'Deep processing of complex information',
      'Pattern recognition across experiences',
      'Strong connection between theory and practice',
      'Thoughtful, considered contributions',
      'Self-awareness and metacognition'
    ],
    growthEdges: [
      'May need more processing time than fast-paced environments allow',
      'Can get stuck in analysis without moving to action',
      'Might struggle with ambiguous, rapidly changing situations',
      'May undervalue your insights until they\'re fully formed',
      'Can find it difficult to think out loud or brainstorm spontaneously'
    ],
    preferredWays: [
      'Individual analysis followed by structured sharing',
      'Written reflection and documentation',
      'Synthesis of multiple perspectives or data sources',
      'Creating frameworks and models to explain complexity',
      'One-on-one conversations over large group discussions'
    ],
    recommendedPatterns: ['reflection-journal', 'decision-log', 'experiential-learning-cycle', 'problem-space-canvas'],
    quizAnswer: 'I need time to think deeply before I speak or act'
  },
  {
    id: 'systems-thinker',
    name: 'The Systems Thinker',
    narrative: "You naturally see how things connect. While others focus on individual problems, you're mapping the relationships, feedback loops, and unintended consequences. You get frustrated when people propose simple solutions to complex problems because you can see the ripple effects they're missing. You're the person who asks 'but what about...?' and 'how does this connect to...?' Your gift is seeing the whole picture when others see only parts.",
    strengths: [
      'Holistic understanding of complex situations',
      'Ability to identify interdependencies and feedback loops',
      'Anticipation of unintended consequences',
      'Strategic, long-term thinking',
      'Integration of multiple perspectives'
    ],
    growthEdges: [
      'Can become overwhelmed by complexity',
      'May struggle to simplify for communication',
      'Might resist taking action until the \'whole picture\' is clear',
      'Can be seen as overcomplicating simple situations',
      'May have difficulty prioritizing when everything seems connected'
    ],
    preferredWays: [
      'Mapping relationships and dependencies',
      'Analyzing organizational or technical systems',
      'Strategic planning and scenario thinking',
      'Identifying leverage points for change',
      'Cross-functional collaboration'
    ],
    recommendedPatterns: ['problem-space-canvas', 'stakeholder-map', 'decision-log', 'experiential-learning-cycle'],
    quizAnswer: 'I naturally see how everything connects to everything else'
  },
  {
    id: 'story-collector',
    name: 'The Story Collector',
    narrative: "You understand the world through people and their stories. You're genuinely curious about others' experiences, and you remember details about people that others forget. You learn best through conversations, case studies, and real examples. When you're trying to understand a new domain, you seek out the people living in it. Your strength is making sense of human complexity and finding meaning in lived experience.",
    strengths: [
      'Deep empathy and understanding of human perspectives',
      'Excellent listening and interview skills',
      'Ability to identify themes across stories',
      'Natural relationship building',
      'Communication through narrative and example'
    ],
    growthEdges: [
      'May prioritize stories over data or systems analysis',
      'Can get lost in details without synthesizing insights',
      'Might struggle with impersonal or abstract concepts',
      'Can be overwhelmed by conflicting human perspectives',
      'May find it difficult to maintain analytical distance'
    ],
    preferredWays: [
      'Conducting interviews and conversations',
      'Case study analysis',
      'Ethnographic or observational research',
      'Stakeholder engagement',
      'Narrative documentation and storytelling'
    ],
    recommendedPatterns: ['industry-story-interview', 'peer-learning-circle', 'stakeholder-map', 'reflection-journal'],
    quizAnswer: 'I learn best through conversations and people\'s stories'
  },
  {
    id: 'evidence-architect',
    name: 'The Evidence Architect',
    narrative: "You build your understanding methodically, piece by piece, always asking 'how do I know this?' You're not satisfied with vague claims or gut feelings—you want data, examples, and clear justification. You naturally document as you go, creating trails of evidence and reasoning. Your work is thorough, defensible, and credible because you've done the work to back up every claim. You're building a professional reputation on solid ground.",
    strengths: [
      'Rigorous evidence collection and documentation',
      'Clear, justified reasoning',
      'Credible, defensible work products',
      'Systematic approach to learning',
      'Strong professional presentation skills'
    ],
    growthEdges: [
      'May move more slowly than others due to thoroughness',
      'Can struggle with ambiguous situations lacking clear evidence',
      'Might undervalue intuition or emergent insights',
      'Can be seen as overly focused on process',
      'May find it difficult to work with incomplete information'
    ],
    preferredWays: [
      'Building portfolios and documentation',
      'Creating evidence-based arguments',
      'Systematic skill development',
      'Quality assurance and verification',
      'Structured assessment and evaluation'
    ],
    recommendedPatterns: ['skill-snapshot-portfolio', 'decision-log', 'experiential-learning-cycle', 'reflection-journal'],
    quizAnswer: 'I like to build clear evidence and justify my thinking'
  },
  {
    id: 'facilitator',
    name: 'The Facilitator',
    narrative: "You come alive when bringing people together. You notice group dynamics, help quiet voices be heard, and naturally create spaces where collaborative learning happens. You're energized by dialogue and believe that the best insights emerge from collective thinking. Your strength isn't necessarily having all the answers—it's helping groups find their own answers together. You're building skills in creating the conditions for others to thrive.",
    strengths: [
      'Group facilitation and process design',
      'Awareness of group dynamics and inclusion',
      'Creating psychologically safe spaces',
      'Collaborative problem-solving',
      'Drawing out diverse perspectives'
    ],
    growthEdges: [
      'May struggle with independent, solo work',
      'Can take on too much responsibility for group outcomes',
      'Might avoid necessary conflict to maintain harmony',
      'Can be drained by group dysfunction or resistance',
      'May undervalue your own voice in service of others\''
    ],
    preferredWays: [
      'Facilitating meetings and workshops',
      'Peer learning and collaborative projects',
      'Team coordination and support',
      'Community building',
      'Participatory design and co-creation'
    ],
    recommendedPatterns: ['peer-learning-circle', 'industry-story-interview', 'stakeholder-map', 'reflection-journal'],
    quizAnswer: 'I come alive when bringing people together'
  },
  {
    id: 'experimenter',
    name: 'The Experimenter',
    narrative: "You learn by doing, testing, and trying things out. You're comfortable with uncertainty and see failure as data rather than defeat. While others are still planning, you've already run three experiments and learned what doesn't work. You trust the iterative process—build, test, learn, adjust, repeat. Your prototypes might be rough, but they're real, and they teach you things no amount of planning could reveal. You're developing comfort with not knowing the answer until you try.",
    strengths: [
      'Rapid prototyping and testing',
      'Comfort with uncertainty and ambiguity',
      'Learning through iteration and failure',
      'Bias toward action',
      'Innovation and creative problem-solving'
    ],
    growthEdges: [
      'May move to action before sufficient planning',
      'Can struggle with documentation and reflection',
      'Might resist structure or methodical approaches',
      'Can be seen as unfocused or scattered',
      'May have difficulty with environments requiring certainty'
    ],
    preferredWays: [
      'Prototyping and building',
      'Design sprints and rapid iteration',
      'Innovation challenges',
      'User testing and feedback incorporation',
      'Technical experimentation'
    ],
    recommendedPatterns: ['innovation-sprint-log', 'digital-twin', 'experiential-learning-cycle', 'decision-log'],
    quizAnswer: 'I prefer testing ideas quickly rather than planning perfectly'
  }
];

const patterns = [
  {
    id: 'reflection-journal',
    name: 'Reflection Journal',
    category: 'Reflection',
    complexity: 'medium',
    description: 'A structured personal journal documenting learning experiences, insights, and professional growth over time.',
    fullDescription: 'The Reflection Journal is your personal space for processing experiences, connecting theory to practice, and tracking your professional development journey. This structured approach to reflection helps you identify patterns in your learning, articulate insights, and build self-awareness over time.',
    tags: ['personal', 'continuous', 'introspective', 'metacognition'],
    skills: ['Reflection & Self-Awareness'],
    identities: ['reflective-analyst', 'story-collector', 'evidence-architect', 'facilitator'],
    adobeExpressLink: '#' // Add your Adobe Express template URL here
  },
  {
    id: 'peer-learning-circle',
    name: 'Peer Learning Circle',
    category: 'Collaboration',
    complexity: 'high',
    description: 'A collaborative learning format where students meet regularly to share experiences, challenges, and insights.',
    fullDescription: 'Peer Learning Circles create structured opportunities for collaborative sense-making. Through regular meetings, you and your peers share experiences, ask questions, and support each other\'s professional development. This pattern develops facilitation skills, professional relationships, and the ability to learn from diverse perspectives.',
    tags: ['social', 'collaborative', 'peer-feedback', 'community'],
    skills: ['Collaboration & Facilitation'],
    identities: ['story-collector', 'facilitator'],
    adobeExpressLink: '#'
  },
  {
    id: 'experiential-learning-cycle',
    name: 'Experiential Learning Cycle',
    category: 'Experience',
    complexity: 'medium',
    description: 'A structured approach to learning through doing, reflecting, conceptualizing, and experimenting.',
    fullDescription: 'Based on Kolb\'s learning cycle, this pattern guides you through concrete experience, reflective observation, abstract conceptualization, and active experimentation. It helps you extract maximum learning from workplace experiences and demonstrates your ability to learn from doing.',
    tags: ['experiential', 'cyclical', 'action-oriented', 'kolb'],
    skills: ['Reflection & Self-Awareness', 'Analysis & Critical Thinking'],
    identities: ['reflective-analyst', 'systems-thinker', 'evidence-architect', 'experimenter'],
    adobeExpressLink: '#'
  },
  {
    id: 'industry-story-interview',
    name: 'Industry Story Interview',
    category: 'Storytelling',
    complexity: 'high',
    description: 'Conduct and analyze interviews with industry professionals to understand career paths and professional practices.',
    fullDescription: 'Through structured interviews with industry professionals, you explore career trajectories, professional practices, and the realities of work in your field. This pattern develops research skills, professional networking, and the ability to learn from others\' experiences.',
    tags: ['interviews', 'networking', 'stories', 'career-exploration'],
    skills: ['Communication & Storytelling', 'Employability & Professional Skills'],
    identities: ['story-collector', 'facilitator'],
    adobeExpressLink: '#'
  },
  {
    id: 'skill-snapshot-portfolio',
    name: 'Skill Snapshot Portfolio',
    category: 'Experience',
    complexity: 'medium',
    description: 'A curated collection of evidence demonstrating specific skills developed during your WIL experience.',
    fullDescription: 'The Skill Snapshot Portfolio documents your skill development with concrete evidence. You select key skills, gather artifacts that demonstrate competency, and reflect on your growth. This creates a compelling narrative of professional development backed by tangible evidence.',
    tags: ['portfolio', 'skills', 'evidence', 'employability', 'career-ready'],
    skills: ['Employability & Professional Skills'],
    identities: ['evidence-architect'],
    adobeExpressLink: '#'
  },
  {
    id: 'innovation-sprint-log',
    name: 'Innovation Sprint Log',
    category: 'Innovation',
    complexity: 'high',
    description: 'Documentation of rapid experimentation cycles focused on solving a specific problem or exploring an opportunity.',
    fullDescription: 'The Innovation Sprint Log captures your iterative experimentation process. Document each sprint: what you tried, what you learned, and how you adapted. This pattern demonstrates comfort with uncertainty, iterative thinking, and the ability to learn from failure.',
    tags: ['innovation', 'prototyping', 'iteration', 'experimentation', 'entrepreneurial'],
    skills: ['Innovation & Experimentation'],
    identities: ['experimenter'],
    adobeExpressLink: '#'
  },
  {
    id: 'decision-log',
    name: 'Decision Log',
    category: 'Analysis',
    complexity: 'medium',
    description: 'A systematic record of significant decisions, the reasoning behind them, and their outcomes.',
    fullDescription: 'The Decision Log helps you track important decisions, document your reasoning process, and reflect on outcomes. This pattern develops critical thinking, demonstrates professional judgment, and creates a record of your decision-making development over time.',
    tags: ['decisions', 'analytical', 'critical-thinking', 'judgment'],
    skills: ['Analysis & Critical Thinking'],
    identities: ['reflective-analyst', 'systems-thinker', 'evidence-architect', 'experimenter'],
    adobeExpressLink: '#'
  },
  {
    id: 'problem-space-canvas',
    name: 'Problem Space Canvas',
    category: 'Analysis',
    complexity: 'medium',
    description: 'A visual framework for deeply understanding a complex problem before jumping to solutions.',
    fullDescription: 'The Problem Space Canvas guides systematic problem analysis. Map stakeholders, constraints, root causes, and existing attempts at solutions. This pattern demonstrates systems thinking and the discipline to understand problems deeply before proposing solutions.',
    tags: ['systems-thinking', 'problem-framing', 'analysis', 'visual', 'strategic'],
    skills: ['Analysis & Critical Thinking'],
    identities: ['reflective-analyst', 'systems-thinker'],
    adobeExpressLink: '#'
  },
  {
    id: 'stakeholder-map',
    name: 'Stakeholder Map (Lite)',
    category: 'Analysis',
    complexity: 'low',
    description: 'Visual mapping of key stakeholders, their relationships, interests, and influence in your WIL context.',
    fullDescription: 'Create a visual map of the stakeholders in your workplace or project context. Identify their interests, relationships, and influence. This pattern develops organizational awareness and strategic thinking about how to navigate complex professional environments.',
    tags: ['stakeholders', 'relationships', 'organizational', 'visual'],
    skills: ['Analysis & Critical Thinking', 'Employability & Professional Skills'],
    identities: ['systems-thinker', 'story-collector', 'facilitator'],
    adobeExpressLink: '#'
  },
  {
    id: 'digital-twin',
    name: 'Digital Twin (Solution Layer)',
    category: 'Innovation',
    complexity: 'high',
    description: 'A working prototype, simulation, or digital representation of a solution you\'re developing.',
    fullDescription: 'Build a working prototype or digital representation of your solution. This could be a website mockup, a simulation, a working model, or any digital artifact that demonstrates your solution in action. This pattern shows technical capability and the ability to make ideas tangible.',
    tags: ['prototype', 'technical', 'hands-on', 'building', 'testing'],
    skills: ['Innovation & Experimentation'],
    identities: ['experimenter'],
    adobeExpressLink: '#'
  }
];

const skillCategories = [
  'Reflection & Self-Awareness',
  'Collaboration & Facilitation',
  'Innovation & Experimentation',
  'Employability & Professional Skills',
  'Communication & Storytelling',
  'Analysis & Critical Thinking'
];

const categories = ['Reflection', 'Collaboration', 'Experience', 'Storytelling', 'Innovation', 'Analysis'];

const allTags = [
  'action-oriented', 'analysis', 'analytical', 'building', 'career-exploration', 'career-ready',
  'collaborative', 'community', 'continuous', 'critical-thinking', 'cyclical', 'decisions',
  'employability', 'entrepreneurial', 'evidence', 'experiential', 'experimentation', 'hands-on',
  'innovation', 'interviews', 'introspective', 'iteration', 'judgment', 'kolb', 'metacognition',
  'networking', 'organizational', 'peer-feedback', 'personal', 'portfolio', 'problem-framing',
  'prototype', 'prototyping', 'relationships', 'skills', 'social', 'stakeholders', 'stories',
  'strategic', 'systems-thinking', 'technical', 'testing', 'visual'
];
