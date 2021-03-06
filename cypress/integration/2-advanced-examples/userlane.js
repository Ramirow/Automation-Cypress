describe('Userlane Automation', () => {
  it('Verify The page contains Element and click',() => {
    cy.visit('https://www.userlane.com/careers/')
    
    cy.get('.job-title').each(($el, index, $list) => {
      let result = $el.children().first()[0].innerHTML.includes("QA");
      if (result) {
        cy.wrap($el).invoke('removeAttr','target') .click()
      }  
    }) 
       
  }) 
    it('Verify clicking the Apply Button',() => {
      cy.get('div .postings-btn-wrapper').children().first().click()         
  }) 
const filePath = '../fixtures/Resume.pdf'
const obj = new Map()
obj.set("Full name✱","Rami")
  obj.set("Email✱","123@gmail.com")
  obj.set("Phone ✱","00988746583")
  obj.set("Current company ","SAP")
  obj.set("LinkedIn URL","linkedIn/Rami") 
  obj.set("Twitter URL","Twitter/Rami")
  obj.set("GitHub URL","GitHub/Rami")
  obj.set("Portfolio URL","Portfolio/Rami")
  obj.set("Userlane GmbH","Userlane")
  obj.set("When is your earliest possible start date?✱","01/01/2022")
  obj.set("Salary expectation","55000 Euros/year")
  

it('Fill the fields',() => {
  cy.get('.application-question').each(($el, index, $list) => {
    let label = $el.find('div.application-label');
    
    if(label.text().includes('Resume'))    
      cy.wrap($el).get("div .application-field > a").children("input").attachFile(filePath)
    let str = label.text()
    console.log(str)
    if (obj.has(str))
        cy.wrap($el).type(obj.get(str))
        
    

    if(label.text().includes("If you don't live in/nearby Munich, are you open to reloaction?"))    
      cy.wrap($el).get('[type="radio"]').first().check()

    })
    cy.get('ul > li').get('[type="checkbox"]').click()  
    cy.wait(60000)
    cy.get('button[type=submit]').click() 
    cy.intercept('https://ec.walkme.com/event/tell').as('verifyResp')     
    cy.wait('@verifyResp').its('response.statusCode').should('eq', 200)

    

}) 
    it('Submission Succeeded',() => {
      cy.contains('Application submitted!')
      })
})
