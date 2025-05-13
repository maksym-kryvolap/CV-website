import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Skills } from "../components/Skills";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { ContactForm } from "../components/ContactForm";

export const Home = () => {
  return (
    <Layout>
      <Header />

      <Skills />

      <About />

      <Portfolio />

      <ContactForm />
    </Layout>
  );
};
