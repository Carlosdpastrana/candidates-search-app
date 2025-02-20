
# 💖 Candidate Search App

A **fun and simple React app** that lets you **discover GitHub users** like swiping through potential candidates! Built with **TypeScript, React, and Vite**. Styled for a **modern, cute, and clean user experience**. 💻✨

## 🌟 Features
- 🔍 Fetch random GitHub users.
- 📝 View their basic profile details (name, location, company, etc.).
- ❤️ Accept or ❌ Reject users like a dating app (Tinder vibes).
- 💾 Save accepted users to **localStorage**.
- 🖼️ Beautiful pastel turquoise background and round card UI.

## 📸 Preview
![App Screenshot](https://via.placeholder.com/600x300.png?text=Insert+App+Screenshot)

## 🛠️ Tech Stack
- **React + TypeScript**
- **Vite** for fast development and build.
- **Styled with CSS** for a fresh, clean, and modern look.
- **GitHub API** integration.

## 🚀 Live Demo
🔗 [See it Live on Render](https://candidates-search-app.onrender.com)

## 🏃‍♀️ Run Locally

Clone the project:

\`\`\`bash
git clone https://github.com/Carlosdpastrana/candidates-search-app.git
\`\`\`

Go to the project directory:

\`\`\`bash
cd candidates-search-app
\`\`\`

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Create an **\`.env\`** file in the `environment` folder:

\`\`\`
VITE_GITHUB_TOKEN=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
\`\`\`

Build the project:

\`\`\`bash
npm run build
\`\`\`

Run locally:

\`\`\`bash
npx serve -s dist
\`\`\`

The app will be running at [http://localhost:3000](http://localhost:3000)

## ⚙️ Environment Variables
| Variable            | Description                  |
|---------------------|------------------------------|
| `VITE_GITHUB_TOKEN` | GitHub Personal Access Token |

## 🐛 Troubleshooting
- **401 Unauthorized?**  
  Make sure your `.env` file is set up with a **valid GitHub token**.
- **502 on Render?**  
  Set the **Build Command** and **Start Command** on Render to:
  - **Build:** `npm install && npm run build`
  - **Start:** `npx serve -s dist`

## ❤️ Acknowledgments
Special thanks to **GitHub API** for providing the data and **Render** for hosting.

## 📧 Contact
Have questions? Feel free to reach out:
- GitHub: [Carlosdpastrana](https://github.com/Carlosdpastrana)
