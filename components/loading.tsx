

export function Spiner() {
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-screen ">
        <div className="relative w-16 h-16">
          {/* Outer rotating ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin"
            style={{ animationDuration: "3s" }}
          />

          {/* Middle rotating ring (opposite direction) */}
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-primary/60 border-l-primary/60 animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          />

          {/* Inner pulsing circle */}
          <div className="absolute inset-4 rounded-full bg-primary/80 dark:bg-primary animate-pulse" />
        </div>
      </div>
    )
  

  return null
}
