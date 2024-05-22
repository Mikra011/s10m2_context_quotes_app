import React, { createContext, useReducer, useContext } from 'react'
import { QuotesContext } from '../context/quotesContext'

export const FormContext = createContext()

const CHANGE_INPUT = 'CHANGE_INPUT'
const RESET_FORM = 'RESET_FORM'

const initialState = {
  authorName: '',
  quoteText: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      const { name, value } = action.payload
      return { ...state, [name]: value }
    }
    case RESET_FORM:
      return initialState
    default:
      return state
  }
}

export function FormProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { createQuote } = useContext(QuotesContext)

  const onChange = (name, value) => {
    dispatch({ type: CHANGE_INPUT, payload: { name, value } })
  }

  const resetForm = () => {
    dispatch({ type: RESET_FORM })
  }

  const onNewQuote = evt => {
    evt.preventDefault()
    const { authorName, quoteText } = state
    createQuote({ authorName, quoteText })
    resetForm()
  }

  const value = {
    formState: state,
    onChange,
    resetForm,
    onNewQuote
  }

  return (
    <FormContext.Provider value={value}>
      {props.children}
    </FormContext.Provider>
  )
}
