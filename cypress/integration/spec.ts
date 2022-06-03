// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

const { _ } = Cypress

const baseURL = 'https://google.com/'

const feedViews = [
  {
    testname: 'Google: No country redirect',
    url: '/ncr',
  },
  {
    testname: 'Google News, reactjs',
    url: '/search?q=reactjs&source=lnms&tbm=nws',
  },
  {
    testname: 'Google Images, bird search',
    url: '/search?q=bird&tbm=isch&source=lnms',
  },
  {
    testname: 'Google Flights',
    url: '/travel/flights',
  },
  {
    testname: 'Google Finance',
    url: '/finance/?source=lmns&hl=en',
  },
]

describe('Example Cypress TodoMVC test', () => {
  beforeEach(() => {
    cy.visit(baseURL)
    cy.wait(500)
  })

  _.each(feedViews, (page) => {
    it(`visits ${page.testname} page`, function () {
      cy.visit(baseURL + page.url)
      cy.wait(5000)
    })
  })
})
