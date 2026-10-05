import {test,expect} from '@playwright/test';
test('incomplete saved records show a warning and usable fixtures',async({page})=>{await page.addInitScript(()=>localStorage.setItem('mo-feedback-nexus-v1',JSON.stringify([{id:'F1',title:'x',accounts:[],status:'Inbox',effort:1,quote:'q'}])));await page.goto('./');await expect(page.getByRole('status')).toContainText('incompatible');await expect(page.locator('.feedback')).toHaveCount(6);});
test('cancelled reset preserves changes and confirmed reset is undoable',async({page})=>{await page.goto('./');await page.getByLabel('Review status').selectOption('Planned');await page.getByRole('button',{name:'Reset sample data'}).click();await page.getByRole('button',{name:'Cancel'}).click();await expect(page.getByLabel('Review status')).toHaveValue('Planned');await page.getByRole('button',{name:'Reset sample data'}).click();await page.getByRole('button',{name:'Reset sample data'}).last().click();await expect(page.getByLabel('Review status')).toHaveValue('Inbox');await page.getByRole('button',{name:'Undo',exact:true}).click();await expect(page.getByLabel('Review status')).toHaveValue('Planned');});


for (const invalid of ['', '   ']) {
  test(`invalid tag draft ${JSON.stringify(invalid)} preserves the saved board on reload`, async ({ page }) => {
    await page.goto('./')
    await page.getByLabel('Decision rationale').fill('Retain this review context')
    await page.getByLabel('Review status').selectOption('Planned')
    const tag = page.getByLabel('Suggested tag')
    await tag.fill(invalid)
    await expect(page.getByRole('alert')).toContainText('last saved tag and feedback remain unchanged')
    await expect(page.getByRole('button', { name: 'Accept reviewed tag', exact: true })).toBeDisabled()
    await tag.press('Tab')
    expect(await page.evaluate(() => JSON.parse(localStorage.getItem('mo-feedback-nexus-v1')!)[0].tag)).toBe('Onboarding')
    await page.reload()
    await expect(page.getByLabel('Review status')).toHaveValue('Planned')
    await expect(page.getByLabel('Decision rationale')).toHaveValue('Retain this review context')
    await expect(page.getByLabel('Suggested tag')).toHaveValue('Onboarding')
    await expect(page.getByRole('status')).not.toContainText('incompatible')
  })
}

test('a valid tag edit saves on leaving the field and requires a renewed review', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('button', { name: 'Accept reviewed tag', exact: true }).click()
  const tag = page.getByLabel('Suggested tag')
  await tag.fill('  Import recovery  ')
  await tag.press('Tab')
  await expect(tag).toHaveValue('Import recovery')
  await expect(page.getByRole('button', { name: 'Accept reviewed tag', exact: true })).toBeEnabled()
  await page.reload()
  await expect(tag).toHaveValue('Import recovery')
  await expect(page.getByRole('button', { name: 'Accept reviewed tag', exact: true })).toBeEnabled()
})
