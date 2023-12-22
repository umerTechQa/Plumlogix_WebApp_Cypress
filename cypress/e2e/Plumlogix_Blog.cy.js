
describe('Plumlogx Blog',{
    viewportHeight: 1200,
    viewportWidth: 2000,
  }, () => {
    before(()=>{
        cy.visit('https://plumlogix.com/')
     })
     it('Blog',()=>{
        cy.xpath('//a[href="https://plumlogix.com/blog/"]').click()
        cy.get('div[class="stm_loop stm_loop__grid"] div:nth-child(1) div:nth-child(1) div:nth-child(2) h5:nth-child(1) a:nth-child(1)').should('contains.text','Maximizing Success with Salesforce Government Cloud: Your Ultimate Guide')
     })
  
    })
   
      
    
    
