import fs from 'node:fs/promises'
import path from 'node:path'
import React from 'react'

import { INSIGHTS } from './insights-data'

const INSIGHTS_DIR = path.join(process.cwd(), 'content', 'insights')

const bodyStyle: React.CSSProperties = {
  font: '400 17px/1.75 var(--font-ibm-plex-sans),sans-serif',
  color: '#4a5160',
}

function parseInline(text: string): React.ReactNode[] {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g)

  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={`${part}-${index}`}
          style={{
            background: 'rgba(20,24,36,.06)',
            borderRadius: '4px',
            padding: '2px 6px',
            font: '400 0.92em var(--font-ibm-plex-mono),monospace',
            color: '#0f1420',
          }}
        >
          {part.slice(1, -1)}
        </code>
      )
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${part}-${index}`} style={{ color: '#0f1420', fontWeight: 600 }}>
          {part.slice(2, -2)}
        </strong>
      )
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>
    }

    return part
  })
}

function toParagraph(children: string, key: string) {
  return (
    <p key={key} style={{ margin: '0 0 22px', ...bodyStyle }}>
      {parseInline(children)}
    </p>
  )
}

export function getInsightBySlug(slug: string) {
  return INSIGHTS.find((insight) => insight.slug === slug) ?? null
}

export function getAllInsights() {
  return [...INSIGHTS]
}

export async function getInsightMarkdown(slug: string) {
  const insight = getInsightBySlug(slug)

  if (!insight) return null

  const markdown = await fs.readFile(path.join(INSIGHTS_DIR, insight.fileName), 'utf8')
  return { insight, markdown }
}

export function renderMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const nodes: React.ReactNode[] = []
  let paragraphBuffer: string[] = []
  let listItems: string[] = []
  let blockquoteBuffer: string[] = []

  const flushParagraph = (key: string) => {
    if (!paragraphBuffer.length) return
    nodes.push(toParagraph(paragraphBuffer.join(' '), key))
    paragraphBuffer = []
  }

  const flushList = (key: string) => {
    if (!listItems.length) return
    nodes.push(
      <ul key={key} style={{ margin: '0 0 26px', paddingLeft: '22px', ...bodyStyle }}>
        {listItems.map((item, index) => (
          <li key={`${key}-${index}`} style={{ marginBottom: '8px' }}>
            {parseInline(item)}
          </li>
        ))}
      </ul>,
    )
    listItems = []
  }

  const flushBlockquote = (key: string) => {
    if (!blockquoteBuffer.length) return
    nodes.push(
      <blockquote
        key={key}
        style={{
          margin: '0 0 26px',
          borderLeft: '3px solid #243bc4',
          background: 'rgba(36,59,196,.05)',
          borderRadius: '0 10px 10px 0',
          padding: '16px 20px',
          font: '500 18px/1.6 var(--font-ibm-plex-sans),sans-serif',
          color: '#0f1420',
        }}
      >
        <p style={{ margin: 0 }}>{parseInline(blockquoteBuffer.join(' '))}</p>
      </blockquote>,
    )
    blockquoteBuffer = []
  }

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim()

    if (!line) {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      flushBlockquote(`quote-${index}`)
      return
    }

    if (line === '---') {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      flushBlockquote(`quote-${index}`)
      nodes.push(
        <hr key={`hr-${index}`} style={{ margin: '40px 0', border: 'none', borderTop: '1px solid rgba(20,24,36,.1)' }} />,
      )
      return
    }

    if (line.startsWith('# ')) {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      flushBlockquote(`quote-${index}`)
      nodes.push(
        <h2
          key={`h1-${index}`}
          style={{
            margin: '44px 0 18px',
            font: '600 30px/1.2 var(--font-space-grotesk),sans-serif',
            letterSpacing: '-.02em',
            color: '#0f1420',
          }}
        >
          {parseInline(line.slice(2))}
        </h2>,
      )
      return
    }

    if (line.startsWith('## ')) {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      flushBlockquote(`quote-${index}`)
      nodes.push(
        <h3
          key={`h2-${index}`}
          style={{
            margin: '36px 0 14px',
            font: '600 22px/1.3 var(--font-space-grotesk),sans-serif',
            letterSpacing: '-.01em',
            color: '#0f1420',
          }}
        >
          {parseInline(line.slice(3))}
        </h3>,
      )
      return
    }

    if (line.startsWith('### ')) {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      flushBlockquote(`quote-${index}`)
      nodes.push(
        <h4
          key={`h3-${index}`}
          style={{
            margin: '28px 0 12px',
            font: '600 18px var(--font-space-grotesk),sans-serif',
            color: '#0f1420',
          }}
        >
          {parseInline(line.slice(4))}
        </h4>,
      )
      return
    }

    if (line.startsWith('> ')) {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      blockquoteBuffer.push(line.slice(2))
      return
    }

    if (line.startsWith('* ') || line.startsWith('- ')) {
      flushParagraph(`p-${index}`)
      flushBlockquote(`quote-${index}`)
      listItems.push(line.slice(2))
      return
    }

    flushList(`ul-${index}`)
    flushBlockquote(`quote-${index}`)
    paragraphBuffer.push(line)
  })

  flushParagraph('p-end')
  flushList('ul-end')
  flushBlockquote('quote-end')

  return nodes
}
