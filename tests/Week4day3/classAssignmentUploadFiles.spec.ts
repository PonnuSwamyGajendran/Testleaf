// Upload multiple files
/*
Syntax: (when we have <input type="file">)
1. Relative path
fileuploadreference.setInputFiles('file path')

2. Absolute path
fileuploadreference.setInputFiles([path.join('file1'),path.join('file2')])
*/

import {test} from '@playwright/test'
import path from 'path'

test('Upload multiple files using <input type="file"> using Relative path', async({page}) => {
    await page.goto('https://leafground.com/file.xhtml')
    let fileuploadrefer = page.locator(`//input[@type='file']`).last()
    await fileuploadrefer.setInputFiles(['Utils/image1.png','Utils/image2.png']) // pass multiple files in array
})


test('Upload files using <input type="file" using absolute path>', async({page}) => {
    await page.goto('https://leafground.com/file.xhtml')
    let fileuploadrefer1 = page.locator(`//input[@type='file']`).last()
    fileuploadrefer1.setInputFiles([path.join(__dirname,'../../Utils/image1.png'), path.join(__dirname,'../../Utils/image2.png')])
    await page.getByRole('button', {name: 'Cancel', exact:true}).isVisible({timeout: 2000})
})