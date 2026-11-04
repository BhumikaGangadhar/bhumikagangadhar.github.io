export const links = {
  email: 'mailto:karnatishivakrishna@gmail.com',
  github: 'https://github.com/shivakarnati',
  linkedin: 'https://www.linkedin.com/in/shivakrishna-karnati-2b429827b',
};

export const experience = [
  {
    company: 'Kupper IT GmbH', role: 'KI Solutions Consultant & Entwickler',
    period: 'Apr. 2025 — heute', type: 'Vollzeit · vor Ort', current: true,
    summary: 'Von internen Wissensdatenbanken bis zur Bereitstellung von LLMs: KI-Lösungen für den Unternehmensalltag.',
    points: [
      'Entwicklung einer PrivateGPT-Lösung mit RAG für die interne Wissensdatenbank unter Berücksichtigung von Rollen und Zugriffsrechten.',
      'Integration eines MCP-Servers und Anbindung an MCP-Clients für den Zugriff auf Werkzeuge und Wissen.',
      'Automatisierung von Prozessen wie Sensormonitoring mit Ticketsystem-Anbindung und Benachrichtigungen über Microsoft Outlook.',
      'Entwicklung von LLM as a Service mit tokenbasiertem Zugriff sowie Bereitstellung von LLMs mit GPU-Optimierung und Inference-Servern.',
    ], tags: ['RAG', 'MCP', 'Agentic AI', 'Automatisierung', 'LLM Serving'],
  },
  {
    company: 'Fraunhofer IBP', role: 'Generative AI & LCA-Forschung',
    period: 'Feb. 2025 — Dez. 2025', type: 'Wissenschaftliche Hilfskraft · remote · 10 Std./Woche',
    summary: 'Generative KI für den Zugang zu Life-Cycle-Assessment-Wissen und Computer Vision für die Qualitätsprüfung.',
    points: [
      'Entwicklung eines RAG-Chatbots für LCA-Dokumente mit Python, OpenAI, FAISS, Streamlit und Azure AI Services.',
      'Erstellung eines Knowledge Graphs mit LLMGraphTransformer und Neo4j.',
      'Einsatz von Objekterkennungsmodellen zur Erkennung kleiner Bauteile auf Leiterplatten und zur Automatisierung manueller Prüfprozesse.',
    ], tags: ['Generative AI', 'Knowledge Graphs', 'Neo4j', 'Computer Vision'],
  },
  {
    company: 'Hochschule Mittweida', role: 'Robotik & Computer Vision',
    period: 'Jan. 2025 — Okt. 2025', type: 'Wissenschaftliche Hilfskraft · vor Ort · 20 Std./Woche',
    summary: 'Forschung an Objekterkennung, Segmentierung und effizienten Modellen für Embedded-Hardware.',
    points: [
      'Untersuchung von YOLO, Detectron2 und MediaPipe in benutzerdefinierten Erkennungs- und Segmentierungsaufgaben.',
      'Model Pruning und Quantisierung für den Einsatz auf NVIDIA Jetson Orin.',
      'Generierung synthetischer Daten zur Gesichtsausdruckserkennung mit Stable Diffusion sowie Arbeit mit XGBoost und MongoDB.',
    ], tags: ['YOLO', 'NVIDIA Jetson', 'Quantisierung', 'Synthetische Daten'],
  },
  {
    company: 'IAV GmbH', role: 'MLOps & Automatisierung',
    period: 'Nov. 2024 — Apr. 2025', type: 'Masterarbeit',
    summary: 'Automatisierte Datensatzgenerierung für Robotik und autonomes Fahren durch Objekterkennung.',
    points: [
      'Verbesserung der Roboternavigation mit Objekterkennungsmodellen und ROS 2-Algorithmen.',
      'Training, Fine-Tuning, Deployment und Benchmarking von YOLO-Modellen auf Embedded-Geräten.',
      'Containerisierte, versionierte und skalierbare Bereitstellung mit Docker, GitLab CI/CD und Kubernetes.',
    ], tags: ['ROS 2', 'YOLO', 'MLOps', 'Docker', 'Kubernetes'],
  },
  {
    company: 'Mentopolis CSC GmbH', role: 'Fullstackentwicklung & Machine Learning',
    period: '2022 — 2024', type: 'Werkstudent & Praktikant · remote',
    summary: 'Machine Learning und Softwareentwicklung zur Vorhersage von Netzwerkausfällen in Echtzeit.',
    points: [
      'Aufbau einer ETL-Pipeline in AWS zur Datensammlung und -speicherung sowie Training von LSTM- und GRU-Modellen in AWS SageMaker.',
      'Integration eines KI-Projekts in eine Microservice-Architektur.',
      'Mitarbeit an einem Netzwerkplanungstool mit Java, Spring Boot und React.',
    ], tags: ['AWS SageMaker', 'LSTM / GRU', 'Spring Boot', 'React'],
  },
  {
    company: 'Codefelix Technologies', role: 'Fullstackentwickler',
    period: '2018 — 2021', type: 'Vollzeit · vor Ort · Indien',
    summary: 'Java-Backend- und AngularJS-Frontend-Entwicklung für Webplattformen.',
    points: [
      'Entwicklung einer Plattform für die gemeinsame Nutzung von Dokumenten mit Java und Spring Boot.',
      'Mitarbeit an einer Online-Gaming-Plattform mit Spring Boot und AngularJS.',
      'Implementierung von REST-APIs für eine Hotelmanagement-Plattform mit Docker, CI/CD und Bitbucket.',
    ], tags: ['Java', 'Spring Boot', 'AngularJS', 'REST'],
  },
];

