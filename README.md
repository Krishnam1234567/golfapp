# GOLF CHARITY PLATFORM

> **Live Demo:** [https://golfapp-ecru.vercel.app/](https://golfapp-ecru.vercel.app/)

An elite subscription club platform where your golf Stableford scores unlock monthly prize pools, and your subscription creates real-world impact for charities.

![Platform Overview](public/preview.png) *(Preview image placeholder, coming soon)*

## 🚀 Features

* **Log Scores:** Maintain your 5 latest Stableford scores. The algorithm tracks your performance automatically.
* **Monthly Draw:** Match 3, 4, or 5 numbers in transparent monthly draws. Win huge prize pools with jackpot rollovers.
* **Give Back:** Direct 10%+ of your subscription directly to causes that matter with total transparency and maximum impact.
* **Premium User Experience:** Immersive Neon/Glassmorphism UI, fluid interactive elements, and cutting-edge 3D graphics.

## 💻 Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **Library:** [React 19](https://react.dev/)
* **Database & Auth:** [Supabase](https://supabase.com/)
* **3D & Graphics:** [Three.js](https://threejs.org/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Styling:** Custom CSS with CSS Variables / Utility Classes

## 🛠️ Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* NPM / Yarn / pnpm / bun
* Supabase Account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/golf-charity-app.git
   cd golf-charity-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

* `/src/app` - Next.js App Router pages and layouts.
* `/src/components` - Reusable React components (UI elements, layouts).
* `/lib` - Application utilities and Supabase client configuration.
* `/public` - Static assets.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📜 License

This project is licensed under the MIT License.
