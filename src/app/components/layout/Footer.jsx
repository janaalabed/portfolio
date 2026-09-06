export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="text-label text-muted-foreground">
          © {new Date().getFullYear()} Jana Al Abed
        </p>
      </div>
    </footer>
  );
}
