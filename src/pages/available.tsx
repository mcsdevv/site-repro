import Card from "@components/card";
import ContactForm from "@components/contactForm";
import Layout from "@components/layout";

export const meta = {
  title: "Contact",
  description: "Get in touch with Brandon Pittman.",
};

export default function Available() {
  return (
    <Layout className="prose sm:prose-lg dark:prose-dark" meta={meta}>
      <h1 className="mx-auto text-center">Send me a message</h1>

      <Card className="max-w-md px-6 py-8 mx-auto mt-8">
        <ContactForm />
      </Card>
    </Layout>
  );
}
