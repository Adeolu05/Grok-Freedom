# GROK FREEDOM ($GROKF)

> **Intelligence Unchained. Truth Unfiltered.**

Welcome to the **Grok Freedom** portal. This is a high-fidelity, cyberpunk-themed landing page and interactive experience built for the $GROKF token community. It features a retro-futuristic terminal interface, immersive animations, and a direct uplink to the mission.

## 🌟 Features

- **System Boot Sequence**: Immersive CRT-style initialization animation on load.
- **Cyberpunk Aesthetics**: Scanlines, glitches, neon glows, and a "Matrix" inspired visual design.
- **Interactive Terminal**: A functional `Manifesto` terminal where users can type commands like `HELP`, `BUY`, `STATUS`, and `MISSION`.
- **Mission Control**: Dashboard visualising the current community objectives.
- **Live Data Visualizations**: "Intelligence Matrix" with animated neural nodes and data streams.
- **Responsive Design**: Fully optimized for desktop and mobile "nodes".

## 🛠️ Technology Stack

- **Framework**: [React](https://reactjs.org/) (via Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: Custom CSS keyframes and Tailwind utilities.

## 🚀 Run Locally

This project uses Vite for lightning-fast development.

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd grokf
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Start the Development Server**:
    ```bash
    npm run dev
    ```
    The app will come online at `http://localhost:5173`.

4.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

- **`App.tsx`**: Main entry point handling the initial boot sequence and global layout.
- **`components/`**:
    - **`Hero.tsx`**: The main landing area with Contract Address copier and "Intelligence Matrix" visualizer.
    - **`Manifesto.tsx`**: The interactive CLI terminal component.
    - **`MissionControl.tsx`**: Displays community missions and recruitment status.
    - **`Tokenomics.tsx`**: Breakdown of token distribution (if applicable).
    - **`Navigation.tsx`**: Top level navigation bar.
    - **`JoinModal.tsx`**: Modal for community engagement.

## 📡 Commands (Manifesto Terminal)

In the Manifesto section, try typing:
- `HELP`: List available commands.
- `BUY`: Display the Contract Address.
- `MISSION`: Show the current objective.
- `STATUS`: Check system integrity.

---

*Initiated by the Grok Freedom Protocol.*
