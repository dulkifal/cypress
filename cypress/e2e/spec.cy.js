describe('template spec', () => {

  let data = [{"username":"0000000000","password":"000"}]
  let url = "https://portal.dhiu.in/Parent"
  
 

  data.forEach(element => {
    

  it('passes', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.visit(url)
    cy.get('#UserName').type(element["username "])
    cy.get('#Password').type(element["password "])
    cy.get('[type="submit"]').click()
    cy.get(':nth-child(11) > a').click()
    cy.get('#ExamsofClassId').select("Half Yearly Examination")
    cy.get('#SearchBtn').click()
    // got pdf save it in folder

  cy.wait(1000)



  })
})
})

