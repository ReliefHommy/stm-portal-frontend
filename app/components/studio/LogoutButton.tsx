'use client'
export function LogoutButton() {
  return (
    <button
      onClick={async ()=>{ await fetch('/api/auth/logout',{method:'POST'}); location.href='/' }}
      className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300"
    >
      Logout
    </button>
  )
}
