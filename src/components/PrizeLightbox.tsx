import { useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ZoomIn } from "lucide-react";
import { GRAND_PRIZE } from "@/config/matchday";
import { cn } from "@/lib/utils";

interface PrizeLightboxProps {
  /** The clickable element — receives a zoom affordance on hover. */
  children: ReactNode;
  className?: string;
  /** Screen-reader label for the trigger. */
  label?: string;
  /** Dim-and-magnify hover state. Right for an image, wrong for a text link. */
  overlay?: boolean;
}

/**
 * Opens the grand prize photo full-size. Radix handles the focus trap,
 * scroll lock and Escape so the overlay is keyboard-safe.
 */
export const PrizeLightbox = ({
  children,
  className,
  label = "View the signed Filippo Inzaghi photo full size",
  overlay = true,
}: PrizeLightboxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={label}
          className={cn(
            "group relative block overflow-hidden rounded-xl",
            overlay ? "cursor-zoom-in" : "cursor-pointer",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
            className,
          )}
        >
          {children}
          {overlay && (
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <ZoomIn className="h-6 w-6 text-white drop-shadow" aria-hidden="true" />
            </span>
          )}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 p-5 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-10">
          <img
            src={GRAND_PRIZE.image}
            alt={GRAND_PRIZE.alt}
            className="max-h-[72vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />

          <div className="max-w-lg text-center">
            <Dialog.Title className="mb-1.5 text-xl font-black text-white sm:text-2xl">
              {GRAND_PRIZE.name}
            </Dialog.Title>
            <Dialog.Description className="text-sm leading-relaxed text-white/70">
              {GRAND_PRIZE.detail}
            </Dialog.Description>
          </div>

          <Dialog.Close
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-6 sm:top-6"
            aria-label="Close"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
