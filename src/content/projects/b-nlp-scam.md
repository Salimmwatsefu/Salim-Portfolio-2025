---
id: b-nlp-scam
title: SMS Scam Shield
imgSrc: /scam3.webp
imgAlt: Scam
featured: true
tools: NLP, Machine Learning
client: ACME Corp
date: September 2025
industry: Cybersecurity / Fraud Prevention
site: https://scam-detection-app-v1.streamlit.app/
overview: |
  Scam Message NLP Analysis is a project developed under IwazoLab to build a full natural language processing (NLP) pipeline for SMS scam detection. The system classifies incoming messages as 🔴 High-risk scams, 🟡 Moderate-risk scams, or 🟢 Low-risk/Legit. The goal is to protect users from fraud, prioritize investigations, and enable real-time alerts for mobile applications, particularly in the Kenyan context where both English and Swahili are used.
technology:
  - Python
  - scikit-learn
  - XGBoost
  - Logistic Regression
  - TF-IDF Vectorization
  - BERT Embeddings
  - spaCy
  - Label Studio
  - SHAP (Explainability)
  - Streamlit
problem: |
  Scam SMS messages are a growing threat, often exploiting psychological triggers like greed, urgency, and authority. Detecting them in real time is challenging due to:
  - Multilingual content (English and Swahili).
  - Overlap between legitimate financial/transactional messages and scam-like phrasing.
  - Small, imbalanced datasets that make model generalization difficult.
  The problem was to design a reliable, transparent, and extensible pipeline that could accurately classify messages while being explainable to stakeholders.
role: |
  I was the NLP/ML developer on the project, responsible for the end-to-end design and implementation of the pipeline. This included dataset preparation and labeling, text preprocessing, feature engineering, model training and evaluation, explainability (SHAP), and documentation of findings and methodologies. I also developed a Streamlit app to make the system publicly testable.

  
solution: |
  The solution was implemented in multiple stages:

  1. **Data Labeling & Risk Classification:**
     - Used Label Studio to refine and validate message labels.
     - Implemented keyword-based scripts (`prelabel.py`, `label.py`) to assign messages to **High-risk**, **Moderate-risk**, or **Legit** categories.
     - Final dataset (`scam_detection_labeled.csv`) contained 545 curated messages.

  2. **Preprocessing & Feature Engineering:**
     - Cleaned text (lowercasing, removing noise, URLs, phone numbers, transaction codes).
     - Applied spaCy for NER-based name removal, tokenization, stopword filtering, and lemmatization.
     - Generated both **TF-IDF features** for traditional models and **BERT embeddings** for contextual representation.
     - Saved processed data as `.pkl` for reproducibility.

  3. **Modeling & Evaluation:**
     - Trained **Logistic Regression** and **XGBoost** baselines using TF-IDF.
     - Logistic Regression achieved **78.38% test accuracy**, excelling in recall for scam messages (91.76%).
     - XGBoost achieved **83.78% test accuracy**, balancing precision and recall across classes.
     - Noted overfitting risks and documented generalization gaps.

  

---


