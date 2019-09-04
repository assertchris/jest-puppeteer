describe("Google", () => {
    beforeAll(async () => {
        await page.goto("https://google.com")
    })

    it("should have the right title", async () => {
        await expect(page.title()).resolves.toMatch("Google")
    })

    it("should have a submit button with the right value", async () => {
        const value = await page.evaluate(function() {
            const input = document.querySelector("input[type='submit']")

            if (input) {
                return input.value
            }

            return undefined
        })

        expect(value).toBe("Google Search")
    })
})
