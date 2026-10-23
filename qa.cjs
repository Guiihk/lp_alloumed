const {chromium}=require('C:/Users/guilh/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 try{
  const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const viewport of [{width:1440,height:900},{width:1366,height:768},{width:390,height:844},{width:320,height:740}]){
   await page.setViewportSize(viewport);await page.goto('http://127.0.0.1:4186/?utm_source=qa&utm_medium=preview&utm_campaign=equilibrio&ref=qa-test',{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(1400);
   assert.equal(await page.title(),'Programa Equilíbrio Quinzenal | Alloumed');
   assert(await page.locator('h1').isVisible());
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Horizontal overflow at '+viewport.width);
   assert(await page.evaluate(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0)),'Broken images');
   assert.equal(await page.locator('details').count(),7);
   const links=await page.locator('.button').evaluateAll(items=>items.map(item=>item.href));assert.equal(links.length,3);
   for(const href of links){const url=new URL(href);assert.equal(url.origin+url.pathname,'https://app.alloumed.com.br/planos');assert.equal(url.searchParams.get('utm_source'),'qa');assert.equal(url.searchParams.get('utm_medium'),'preview');assert.equal(url.searchParams.get('utm_campaign'),'equilibrio');assert.equal(url.searchParams.get('ref'),'qa-test');}
   assert(!(await page.locator('body').innerText()).includes('—'));
   await page.locator('details').nth(1).locator('summary').click();assert(await page.locator('details').nth(1).evaluate(e=>e.open));
   if(viewport.width>=1000){const cta=await page.locator('.hero-actions .button').boundingBox();assert(cta.y+cta.height<viewport.height,'CTA outside initial viewport');}
   await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(800);
   await page.screenshot({path:'qa-'+viewport.width+'.png'});
   console.log('PASS: '+viewport.width+'px, images, overflow, CTA, FAQ, plan redirect');
  }
  await page.emulateMedia({reducedMotion:'reduce'});await page.goto('http://127.0.0.1:4186/?utm_source=qa',{waitUntil:'networkidle'});assert.equal(await page.locator('.hero-copy').evaluate(e=>getComputedStyle(e).opacity),'1');assert.deepEqual(errors,[]);
  await page.setViewportSize({width:1440,height:900});await page.screenshot({path:'qa-full.png',fullPage:true});console.log('PASS: reduced motion and no JS errors');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
