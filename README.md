# Portfolio Client

This is a **Next.js** personal portfolio website where users can view projects, blogs, and contact the site owner. Users can log in via **GitHub** or **Google** using NextAuth and manage their own projects and blogs through a dashboard.

## 🚀 Features

- **Public Access**

  - View projects and blogs
  - Contact the owner via a form (name, email, message)

- **Authentication**

  - Social login with **GitHub** and **Google** via NextAuth
  - Users can only access their own dashboard after logging in

- **Dashboard (Authenticated Users)**
  - **Projects**
    - Add, edit, delete, and view personal projects
  - **Blogs**
    - Add, edit, delete, and view personal blogs

## 📂 Project Structure

```plaintext
src/
│── app/
│   ├── (authLayout)/login/        # Authentication pages
│   ├── (dashboardLayout)/         # User dashboard
│   │   ├── blogs/                 # Blog management
│   │   ├── messages/              # User messages
│   │   ├── projects/              # Project management
│   │   ├── layout.tsx             # Dashboard layout
│   ├── (withCommonLayout)/        # Pages with common layout
│   ├── api/auth/                  # NextAuth API route
│── components/                    # Reusable UI components
│── utils/                          # Utility functions (e.g., authentication)
│── assets/                         # Static assets
│── styles/                         # Global styles
```

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **NextAuth** for authentication (GitHub, Google)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** for form handling
- **Lucide React** for icons
- **Sonner** for notifications
- **React Spinners** for loading indicators

## 📦 Installation & Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/portfolio-client.git
   cd portfolio-client
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file and add:

   ```env
   GITHUB_ID=your_github_id
   GITHUB_SECRET=your_github_secret
   GOOGLE_ID=your_google_id
   GOOGLE_SECRET=your_google_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Run the development server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚡ Production Build

To build the project for production:

```sh
npm run build
npm start
```

## 📝 License

This project is open-source and available under the **MIT License**.
