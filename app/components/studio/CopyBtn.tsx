'use client'

export default function CopyBtn({
  text,
  label = "Copy",
}: {
  text?: string
  label?: string
}) {
  if (!text) return null

  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(text)}
      className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition"
    >
      {label}
    </button>
  )
}
