import { MantineProvider } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { BioSection } from "../components/sections/BioSection";
import { HeroSection } from "../components/sections/HeroSection";
import styles from "../styles/Home.module.css";
import { ContactSection } from "../components/sections/ContactSection/ContactSection";
import { ResourcesSection } from "../components/sections/ResourcesSection";
import { Footer } from "../components/common/layout/Footer/Footer";
import { getContentFromCMS } from "../lib/api/content";
import { NewsletterSection } from "../components/sections/NewsletterSection";

interface IProps {
  content: any;
}

const Home: NextPage<IProps> = (props: IProps) => {
  const { content } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        black: "#101113" /* dark 9 */,
        fontFamily:
          "Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        headings: {
          fontFamily: "Coolvetica",
          sizes: {
            h1: {
              fontSize: "4rem",
            },
          },
        },
        other: { contentWidth: 1200 },
      }}
    >
      <div>
        <Head>
          <title>Bill O&apos;Connor</title>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤘🏻</text></svg>"
          />
        </Head>

        {/* Hero Section */}

        <main className={styles.main}>
          <HeroSection
            content={{
              title: "Hi, I'm Bill O'Connor 👋",
              description:
                "I am an independent, frontend-focused full-stack developer based in Austin, TX. I maintain a handful of projects, a blog, and a steady pursuit of knowledge, particularly as it pertains to personal and communal thriving. To learn more about my work and my thinking, explore the relevant sections below. If you find it interesting, I'd love to connect - reach out to me on Twitter or LinkedIn (links in the footer).",
            }}
          />
          <NewsletterSection />
          {/* <BioSection content={content?.bio} /> */}
          <ResourcesSection content={content?.resources} />
          {/* <ContactSection content={content?.contact} /> */}
          <Footer />
        </main>
      </div>
    </MantineProvider>
  );
};

export async function getStaticProps() {
  // TODO: this should all happen in a serverless function that returns
  // formatted data
  // filter blogs for published
  // filter content for value present
  const blogPosts = await getContentFromCMS();

  return {
    props: {
      content: {
        resources: {
          blogs: blogPosts,
        },
      },
    },
  };
}

export default Home;
