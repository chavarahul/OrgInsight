import { Card } from "@/components/ui/card"
import { Building2 } from "lucide-react"

const EmptyState = () => {
  return (
    <Card className="p-12 text-center bg-white/40">
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 rounded-full bg-muted">
          <Building2 className="h-12 w-12 text-muted-foreground" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">No companies found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      </div>
    </Card>
  )
}

export default EmptyState;