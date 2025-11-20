export type SavedCampaign = { id: string; createdAt: number; payload: any }
const KEY = 'stm_campaigns_v1'

function read(): SavedCampaign[] {
  if (typeof window === 'undefined') return []
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}
function write(all: SavedCampaign[]) { localStorage.setItem(KEY, JSON.stringify(all)) }

export function listCampaigns() { return read().sort((a,b)=>b.createdAt-a.createdAt) }
export function saveCampaign(c: any) {
  const all = read()
  const id = c.id || crypto.randomUUID()
  const item: SavedCampaign = { id, createdAt: Date.now(), payload: { ...c, id } }
  write([item, ...all.filter(x=>x.id!==id)])
  return id
}
export function getCampaign(id: string) { return read().find(x=>x.id===id)?.payload || null }
export function deleteCampaign(id: string) { write(read().filter(x=>x.id!==id)) }
export function importCampaign(obj: any) { return saveCampaign(obj) }
