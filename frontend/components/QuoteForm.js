import React, { useContext } from 'react'
import { FormContext } from '../context/fromContext'

export default function QuoteForm() {
  const { formState, onChange, onNewQuote } = useContext(FormContext)
  const { authorName, quoteText } = formState

  return (
    <form id="quoteForm" onSubmit={onNewQuote}>
      <h3>New Quote Form</h3>
      <label>
        <span>Author:</span>
        <input
          type="text"
          name="authorName"
          placeholder="type author name"
          onChange={e => onChange('authorName', e.target.value)}
          value={authorName}
        />
      </label>
      <label>
        <span>Quote text:</span>
        <textarea
          type="text"
          name="quoteText"
          placeholder="type quote"
          onChange={e => onChange('quoteText', e.target.value)}
          value={quoteText}
        />
      </label>
      <label>
        <span>Create quote:</span>
        <button role="submit" disabled={!authorName.trim() || !quoteText.trim()}>
          DO IT!
        </button>
      </label>
    </form>
  )
}