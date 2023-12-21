// Cypress.once('uncaught:exception', (err, runnable) => {
//   return false;
// })
describe('Plumlogx home page',{
  viewportHeight: 1200,
  viewportWidth: 2000,
}, () => {
  before(()=>{
     console.log("I am Testing Plumlogix website end 2 end!");
   })

  beforeEach(()=>{
    
  cy.visit('https://plumlogix.com/')
  })
    
  it('Contact & Email_verification', () => {
    // cy.visit('https://plumlogix.com/')
    //cy.visit('https://plumlogix.com/')
    cy.contains('contactus@plumlogix.com').should('have.text','contactus@plumlogix.com')
    console.log('Pass Email verification!')
    cy.contains('(888) 318-8883').should('have.text','(888) 318-8883')
    console.log('Contatc number verified!')
  })
  it('Social_Media',()=>{

  
      cy.xpath('//a[@href="https://twitter.com/plumlogix"]').find('i').should('have.class','fa fa-twitter')
      cy.xpath('//a[@href="https://www.linkedin.com/company/plumlogix/"]').find('i').should('have.class','fa fa-linkedin')

      cy.xpath('//a[@href="https://www.facebook.com/plumlogix/"]').find('i').should('have.class','fa fa-facebook')
      
      cy.xpath('//a[@href="https://www.instagram.com/plumlogix.careers/"]').find('i').should('have.class','fa fa-instagram')
  
})
  })
