import NotFound from "@/app/not-found"
import { fetchNoteById } from "../../../lib/api"
import NoteDetailsClient from "./NoteDetails.client"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { Metadata } from "next"
interface Props {
    params:Promise<{id:string}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  
  const { id } = await params

  return {
    title: `NoteDetails`,
    description: `Notes by Id: ${id}`,
      openGraph: {
    title: `NoteDetails`,
    description: `Notes by Id: ${id}`,
    url: `/notes/${id}`,
    images: [{
      url:"https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      width: 1200,
      height: 630,
      alt: "NoteHub Id Image",
    }]
  }
}

 }



export default async function NoteDetails({ params}: Props) {
  const { id } = await params
    
    const note = await fetchNoteById(id).catch(() => {
        NotFound();
    });

    if (!note) {
        NotFound();
  }
  
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  })
  

  return<HydrationBoundary state={dehydrate(queryClient)}>
    <NoteDetailsClient id={ id} />
        </HydrationBoundary>
} 