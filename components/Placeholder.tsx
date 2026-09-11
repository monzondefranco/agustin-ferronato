type PlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Temporary visual block standing in for real photography/video.
 * Swap the parent usage for <Image>/<video> once assets are available.
 */
export default function Placeholder({ label, className }: PlaceholderProps) {
  return (
    <div className={`ph${className ? ` ${className}` : ""}`} role="img" aria-label={label}>
      {label}
    </div>
  );
}
