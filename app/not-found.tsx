import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NotFound",
  description: "There is nothing here.",
  openGraph: {
  title: "NotFound",
  description: "There is nothing here.",
    url: "http://localhost:3000/",
    images: [{
      url:"https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      width: 1200,
      height: 630,
      alt: "NoteHub Image",
    }]
  }
};



import css from "../components/NoteFoundStyle/noteFound.module.css"
export default function notFound() {

        return <>
                <h1 className={css.title}>404 - Page not found</h1>
                <p className={css.description}>Sorry, the page you are looking for does not exist.</p> 
        </>
} 

