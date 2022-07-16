describe("App E2E", () => {
    // cy.pause();
    it("should have 2 pages for class-app", () => {
        cy.visit("/class/home");

        cy.visit("/class/settings");
    });

    it("should have 2 pages for functional-app", () => {
        cy.visit("/functional/home");

        cy.visit("/functional/settings");
    });

    it("should have a input with initial value", () => {
        cy.visit("/functional/home");

        cy.get("input").should("have.value", "0");

        cy.visit("/class/home");

        cy.get("input").should("have.value", "0");
    });

    it("should have all key buttons", () => {
        cy.get("button").should((button) => {
            // should have found 20 elements
            expect(button).to.have.length(20);
        });
    });

    it("div - should return 0.333", () => {
        cy.visit("/functional/home");

        cy.get("button[data-value='1']").should("have.text", "1").click();

        cy.get("button[data-value='/']").should("have.text", "/").click();

        cy.get("button[data-value='3']").should("have.text", "3").click();

        cy.get("button[data-value='=']").should("have.text", "=").click();

        cy.get("input").should("have.value", "0.333");
    });

    it("minus - should return -20", () => {
        cy.visit("/functional/home");

        cy.get("button[data-value='1']").should("have.text", "1").click();
        cy.get("button[data-value='0']").should("have.text", "0").click();
        cy.get("button[data-value='0']").should("have.text", "0").click();

        cy.get("button[data-value='-']").should("have.text", "-").click();

        cy.get("button[data-value='1']").should("have.text", "1").click();
        cy.get("button[data-value='2']").should("have.text", "2").click();
        cy.get("button[data-value='0']").should("have.text", "0").click();

        cy.get("button[data-value='=']").should("have.text", "=").click();

        cy.get("input").should("have.value", "-20");
    });

    it("pluse - should return 25 and check hitory component", () => {
        cy.visit("/functional/home");

        cy.get("button[data-value='2']").should("have.text", "2").click();
        cy.get("button[data-value='0']").should("have.text", "0").click();

        cy.get("button[data-value='+']").should("have.text", "+").click();

        cy.get("button[data-value='5']").should("have.text", "5").click();

        cy.get("button[data-value='=']").should("have.text", "=").click();

        cy.get("input").should("have.value", "25");
        cy.get("div[data-name='history']")
            .find("p")
            .last()
            .should("have.text", "20 + 5 = 25");
    });

    it("mul - should return 144 and then div by 12 should return 12", () => {
        cy.visit("/functional/home");

        cy.get("button[data-value='1']").should("have.text", "1").click();
        cy.get("button[data-value='2']").should("have.text", "2").click();

        cy.get("button[data-value='*']").should("have.text", "*").click();

        cy.get("button[data-value='1']").should("have.text", "1").click();
        cy.get("button[data-value='2']").should("have.text", "2").click();

        cy.get("button[data-value='=']").should("have.text", "=").click();

        cy.get("input").should("have.value", "144");

        cy.get("button[data-value='/']").should("have.text", "/").click();

        cy.get("button[data-value='1']").should("have.text", "1").click();
        cy.get("button[data-value='2']").should("have.text", "2").click();

        cy.get("button[data-value='=']").should("have.text", "=").click();

        cy.get("input").should("have.value", "12");
    });

    it("c and ce byttins", () => {
        cy.visit("/functional/home");

        cy.get("button[data-value='1']").should("have.text", "1").click();
        cy.get("button[data-value='0']").should("have.text", "0").click();

        cy.get("button[data-value='+']").should("have.text", "+").click();

        cy.get("button[data-value='2']").should("have.text", "2").click();

        cy.get("button[data-value='=']").should("have.text", "=").click();

        cy.get("input").should("have.value", "12");

        cy.get("button[data-value='CE']").should("have.text", "CE").click();

        cy.get("input").should("have.value", "1");

        cy.get("button[data-value='C']").should("have.text", "C").click();

        cy.get("input").should("have.value", "0");

        cy.get("span[data-name='approved expression']").should(
            "have.text",
            "0",
        );
    });

    // theme toggler

    it("should have theme toggler and contain 2 theme: light and dark", () => {
        cy.visit("/functional/settings");
        cy.get("option").should((option) => {
            // should have found 2 elements
            expect(option).to.have.length(2);
            expect(option.eq(0)).to.contain("Light Theme");
            expect(option.eq(1)).to.contain("Dark Theme");
        });
        cy.get("select").select("light");

        cy.get("div[data-name='app']").should(
            "have.css",
            "background-color",
            "rgb(255, 255, 255)",
        );

        cy.get("select").select("dark");

        cy.get("div[data-name='app']").should(
            "have.css",
            "background-color",
            "rgb(31, 31, 31)",
        );
    });

    //  Реализовать e2e тестирование c полным покрытием функционала приложения:
    // + Арифметические операции.
    // + Модуль истории.
    // + Модуль дисплея.
    // + Модуль клавиатуры.
    // + Модуль навигации.
    // + Модуль смены темы и т.д.
});
