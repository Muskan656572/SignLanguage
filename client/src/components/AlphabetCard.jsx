import React from 'react'

const makePlaceholder = (text) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" rx="12" fill="#f0fdfa"/><text x="100" y="120" font-size="64" font-family="Inter,Arial,sans-serif" fill="#0f766e" text-anchor="middle" font-weight="700">${text}</text></svg>`
  )}`

function AlphabetCard({ letter, image }) {
  return (
    <div className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-slate-100 hover:border-brand-200 hover:-translate-y-1">
      <div className="relative p-4 pb-2">
        <span className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center shadow-sm z-10">
          {letter}
        </span>
        <img
          src={image}
          alt={`Sign language letter ${letter}`}
          className="w-full h-36 object-contain rounded-xl bg-slate-50 p-2"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = makePlaceholder(letter)
          }}
        />
      </div>
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white text-center py-2.5 font-semibold text-sm tracking-wide">
        {letter}
      </div>
    </div>
  )
}

export default AlphabetCard
