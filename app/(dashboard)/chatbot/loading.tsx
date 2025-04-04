import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container mx-auto py-6">
      {/* Feature section skeleton */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <Skeleton className="h-10 w-64 mx-auto mb-2" />
          <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-6 bg-card dark:bg-card/80 rounded-lg shadow-md border border-border">
              <Skeleton className="w-12 h-12 rounded-full mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>

      {/* Chatbot skeleton */}
      <Skeleton className="h-10 w-64 mb-6" />

      <Card className="w-full max-w-4xl mx-auto shadow-xl overflow-hidden border-primary/20">
        <CardHeader className="bg-gradient-to-r from-primary to-primary/80">
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-48" />
            <div className="flex flex-col items-end">
              <Skeleton className="h-5 w-32 mb-1" />
              <Skeleton className="h-5 w-32" />
            </div>
          </div>
          <Skeleton className="h-4 w-64 mt-2" />
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-[500px] p-4 bg-gray-50 dark:bg-gray-900/50">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`mb-4 flex ${i % 2 === 0 ? "justify-end" : "justify-start"}`}>
                <Skeleton className={`h-12 ${i % 2 === 0 ? "w-64" : "w-80"} rounded-2xl`} />
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="border-t p-4 bg-white dark:bg-gray-950">
          <div className="flex w-full gap-2">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-24" />
          </div>
        </CardFooter>
      </Card>

      <div className="flex justify-between items-center mt-4 max-w-4xl mx-auto">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  )
}

