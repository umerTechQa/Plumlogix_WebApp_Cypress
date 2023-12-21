


    describe('testSuite: Test the Plumlogix About Us page',{
        viewportHeight: 1200,
        viewportWidth: 2000,
      }, () => {
        beforeEach(()=>{
    
            cy.visit('https://plumlogix.com/')
            })
    it('Plumlogix_About-Us',()=>{
        
        cy.get('#menu-item-5976').click()
        cy.scrollTo(0, 1000)
    })
    it('partner page',()=>{
         //partner page
         cy.screenshot()
          cy.get('#menu-item-13482 > a').should('contains.text','Our Partners').click()
          cy.go(-1)
         
    })
    
          it('Salesforce Managed Services',()=>{
            
        
          cy.get('#menu-item-13484 > a').should('contains.text','Salesforce Managed Services').click()
          cy.screenshot()
          //to go back navigation
            cy.go('back')
           })
           it('what client said about plumlogix',()=>{
            cy.get('div[class="n2-ss-layer n2-ow n-uc-5xw8K8UYei2W"] p:nth-child(1)').should('contains.text','The Plumlogix team was great to work with in helping us migrate a significant part of our managed package to lightning design and components. We would highly recommend this team if you are looking for professional services around salesforce implementation and customization. They know what they are doing and we will be using them again in our various development projects.')
           })
           it('verify Devop solution',()=>{
            cy.get('#menu-item-13483 > a').should('contains.text','DevOps Solution')
           })
        })
      
        