import Layout from "@components/layout";
import { trackGoal } from "fathom-client";

export const meta = {
  title: "Patronage",
  description: "Support Brandon Pittman's open source work.",
};

export default function Grateful() {
  return (
    <Layout
      meta={meta}
      className="max-w-2xl text-lg prose sm:prose-lg dark:prose-dark"
    >
      <h1>Support My Work</h1>

      <p>
        If you're interested in showing support for the projects I work on or
        you'd just like to say "Thanks for being such a great guy", there are a
        couple good ways to do so. If you'd like to get something for yourself
        and support me at the same time, consider signing up for{" "}
        <a
          onClick={() => trackGoal("CIHFDIOL", 0)}
          href="https://usefathom.com/ref/HTO6KY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fathom Analytics
        </a>{" "}
        with my affiliate link or try{" "}
        <a
          onClick={() => trackGoal("XUEDPKNH", 0)}
          href="https://mailbrew.com/?utm_source=blp&utm_campaign=affiliate"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mailbrew
        </a>{" "}
        for reading email newsletters in a better way.
      </p>

      <p>
        If you don't need any analytics, I have a patronage page over at{" "}
        <a
          href="https://www.buymeacoffee.com/blp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Me A Coffee.
        </a>{" "}
        You can make a one-time donation or sign up for a membership. The
        membership option gets you access to a members-only chat room where I'll
        answer questions you have about dev topics like Gridsome and Tailwind or
        even questions about my 15+ years living in Japan! Your support is
        greatly appreciated, and allows me to dedicate more time to open-source
        work. Thank you for supporting me!
      </p>
    </Layout>
  );
}
