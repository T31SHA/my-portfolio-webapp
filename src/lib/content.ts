// Every figure on the site comes from Sharahbill_Abdi_CV.pdf. Change the CV first, then this file.

export type Gauge = { label: string; value: number; display: string; max?: number }

export type CaseStudy = {
  id: string
  title: string
  kind: string
  note?: string
  problem: string
  approach: string[]
  role?: string
  headline: { value: string; label: string }
  facts: { value: string; label: string }[]
  gauges: Gauge[]
  stack: string[]
  live: string
  code: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'flood-guard',
    title: 'Nairobi Flood Guard',
    kind: 'Geospatial ML · Team project',
    note: 'Recognised as the best project of 2026',
    problem:
      'Warn Kenyan wards before they flood, and send matatus around the risk, across 1,450 wards.',
    approach: [
      'Ward-level geospatial data prepared with GeoPandas and OSMnx.',
      'Logistic regression, random forest and a neural network were benchmarked; a calibrated XGBoost model won.',
      'Scored with county-held-out spatial cross-validation, so every number comes from counties the model never saw.',
      'Delivered through FastAPI, SMS and a Streamlit dashboard, with Docker and GitHub Actions.',
    ],
    role: 'Team-built system. I contributed to it; the model scores are the team’s.',
    headline: { value: '0.889', label: 'ROC AUC, county-held-out' },
    facts: [
      { value: '0.80', label: 'Recall' },
      { value: '1,450', label: 'Wards covered' },
      { value: '4', label: 'Models benchmarked' },
    ],
    gauges: [
      { label: 'ROC AUC', value: 0.889, display: '0.889' },
      { label: 'Recall', value: 0.8, display: '0.80' },
    ],
    stack: ['Python', 'GeoPandas', 'OSMnx', 'XGBoost', 'FastAPI', 'Streamlit', 'Folium', 'Docker', 'GitHub Actions'],
    live: 'https://nairobi-flood-guard.streamlit.app/',
    code: 'https://github.com/T31SHA/Nairobi_Flood_Guard-AI',
  },
  {
    id: 'drought',
    title: 'SPEI Drought Forecasting',
    kind: 'Time-series forecasting',
    problem:
      'Forecast SPEI-12 drought for Algeria’s Oran region one, three and six months ahead, with uncertainty a planner can read.',
    approach: [
      'Engineered a 10-stage pipeline over 76 years of monthly climate data, with 28 engineered features.',
      'Kept a strictly chronological split, so the model is never scored on its own past.',
      'Tuned XGBoost with Optuna, explained it with SHAP and wrapped forecasts in bootstrap prediction intervals.',
      'Shipped the forecasts as an interactive Streamlit dashboard.',
    ],
    headline: { value: '95.1%', label: 'Variance explained' },
    facts: [
      { value: '98.3%', label: 'Directional accuracy' },
      { value: '76 yrs', label: 'Monthly climate data' },
      { value: '1 · 3 · 6', label: 'Months ahead' },
    ],
    gauges: [
      { label: 'Variance explained', value: 0.951, display: '95.1%' },
      { label: 'Directional accuracy', value: 0.983, display: '98.3%' },
    ],
    stack: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'Optuna', 'SHAP', 'Streamlit', 'Plotly'],
    live: 'https://drought-intelligence.streamlit.app/',
    code: 'https://github.com/T31SHA/Drought-Forcasting_Prediction',
  },
  {
    id: 'cassavawatch',
    title: 'CassavaWatch',
    kind: 'Computer vision · Full-stack ML',
    problem:
      'Diagnose cassava disease from a phone, in English or Swahili, when the connection drops and the server has 512 MB.',
    approach: [
      'Fine-tuned MobileNetV3Small on iCassava 2019 field images, diagnosing from 3–6 leaf photos.',
      'Quantized the model to a 1.11 MB TFLite file so it fits a 512 MB free-tier server.',
      'Built a mobile-first app with offline queueing and a FastAPI backend that runs a Poisson-based outbreak detector.',
      'Added a Leaflet map and Qwen API integration, tested with pytest and deployed on Render.',
    ],
    headline: { value: '1.11 MB', label: 'Quantized TFLite model' },
    facts: [
      { value: '75.2%', label: 'Accuracy, balanced 500-image test' },
      { value: '512 MB', label: 'Server it fits' },
      { value: 'EN · SW', label: 'Advice languages' },
    ],
    gauges: [
      { label: 'Test accuracy', value: 0.752, display: '75.2%' },
      { label: 'Model vs server memory', value: 1.11, max: 512, display: '0.2%' },
    ],
    stack: ['Python', 'TensorFlow / Keras', 'TFLite', 'FastAPI', 'SQLite', 'Leaflet', 'Qwen API', 'pytest', 'Render'],
    live: 'https://cassavawatch.onrender.com/',
    code: 'https://github.com/T31SHA/CassavaWatch',
  },
]

