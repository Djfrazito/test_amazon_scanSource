import { orderElements } from "../elements/orderElements";

class Order {
    goVisit(url) {
        cy.visit(url)
    }

    clickMyAccount() {
        cy.get(orderElements.linkMyaccount)
            .should('be.visible')
            .click()
    }

    typeEmail(email) {
        cy.get(orderElements.inputEmail)
            .should('be.visible')
            .type(email)
        cy.get(orderElements.submitEmail)
            .should('be.visible')
            .click()
    }

    typePassword(password) {
        cy.get(orderElements.submitPassword)
            .should('be.visible')
            .type(password)
        cy.get(orderElements.submitPassword)
            .should('be.visible')
            .click()
    }

    siteLogin(email, password, url) { 
        cy.session(email, () => { //utilizando o session, para fazer o login na primeira execução. Nas demais, só vai fazer o login caso sessão não esteja mais valida
            this.goVisit(url)
            this.clickMyAccount()
            this.typeEmail(email)
            this.typePassword(password)
        })
        this.goVisit(url)
    }

    searchSku(sku) {
        cy.get(orderElements.inputSearchSku)
            .should('be.visible')
            .type(sku)
        cy.get(orderElements.buttonSubmitSearch)
            .should('be.visible')
            .click()
    }

    clickSku(sku) {
        cy.get(orderElements.divDescripitionSku)
            .contains(sku)
            .should('be.visible')
            .click()
    }

    clickAddToCart() {
        cy.get(orderElements.clickAddToCart)
            .should('be.visible')
            .click()
    }
    goCart() {
        cy.get(orderElements.goToCart)
            .should('be.visible')
            .click()
    }

    confirmAdressClick() {
        cy.get(orderElements.confirmAdress)
            .should('be.visible')
            .click()
    }

    selectBoletoPayment() {
        cy.get(orderElements.paymentBill)
            .find(orderElements.selectRadioBoleto)
            .should('be.visible')
            .click()
    }

    submitPayment() {
        cy.get(orderElements.confirmPayment)
            .should('be.visible')
            .click()
    }

    closeOrder() {
        cy.get('span')
            .contains('Chega em', { timeout: 6000 })
            .should('be.visible')

        cy.get(orderElements.buttonCloseOrder, { timeout: 6000 })
            .should('be.visible')
            .click()

        cy.get(orderElements.duplicateValidateButton, {timeout: 7000 })
            .if('visible') //verifica se foi exibida mensagem de pedido em duplicidade
            .click()
            
    }

    validateCloseOrder() {
        cy.get('h4')
            .contains('Obrigado, Seu pedido foi feito e será processado após o pagamento do Boleto')
            .should('be.visible')
    }
}

export default new Order()