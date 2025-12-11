import { ContactForm } from "@/components/organisms/ContactForm";

export default function Contact() {
  return (
    <div className="home">
      <h1>Contact</h1>
      <h2>A coder by day, problem-solver by night!</h2>
      <div className="mt-8"><ContactForm /></div>
    </div>
  );
}
