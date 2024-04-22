import App from './App'

import * as translate from './translate'
import * as envModule from './Environment'

describe('<App />', () => {

  beforeEach(() => {
    cy.stub(translate, 'useTranslate').returns(({
      translated: 'mocked'
    }))
    cy.stub(envModule, 'Environment').returns(({
      getInit: () => 'testing'
    }))
  })
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})
