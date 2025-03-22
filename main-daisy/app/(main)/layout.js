// app/(main)/layout.js
import Header from '@/components/Header.jsx';

export default function MainLayout({ children }) {
  return (
    <div className="bg-base-300 min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <div>
          <p className="text-sm opacity-70">Built with Next.js and DaisyUI</p>
        </div>
      </footer>
    </div>
  );
}