import { useState } from 'react'

import { FeedbackTypeStep, FeedbackType } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

export const WidgetForm = (): JSX.Element => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = (): void => {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 text-white p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {feedbackType ? (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          ) : (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito por{' '}
        <a
          className="underline underline-offset-2"
          href="http://github.com/vitorserrano"
        >
          @vitorserrano
        </a>
      </footer>
    </div>
  )
}
