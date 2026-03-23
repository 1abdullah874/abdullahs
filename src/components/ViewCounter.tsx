import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Eye } from "lucide-react";

const ViewCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const increment = async () => {
      const { data, error } = await supabase.rpc("increment_view_count");
      if (!error && data !== null) setCount(data);
    };
    increment();
  }, []);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-muted-foreground font-mono text-xs">
      <Eye className="w-3.5 h-3.5" />
      {count.toLocaleString()} views
    </span>
  );
};

export default ViewCounter;
