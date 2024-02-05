import { CopyButton } from "@/components/copy-button";

export default function CodeBlock() {
  return (
    <pre className="relative mb-4 mt-6 max-h-[640px] overflow-x-auto rounded-lg border p-4 font-mono text-sm font-semibold text-muted-foreground w-fit pr-16">
      <span className="flex gap-4">
        <span className="shrink-0 text-gray-500">$</span>

        <span className="flex-1">
          <span>gh repo clone {""}</span>

          <span className="text-foreground">sujjeee/codox</span>
        </span>
      </span>

      <CopyButton />
    </pre>
  );
}
