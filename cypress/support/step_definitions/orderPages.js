import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import orderPage from '../pages/orderPage';

Given(/^Faço o login no site "([^"]*)"$/, (url) => {
    orderPage.siteLogin(Cypress.env('loginUser'), Cypress.env('password'), Cypress.env('baseUrl'))
});


Given(/^adiciono o produto "([^"]*)" ao carrinho$/, (sku) => {
	orderPage.searchSku(sku)
    orderPage.clickSku(sku)
    orderPage.clickAddToCart()
    orderPage.goCart()
});

Given(/^acesso o site da amazon$/, () => {
	orderPage.goVisit(Cypress.env('baseUrl'))
});


When(/^fecho o pedido com pagamento via boleto bancário$/, () => {
	orderPage.confirmAdressClick()
    orderPage.selectBoletoPayment()
    orderPage.submitPayment()
    orderPage.closeOrder()
});

Then(/^pedido é finalizado com sucesso$/, () => {
	orderPage.validateCloseOrder()
});
