"use client";

import { trpc } from "@/app/_trpc/client";
import { Icons } from "@/components/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function AuthCallback() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        router.push(origin ? `${origin}` : "/");
      }
    },
    onError: (err) => {
      toast.error("AuthCallBack: Something went wrong!");
      if (err.data?.code === "UNAUTHORIZED") {
        router.push("/signin");
      }
    },
    retry: false
  });

  return (
    <div className="flex flex-col items-center gap-6  justify-center">
      <Icons.configure className="h-9 w-9" aria-hidden="true" />
      <div className="text-center">
        <h3 className="font-semibold text-xl">
          You are almost done.
          <br /> Your account is being configured.
        </h3>
        <p className="text-muted-foreground mt-2">
          {" "}
          You will be redirected shortly.
        </p>
      </div>
    </div>
  );
}
