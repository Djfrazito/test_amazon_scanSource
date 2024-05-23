import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import orderPage from '../pages/orderPage';
import amb from '../../fixtures/environments.json'
const env = Cypress.env('environment')

Given(/^Faço o login no site "([^"]*)"$/, (url) => {
    orderPage.siteLogin(amb[env].loginUser, amb[env].password, amb[env].baseUrl)
});


Given(/^adiciono o produto "([^"]*)" ao carrinho$/, (sku) => {
	orderPage.searchSku(sku)
    orderPage.clickSku(sku)
    orderPage.clickAddToCart()
    orderPage.goCart()
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
