import { generateClasses } from '@formkit/themes'

export default {
    config: {
      classes: generateClasses({
        submit: { // only applies to email input type
          wrapper: 'mysubmit-wrapper',
          input: 'mysubmit-input',
        }
      })
    }
  }