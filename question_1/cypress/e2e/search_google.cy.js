describe('visit and search on google', () => {

  // visit google and search bitpro
  beforeEach(() => {
    cy.visit('https://www.google.com/')

    // search on google
    cy.get('[name="q"]').focus().type('BitoPro{enter}')
  })

  // assert result have bitpro's website link
  it('Assert BitoPro title in result', () => {
    cy.get('[id="res"] [class="LC20lb MBeuO DKV0Md"]', { timeout: 5000 }).should('contain', 'BitoPro 台灣幣託交易所')
  })

  it('Assert BitoPro website url in result', () => {
    cy.get('[id="res"] a', { timeout: 5000 }).should('contain', 'https://www.bitopro.com')
  })
})