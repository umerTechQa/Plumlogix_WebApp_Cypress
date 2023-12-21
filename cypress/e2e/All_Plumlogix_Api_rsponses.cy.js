
describe('Capture All link display on website: Api Requests',()=>{
    it('capture links',()=>{
        cy.visit('https://plumlogix.com/')
        cy.get("a").each(page => {
            const link = page.prop('href')
            cy.request({
              url: link,
              failOnStatusCode: false  // allow good and bad response to pass into then
            }).then(response => {
              Cypress.log({
                name: link,
                message: response.status
              })
            })
          })
    })
})