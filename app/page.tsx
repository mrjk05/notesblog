import Note from "@/components/note";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data: note } = await supabase.from('notes').select('*').eq('id', 'fd234e08-7ac1-4332-a3fe-06ece731c314').single();
  return (
    <div className="w-full min-h-screen p-5">
      <Note note={note} />
    </div>
  );
}
