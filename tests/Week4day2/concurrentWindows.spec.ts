import {test} from '@playwright/test'

test('Handling multiple windows using Concurrent Windows method', async({page,context}) => {
    await page.goto('https://leafground.com/window.xhtml')

    let [parentWindow] = await Promise.all([context.waitForEvent('page'), page.getByText('Open Multiple').click()])

    // [parent window] has  parent window, childW1, childW2, ....

    const count = parentWindow.context().pages() // count of an array

    //use length property to find the total number of pages
    const windowLength = count.length
    let Webtable:any
    let dashboard:any

    for(let i=0; i<windowLength; i++) {
        await page.waitForLoadState('domcontentloaded') // Recommended
        await page.waitForTimeout(5000)
        let pageTitle = await count[i].title()
        console.log(pageTitle)

        // switch to child page using title and index
        if(pageTitle === 'Web Table'){
            Webtable=count[i]
            await Webtable.getByPlaceholder('Search...').fill('India')
        } else if (pageTitle === 'Dashboard') {
            dashboard=count[i]
            await dashboard.getByLabel('E-mail Address').fill('ponsamgs@gmail.com')
        }
    }
})