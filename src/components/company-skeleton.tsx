import { Skeleton } from "@/components/ui/skeleton"

const CompanySkeleton = () =>  {
  return (
    <div className="bg-white/60 border border-border rounded-lg p-6">
      <div className="space-y-4">
        <Skeleton className="w-14 h-14 rounded-xl " />
        <div className="space-y-3">
          <Skeleton className="h-6 w-3/4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanySkeleton;
