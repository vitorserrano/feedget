import bugImageUrl from 'src/assets/bug.png'
import IdeaImageUrl from 'src/assets/idea.png'
import ThoughtImageUrl from 'src/assets/thought.png'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: bugImageUrl,
  },
  IDEA: {
    title: 'Ideia',
    image: IdeaImageUrl,
  },
  OTHER: {
    title: 'Outro',
    image: ThoughtImageUrl,
  },
}
