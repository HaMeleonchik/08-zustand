import notFound from "@/app/not-found"
import { fetchNoteById } from "../../../lib/api"
import NoteDetailsClient from "./NoteDetails.client"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
interface Props {
    params:Promise<{id:string}>
}

export default async function NoteDetails({ params}: Props) {
  const { id } = await params
    
    const note = await fetchNoteById(id).catch(() => {
        notFound();
    });

    if (!note) {
        notFound();
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