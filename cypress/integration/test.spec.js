/// <reference types="cypress"/>
import '../support/commands'
beforeEach(()=>{
    cy.visit('/')
})

it('should login to the website', ()=> {
    
    

    //cy.login('Admin', 'admin123')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').contains('Dashboard')
    
    cy.contains('Invalid credentials').should('not.exist')

    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})


it('should not login to the website', ()=> {
    


   // cy.login('Admin', 'admin')
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234')
    cy.get('.oxd-button').click()

    cy.contains('Invalid credentials').should('exist')

    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
