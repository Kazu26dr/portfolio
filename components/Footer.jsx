const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="text-center text-gray-500 py-6 border-t mt-8">
      © {currentYear} - sasa
    </footer>
  );
}
