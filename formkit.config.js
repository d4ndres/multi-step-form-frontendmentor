import { generateClasses } from '@formkit/themes'

export default {
    config: {
      classes: generateClasses({
        submit: {
          wrapper: 'mysubmit-wrapper',
          input: 'mysubmit-input',
          outer: 'mysubmit-outer'
        }
      })
    }
  }