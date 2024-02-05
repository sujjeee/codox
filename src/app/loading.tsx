import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="md:container md:max-w-6xl px-4">
        <div className="md:py-8 py-4 flex w-full justify-between items-center z-50">
          <Skeleton className="h-[50px] w-[50px] sm:w-[150px] rounded-xl bg-primary-foreground " />
          <div className="flex justify-center items-center gap-2">
            <Skeleton className="h-[50px] w-[50px] rounded-xl bg-primary-foreground hidden sm:flex" />
            <Skeleton className="h-[50px] w-[50px] rounded-xl bg-primary-foreground hidden sm:flex " />
            <Skeleton className="h-[50px] w-[120px] rounded-xl bg-primary-foreground " />
          </div>
        </div>
      </div>
      <div className="h-[65vh] w-full justify-center items-center flex md:container md:max-w-6xl px-4 ">
        <Skeleton className="h-[80px] w-[450px] rounded-xl bg-primary-foreground " />
      </div>
    </>
  );
}
