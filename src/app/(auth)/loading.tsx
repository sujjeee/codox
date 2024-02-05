import { Skeleton } from "@/components/ui/skeleton";

export default function AuthLoading() {
  return (
    <div className="h-[90vh] w-full justify-center items-center flex md:container md:max-w-6xl px-4 ">
      <Skeleton className="h-[80px] w-[450px] rounded-xl bg-primary-foreground " />
    </div>
  );
}
