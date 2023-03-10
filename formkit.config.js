import { generateClasses } from '@formkit/themes'
import { createAutoAnimatePlugin } from '@formkit/addons'

export default {
    // plugins: [ createAutoAnimatePlugin()],
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