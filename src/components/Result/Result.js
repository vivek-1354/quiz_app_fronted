import React from 'react'
import { useQuiz } from '../../context'

export const Result = () => {
  const { score } = useQuiz()
  return (
    <h1>
      Your score is {score}.
    </h1>
  )
}

