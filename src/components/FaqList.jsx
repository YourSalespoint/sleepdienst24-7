'use client'

import { useState } from 'react'

export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <div className="faq-question" onClick={() => toggle(i)}>
            {item.question}
            <span className="arrow">&#9662;</span>
          </div>
          <div className="faq-answer">{item.answer}</div>
        </div>
      ))}
    </div>
  )
}
