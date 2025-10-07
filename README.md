# Personal Portfolio Website

A modern, interactive portfolio website built with React, Three.js, and Framer Motion, showcasing professional experience, projects, and skills with stunning 3D animations.

## 🌐 Live Demo

**Website:** [https://orange-desert-057ce3610.1.azurestaticapps.net](https://orange-desert-057ce3610.1.azurestaticapps.net)

## ✨ Features

- **3D Interactive Hero Section** - Animated 3D sphere with particle effects using Three.js
- **Responsive Design** - Fully responsive across all devices
- **Modern UI/UX** - Glassmorphism effects, smooth animations, and gradient accents
- **Project Showcase** - Interactive project cards with tilt effects
- **Skills Visualization** - Animated skill cards with proficiency levels
- **Experience Timeline** - Professional work history
- **Contact Form** - Easy way to get in touch

## 🛠️ Technologies Used

- **Frontend:** React 19, Vite
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS
- **Deployment:** Azure Static Web Apps
- **CI/CD:** GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DandaAkhilReddy/personalwebsite.git
cd personalwebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Project Structure

```
personalwebsite/
├── public/                      # Static assets
│   └── staticwebapp.config.json # Azure SWA configuration
├── src/
│   ├── components/              # React components
│   │   ├── Hero3D.jsx          # 3D animated hero section
│   │   ├── Projects.jsx        # Project showcase
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Contact.jsx         # Contact form
│   │   └── MouseFollower.jsx   # Custom cursor effect
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── .github/workflows/           # GitHub Actions
│   └── azure-static-web-apps.yml
└── package.json
```

## 🎨 Key Components

### Hero3D
Interactive 3D sphere with particle effects, animated using Three.js and React Three Fiber.

### Projects
Showcases professional projects with:
- Interactive tilt effects
- Project metrics and highlights
- Technology stack badges
- Gradient accent colors

### Skills
Displays technical skills with:
- Animated skill cards
- Category organization
- Visual indicators

### Experience
Professional work history with company details and key achievements.

## 🌐 Deployment

This site is deployed on Azure Static Web Apps with automatic CI/CD through GitHub Actions.

### Deploy Manually

```bash
npm run build
swa deploy ./dist --deployment-token <YOUR_TOKEN> --env production
```

### Automatic Deployment

Every push to the `main` branch triggers an automatic deployment via GitHub Actions.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Akhil Reddy Danda**
- Software Development Engineer
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]
- GitHub: [@DandaAkhilReddy](https://github.com/DandaAkhilReddy)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!
