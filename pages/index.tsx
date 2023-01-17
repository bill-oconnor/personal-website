import { MantineProvider } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { BioSection } from "../components/sections/BioSection";
import { HeroSection } from "../components/sections/HeroSection";
import styles from "../styles/Home.module.css";
import { ContactSection } from "../components/sections/ContactSection/ContactSection";
import { ResourcesSection } from "../components/sections/ResourcesSection";

interface IProps {
  posts: any;
  content: any;
}

const Home: NextPage<IProps> = (props: IProps) => {
  const { posts, content } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ other: { contentWidth: 1200 } }}
    >
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Hero Section */}

        <main className={styles.main}>
          <HeroSection content={content?.hero?.content} />
          {/* About Section */}
          <BioSection content={content?.bio?.content} />

          {/* Blog Section */}
          <ResourcesSection content={content?.bio?.content} />

          {/* Contact section */}
          <ContactSection content={content?.bio?.content} />
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </MantineProvider>
  );
};

export async function getStaticProps() {
  // TODO: this should all happen in a serverless function that returns
  // formatted data
  // filter blogs for published
  // filter content for value present

  return {
    props: { content: {}, posts: [] },
  };
}

export default Home;
