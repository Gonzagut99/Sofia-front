import { useNavigate } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";

export function BackNavigator() {
  const navigate = useNavigate();
  return (
    <section>
        <Button
            variant={'link'}
            size={'icon'}
            className="flex items-center gap-2 text-primary w-fit "
            onClick={() => navigate(-1)}
        >
            <ArrowLeft className="size-8" />
            {/* <span>Volver</span> */}
        </Button>
    </section>
  )
}