export const focusAreas = [
  { number: '01', title: 'Wissen zugänglich machen', text: 'PrivateGPT und RAG verbinden internes Wissen mit LLMs. Rollen und Berechtigungen gehören dabei zum Systemdesign.', tags: ['PrivateGPT', 'RAG', 'Knowledge Base'] },
  { number: '02', title: 'Werkzeuge & Prozesse verbinden', text: 'MCP verbindet KI mit Werkzeugen; automatisierte Abläufe verknüpfen Monitoring, Tickets und Benachrichtigungen.', tags: ['MCP', 'Agentic AI', 'n8n'] },
  { number: '03', title: 'LLMs in den Betrieb bringen', text: 'Tokenbasierter LLM-Zugriff, GPU-Optimierung und Inference-Server machen aus Modellen nutzbare Services.', tags: ['LLM as a Service', 'GPU', 'Inference'] },
];

export const skills = [
  ['Sprachen & Frameworks', ['Python', 'FastAPI', 'Java', 'Spring Boot', 'Bash', 'SQL', 'R']],
  ['KI & Computer Vision', ['PyTorch', 'TensorFlow', 'Pandas', 'OpenCV', 'CUDA', 'RAG']],
  ['Cloud & Betrieb', ['Docker', 'Kubernetes', 'GitLab CI/CD', 'AWS AI Services', 'MLOps']],
  ['Daten & Schnittstellen', ['Oracle DB', 'PostgreSQL', 'Vektordatenbanken', 'REST', 'GraphQL']],
  ['Monitoring', ['Prometheus', 'Grafana', 'Loki', 'OpenTelemetry']],
  ['Agenten & Entwicklung', ['n8n', 'Open WebUI', 'MCP', 'A2A', 'Claude Code', 'Codex']],
];

export const projects = [
  { title: 'Robotik & autonomes Fahren', category: 'Masterarbeit · IAV', text: 'Automatisierte Datensatzgenerierung, Objekterkennung und Deployment auf Embedded-Hardware.', tags: ['YOLO', 'ROS 2', 'MLOps'] },
  { title: 'LCA Knowledge Assistant', category: 'Forschung · Fraunhofer IBP', text: 'RAG-basierter Zugriff auf LCA-Dokumente, ergänzt durch einen Knowledge Graph.', tags: ['FAISS', 'Neo4j', 'Azure AI'] },
  { title: 'Daten, Modelle & Experimente', category: 'Akademische & persönliche Projekte', text: 'New-York-Taxipreisprognose, Twitter-Sentimentanalyse, FitBit-Datenanalyse und SEIR-Modellierung.', tags: ['Data Science', 'NLP', 'Modellierung'] },
];
