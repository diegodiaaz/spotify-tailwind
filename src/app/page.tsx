export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64">
          sidebar
        </aside>
        <main className="flex-1">
          main
        </main>
      </div>
      <footer>
        footer
      </footer>
    </div>
  );
}
