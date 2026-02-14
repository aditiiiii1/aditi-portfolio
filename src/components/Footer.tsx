"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-800 bg-gradient-to-b from-surface-950 to-surface-950/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center items-center">
        
        <p className="text-surface-500 text-sm flex items-center gap-1 text-center">
          © {currentYear} Made with 
          <span className="text-red-500 animate-pulse">❤️</span> 
          by 
          <span className="text-accent font-medium">
          Aditi 
          </span>
        </p>

      </div>
    </footer>
  );
}
