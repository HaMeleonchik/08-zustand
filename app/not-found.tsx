import css from "@/components/NoteFoundStyle/noteFound.module.css"

import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "NotFound",
  description: "There is nothing here.",
  openGraph: {
  title: "NotFound",
  description: "There is nothing here.",
    url: "/",
    images: [{
      url:"https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      width: 1200,
      height: 630,
      alt: "NoteHub Image",
    }]
  }
};


export default function NotFound() {

        return <>
                <Head>
                <meta property="og:title" content="NotFound" />
                <meta property="og:description" content="There is nothing here." />
                <meta property="og:image" content="https://ac.goit.global/fullstack/react/notehub-og-meta.jpg/1200x630" />
                <meta property="og:url" content="/" />
                <meta property="og:site_name" content="NotFound" />
                </Head>
                <h1 className={css.title}>404 - Page not found</h1>
                <p className={css.description}>Sorry, the page you are looking for does not exist.</p> 
        </>
} 

