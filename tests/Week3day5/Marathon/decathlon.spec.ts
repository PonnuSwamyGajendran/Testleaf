import {test,expect} from 'playwright/test'

test('Decathlon Shopping - e2e', async({page}) => {
    await page.goto('https://www.decathlon.in/')
    const searchbox =  page.getByRole('searchbox', {exact: true})
    await searchbox.click()
    await searchbox.fill('Shoes')
    await page.waitForTimeout(2000) 
    const searchSuggestions = page.locator(`//div[contains(@class,'overflow-ellipsis') and contains(@class,'whitespace-nowrap')]`)
    const count = await searchSuggestions.count()
    console.log(count)
    for(let i=0; i<count; i++) {
        let values = await searchSuggestions.nth(i).innerText()
        console.log(values)
        if(values.trim() === 'Trekking Shoes'){
            await searchSuggestions.nth(i).click()
            let pageTitle = await page.title()
            let pageURL = page.url()
            console.log(pageTitle)
            console.log(pageURL)
            expect(pageURL).toContain('trekking')
            break
        }
    }
    const elements = page.locator(`(//div[contains(@data-test-id, 'container-13')]/div)`)
    const elementCount = await elements.count()
    console.log(elementCount)
    for(let i=0;i<elementCount;i++){
        const filters = await elements.nth(i).innerText()
        console.log(filters)
        
        if(filters==='Gender') {
            await elements.nth(i).click()
            const allGenders = page.locator(`//label[contains(@data-test-id,'filter-item')]/span`)
            const allGenderCount = await allGenders.count()
            console.log(allGenderCount)
                for(let i=0; i<allGenderCount; i++) {
                    const text = await allGenders.nth(i).innerText()
                    console.log(text)
                    if(text==='Unisex'){
                        await allGenders.nth(i).click()
                        // const pageTitleNew = await page.title()
                        // await page.waitForURL('?inStock')
                        // const genderURL = page.url()
                        // console.log(pageTitleNew)
                        // console.log(genderURL)
                        // expect(genderURL).toContain('Women')
                        break
                    }
                }
        }
        if(filters==='Size') {
            await elements.nth(i).click()
            await page.getByText('No size').first().click()
        }
    }
    await page.getByText(`Most relevant`).first().click()
    await page.getByText('Highest discount ').first().click()
    const productName = await page.locator(`//div[@data-test-id='product-card:product-card:title']`).first().innerText()
    console.log(productName)
    await page.getByRole('button', {name: 'Add to cart', exact: true}).first().click()
    const cartbutton = page.locator(`//span[contains(@data-test-id,'cart-count')]`)
    let cartCount = await cartbutton.innerText()
    console.log(cartCount)
    expect(cartCount,'1')
    await cartbutton.click()
    const cartURL = page.url()
    console.log(cartURL)
    expect(cartURL).toContain('cart')
    const actualCartProductName = await page.locator(`//div[@data-test-id='product-info']`).innerText()
    console.log(actualCartProductName)
    const cleanedCartProductName = actualCartProductName
        .replace(/\n/g, " ")
        .replace(/\|/g, "")
        .replace(/\s+/g, " ")
        .trim();
    console.log(cleanedCartProductName)
    expect(cleanedCartProductName).toBe(productName)
    let cartProductPrice = await page.locator(`//span[@data-test-id='cart:product-selling-price']`).innerText()
    console.log(cartProductPrice)
    let totalCartPrice = await page.locator(`//div[contains(@data-test-id,'total-cart-value')]`).innerText()
    console.log(totalCartPrice)
    expect(cartProductPrice, totalCartPrice)
})