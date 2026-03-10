export default function NikeMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Brand mark"
    >
      <path d="M5 28C25 15 55 5 115 2C85 15 60 28 34 46C24 53 12 46 5 28Z" />
    </svg>
  );
}
