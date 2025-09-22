---
id: a-hie-platform
title: Health Information Exchange (HIE) Platform
imgSrc: /hie.webp
imgAlt: HIE Platform
featured: true
tools: Full-Stack Development, Machine Learning,
client: Confidential (under NDA)
date: August 2025
industry: Healthcare / HealthTech\
site: Private
overview: |
  This project delivered a Health Information Exchange (HIE) platform in Kenya. The system enables hospitals to share patient records in real time using FHIR-compliant APIs, integrates fraud detection models for insurance claims, and enforces bank-grade security** with OAuth 2.0, MFA, and AES-256 encryption. The platform ensures interoperability across diverse hospital systems while maintaining a clean, role-based dashboard experience for doctors, nurses, and administrators.
technology:
  - Node.js + Express
  - PostgreSQL
  - React.js
  - OAuth 2.0 / MFA
  - JWT Authentication
  - AES-256 Encryption
  - Python (Random Forest, Autoencoders, K-Means)
  - FHIR APIs
problem: |
  Healthcare providers in Kenya face challenges with fragmented systems, insecure data sharing, and rampant fraud in claims processing. Key issues included:
  - Lack of interoperability between hospitals and EHRs.
  - Slow and manual patient data exchange.
  - Weak security and privacy safeguards for sensitive health data.
  - Growing fraud in medical claims, leading to financial losses.
  The problem was to build a **secure, interoperable, and fraud-aware** patient data exchange platform tailored to local needs.
role: |
  I led the **end-to-end development** of the platform as the sole full-stack engineer and ML developer. My contributions spanned:
  - **Backend:** Built FHIR-compliant REST APIs in Node.js/Express, designed PostgreSQL schemas for patient records, audit logs, and fraud detection data.
  - **Frontend:** Developed a React.js dashboard with **role-based access control (RBAC)** for doctors, nurses, and admins. Designed UI for low-tech environments (large fonts, high contrast, simplified flows).
  - **Security:** Implemented OAuth 2.0 with MFA, JWT-based session management, AES-256 encryption, and complete audit trails for every action.
  - **Machine Learning:** Developed fraud detection models (Random Forest, Autoencoders, K-Means) in Python to identify anomalies in claim frequency, duplicate billing, and timestamp irregularities.
  - **Testing & Optimization:** Defined performance targets (API ≤1.5s, fraud accuracy ≥90%, role violation <1%) and validated the system against them.

solution: |
  The solution was implemented in four key layers:

  1. **Interoperable Data Exchange:**
     - Designed **FHIR-compliant RESTful APIs** for seamless hospital interoperability.
     - Supported patient transfers across hospitals (e.g., Kenyatta National Hospital → Moi Teaching & Referral).

  2. **Secure Infrastructure:**
     - Enforced OAuth 2.0 + MFA for all logins, with role-based dashboards (Doctor, Nurse, Admin).
     - Used **AES-256 encryption** for sensitive data, with “Encryption Active” status in UI.
     - Added detailed audit logs for every action, enabling accountability.

  3. **Fraud Detection Engine:**
     - Built hybrid ML models: Random Forest (supervised), Autoencoders (unsupervised), and K-Means (clustering).
     - Tracked features like claim frequency, duplicate billing, and time anomalies.
     - Flagged **high-risk claims** with 🔴 alerts (Fraud Risk ≥ 84%).

  4. **User Experience & Accessibility:**
     - Delivered a **minimalist React dashboard** with big fonts and high contrast for usability in low-tech clinics.
     - Provided touch-friendly navigation for rural settings.
     - Offline sync support for areas with poor internet coverage.

---
