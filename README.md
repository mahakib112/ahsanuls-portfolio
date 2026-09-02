<<<<<<< HEAD
# ahsanuls-portfolio
=======
# Md. Ahsanul Haque - Professional Portfolio

> **Medical Assistant | Health & Development Professional | NGO Program & MEAL Practitioner**

A clean, modern, accessible, and high-impact personal portfolio website showcasing 7+ years of professional experience across community health, NGO program management, WASH interventions, MEAL (Monitoring, Evaluation, Accountability, and Learning) frameworks, and clinical medical practice.

---

## 🌟 Key Highlights & Authentic Impact

- **7+ Years Sector Experience**: Field-tested leadership with Good Neighbors Bangladesh, Palli Mongal Karmosuchi, Phultala UHC / 250-Bed General Hospital Khulna, and Greehogram Zubo Songothon.
- **10,000+ Reached**: Direct community beneficiaries supported through health and WASH drives.
- **$150,000 Portfolio Oversight**: Successfully managed and tracked program budget allocations (2023–June 2025) under strict donor compliance.
- **Academic Distinction**:
  - **PMGDS** (*Professional Masters in Governance & Development Studies*, Jahangirnagar University) — **ONGOING / Enrolled**
  - **PGD in MEAL** (*Academy of Business Professionals*, 2025)
  - **BSS** (*Bangladesh Open University*, 2020)
  - **DMF** (*State Medical Faculty of Bangladesh*, 2017)

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, JavaScript (ES6+), HTML5, Vanilla CSS3 (Custom Design System, CSS Variables, Tokens)
- **Icons**: Lucide React
- **Backend (Minimal Scaffolding)**: Node.js, Express.js (scaffolded for future API/form handling without database dependencies)
- **Design System**: Tailored for NGO/INGO/public health recruiters with light/dark theme toggling, high contrast compliance, and responsive layouts across all mobile, tablet, laptop, and desktop viewports.

---

## 📁 Project Structure

```
ahsanuls-portfolio/
├── public/
│   ├── assets/
│   │   └── Md-Ahsanul-Haque-CV.pdf       # Downloadable CV PDF placeholder
│   └── favicon.svg                       # Public health brand icon
├── server/
│   └── server.js                         # Minimal Node.js Express server
├── src/
│   ├── components/
│   │   ├── Badge.jsx                     # Status badges (Ongoing vs Completed)
│   │   ├── Footer.jsx                    # Footer with quick links & back-to-top
│   │   ├── Navbar.jsx                    # Sticky navigation, mobile drawer & theme switcher
│   │   └── SectionHeader.jsx             # Accessible semantic headers
│   ├── data/
│   │   ├── education.js                  # Academic background (Ongoing vs Completed)
│   │   ├── experience.js                 # Verified career timeline & duties
│   │   ├── healthWash.js                 # Health & WASH programmatic focus
│   │   ├── impact.js                     # Verified achievements and metrics
│   │   ├── leadership.js                 # Volunteerism & community campaigns
│   │   ├── mealDev.js                    # MEAL pillars & indicator tracking
│   │   ├── profile.js                    # Core profile data & summary stats
│   │   ├── skills.js                     # Categorized skill matrices
│   │   └── trainings.js                  # Clinical & public health certifications
│   ├── hooks/
│   │   ├── useActiveSection.js           # Scroll-spy navigation hook
│   │   └── useTheme.js                   # Light/dark mode with OS listener & localStorage
│   ├── sections/
│   │   ├── About.jsx                     # Authentic first-person bio
│   │   ├── Contact.jsx                   # Contact cards, form & email copy tool
│   │   ├── Education.jsx                 # Academic journey & status badges
│   │   ├── Experience.jsx                # Professional timeline
│   │   ├── HealthWash.jsx                # Specialized Health & WASH section
│   │   ├── Hero.jsx                      # Hero banner with primary CTAs
│   │   ├── Impact.jsx                    # Verified metrics & pillars
│   │   ├── Leadership.jsx                # Community leadership & volunteerism
│   │   ├── MealDev.jsx                   # MEAL methodologies & accountability
│   │   ├── Skills.jsx                    # Skills matrix & competencies
│   │   └── Trainings.jsx                 # BLS, CPR, IPC & specialized trainings
│   ├── App.jsx                           # Main layout assembler
│   ├── index.css                         # Design system tokens & styles
│   └── main.jsx                          # React DOM root entry
├── index.html                            # SEO metadata, Open Graph & preconnect fonts
├── package.json                          # Dependencies & build scripts
├── vite.config.js                        # Vite configuration
└── README.md                             # Documentation
```

---

## 🚀 Getting Started (Local Development)

### 1. Prerequisites
- **Node.js**: v18.0.0 or later
- **npm**: v9.0.0 or later

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/mahakib112/ahsanuls-portfolio.git
cd ahsanuls-portfolio
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Building for Production

To create an optimized production build:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Optional Node.js Server Run

To run the full-stack server (serving static files and health API):
```bash
npm run server
```
Server runs on [http://localhost:3000](http://localhost:3000).

---

## 🚢 Deployment Guidance

### Static Hosting (Vercel / Netlify / GitHub Pages)
This project is fully optimized for zero-config deployment on modern static platforms:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

---

## 📄 License & Attribution
Designed & developed for **Md. Ahsanul Haque**. All professional rights reserved.
>>>>>>> bfdc09c (feat: complete professional portfolio website for Md. Ahsanul Haque)
