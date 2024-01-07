import Table from "../components/Table";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden mx-auto flex flex-col items-center space-y-16 container p-4 md:p-12 pb-0 md:pb-0">
      <Header />
      <Table />
      <Footer />
    </main>
  );
}
