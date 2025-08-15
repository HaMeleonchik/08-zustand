import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

interface Props{
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  
const filterNot = slug[0]
const tag = filterNot === "All" ? undefined : filterNot

  
  return {
    title: `filter: ${tag ?? "All"}`,
    description: `Notes by tag: ${tag ?? "All"}`,
      openGraph: {
    title: `filter: ${tag ?? "All"}`,
    description: `Notes by tag: ${tag ?? "All"}`,
    url: "http://localhost:3000/notes/filter/All",
    images: [{
      url:"https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      width: 1200,
      height: 630,
      alt: "NoteHub Tag Image",
    }]
  }
}

 }

export default async function Notes({params}:Props) {
  const { slug } = await params
  
const filterNot = slug[0]
const tag = filterNot === "All" ? undefined : filterNot

  const page = 1
  const searchQuery = ""
  
  const initialData = await fetchNotes(searchQuery, tag, page)

  return <NotesClient
    initialNotes={initialData.notes}
    initialTotalPages={ initialData.totalPages}
    tag={tag}
  />

}