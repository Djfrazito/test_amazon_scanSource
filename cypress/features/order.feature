Feature: Order

    Background: Login no site da amazon.com.br
        Given Faço o login no site "amazom.com.br"

    Scenario: Pedido de compra via Boleto bancário
        Given adiciono o produto "Tênis Nike Air Force 1'07 Masculino e Feminino" ao carrinho
        When fecho o pedido com pagamento via boleto bancário
        Then pedido é finalizado com sucesso