export const furtherProjects = [
  {
    title: 'Customer Churn Prediction',
    figure: '3,333',
    figureLabel: 'telecom records',
    detail:
      'Recall-optimised Random Forest on a leakage-safe pipeline (stratified 75/25 split, ColumnTransformer, GridSearchCV). About 15% churn; daytime charges, 3+ service calls and international plans drove it. Exported a Tableau-ready risk list.',
    stack: ['pandas', 'scikit-learn', 'Tableau'],
    code: 'https://github.com/T31SHA/Customer-Churn_Prediction',
  },
  {
    title: 'NSE Stock Price Forecasting',
    figure: 'KES 0.60',
    figureLabel: 'mean absolute error',
    detail:
      'Safaricom (SCOM) prices from 2025 NSE data. Random Forest on lag and calendar features with a chronological 80/20 split to prevent look-ahead leakage. Lag price and daily high/low range were the strongest predictors.',
    stack: ['pandas', 'scikit-learn', 'Matplotlib', 'Seaborn'],
    code: 'https://github.com/T31SHA/NSE--Stock-Market_-Predictions',
  },
  {
    title: 'Mobile User Behaviour',
    figure: '700',
    figureLabel: 'users, five tiers',
    detail:
      'Classified users into five behavioural tiers from device telemetry with Random Forest (1.00 accuracy and F1; the classes separate cleanly). App usage time (~25.6%), battery drain (22.8%) and app count (20.3%) led.',
    stack: ['pandas', 'NumPy', 'scikit-learn', 'Seaborn'],
    code: 'https://github.com/T31SHA/User-Behaviour_Prediction',
  },
]

export const meal = {
  role: 'MEAL Officer / Research',
  org: 'Cortech Consulting Group',
  period: '2025 – Present',
  chain: [
    { step: 'Framework', detail: 'Design the MEAL framework that sets how each assignment is monitored, evaluated and turned into learning.' },
    { step: 'Fieldwork', detail: 'Run household and community surveys on KoboToolbox.' },
    { step: 'Analysis', detail: 'Clean, analyse and model the survey data in Python.' },
    { step: 'Report', detail: 'Write the evaluation and research reports the client acts on.' },
  ],
  assignments: [
    {
      year: '2026',
      items: [
        ['Federal Government of Somalia', 'Ministry of Agriculture & Irrigation: community early warning and DRR training support, including system design.'],
        ['IGAD', 'End-of-project evaluation of “Improving Land Governance in the IGAD Region” (Phase II): implementation, impact, sustainability and lessons learned.'],
      ],
    },
    {
      year: '2025',
      items: [
        ['World Bank', 'Capacity assessment of Somalia’s Federal Member State Ministries of Health.'],
        ['IOM & African Union', 'Monitoring and implementation framework for the Free Movement of Persons Protocol.'],
        ['Heifer International Kenya', 'Agritech landscape study on scaling digital agriculture.'],
        ['Danish Refugee Council', 'Mapping of financial service providers for refugees and host communities.'],
        ['Welthungerhilfe', 'Evaluation of “Chukua Control”.'],
        ['Qatar Red Crescent', 'SME financing capacity building in Somalia.'],
      ],
    },
  ] as { year: string; items: [string, string][] }[],
}

export const experience = [
  {
    role: 'MEAL Officer / Research',
    org: 'Cortech Consulting Group',
    place: 'Nairobi',
    period: '2025 – Present',
    detail: 'Lead MEAL and research across the firm’s 2025–2026 portfolio for government, multilateral and NGO clients.',
  },
  {
    role: 'Data Analysis Trainer (Part-time)',
    org: 'Trainify Institute of Technology',
    place: 'Nairobi · Remote / Hybrid',
    period: '',
    detail: 'Taught Python data analysis (Pandas, NumPy, visualisation) and mentored multiple cohorts through end-to-end projects, from raw data to presented insight.',
  },
]

export const education = [
  ['BSc in Mathematics and Computing', 'The Open University of Kenya'],
  ['Data Science', 'Moringa School · April 2026'],
  ['Data Visualization with Python', 'Moringa School · 2025'],
]

export const recognition = [
  ['Top 10%', 'Kaggle Data Visualization Challenge'],
  ['Best project of 2026', 'Nairobi Flood Guard'],
  ['Best Problem Solver', 'Moringa School Bootcamp'],
  ['ICDL', 'Certification'],
]

export const skills = [
  ['Machine learning', 'Classification, regression, time-series forecasting, feature engineering, model tuning · scikit-learn, XGBoost, Optuna, SHAP'],
  ['Deep learning', 'Computer vision, transfer learning · TensorFlow / Keras, TFLite quantization'],
  ['Deployment & APIs', 'FastAPI, REST APIs, Streamlit, Render, pytest, LLM API integration (Qwen)'],
  ['Programming & data', 'Python, Pandas, NumPy, SQLite, SQLAlchemy, Git & GitHub, Jupyter'],
  ['Analysis & viz', 'Data cleaning, EDA, statistical analysis · Tableau, Plotly, Matplotlib, Seaborn · GeoPandas, OSMnx, Folium'],
  ['MEAL & research', 'MEAL frameworks, survey design, household & community surveys, KoboToolbox, evaluation reporting'],
] as const

export const languages = 'Somali (native) · English (fluent) · Kiswahili (fluent)'
