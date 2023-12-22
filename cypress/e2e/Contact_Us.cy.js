describe('Contact Us page',{
    viewportHeight: 1500,
    viewportWidth: 2000,
  },()=>{

    beforeEach(()=>{
        cy.visit('https://plumlogix.com/')
      })
    
    it('Contact-us',()=>{
    cy.get('#menu-item-13107').click()
    })
    it('lets talk',()=>{
        cy.get('#wpforms-12898-field_1').click()
        cy.get('#wpforms-12898-field_1').type('Mike Smith')
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/div/div/section[16]/div/div[1]/div/div/div/div/form/div[1]/div[2]/input]').type('o.ejaz@plumlogix.com')
        //cy.xpath('//input[@id="wpforms-12898-field_2"]').type('')
        // cy.get('#wpforms-12898-field_3').type('111111111')
        // cy.get('#wpforms-12898-field_4').type('Fintect Services')
    })
    
    })
    // it('Contact Us',()=>{
        
    //     cy.get('#wpforms-submit-12898').click()
    //     cy.get('#wpforms-12898-field_1-error').should('contains.text','This field is required.')

        
    // 