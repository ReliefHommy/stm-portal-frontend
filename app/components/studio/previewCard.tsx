export function PreviewCard({ title, pillar }:{title:string; pillar:string}) {
  return (
    <div className="rounded-xl border p-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="text-xs uppercase tracking-wide text-gray-500">{pillar}</div>
      <div className="text-lg font-semibold mt-1">{title}</div>
      <div className="mt-3 text-[10px] text-gray-400">Auto-generated preview • STM Studio</div>
    </div>
  )
}
