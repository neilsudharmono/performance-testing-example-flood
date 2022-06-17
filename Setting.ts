// import { step, TestSettings, By, Until, beforeAll, afterAll } from '@flood/element'

export const testSettings= {
	loopCount: 1, //infinity run
	clearCookies: false,
	waitUntil: 'visible',
	actionDelay: 1.5,
    stepDelay: 2.5
}

export const options = {
    username: 'administrator.clipspec@yopmail.com',
    password: 'Welcome1',
    loginUrl: 'https://clipspec-dev.azurefd.net/'
}

export const pageURLs = {
    dashboard: 'https://clipspec-dev.azurefd.net//#/',
    project: 'https://clipspec-dev.azurefd.net//projects#/',
    masterProduct: 'https://clipspec-dev.azurefd.net//masterproducts#/',
    productBuilderSet: 'https://clipspec-dev.azurefd.net//builderproducts#/315bbfd3-59b8-4bbb-a911-e207348dfcaf/products',
    surchargeBuilderSet:'https://clipspec-dev.azurefd.net//builderproducts#/17f2d97a-035e-4174-bde5-bb08b7cf149c/surcharges',
    business :'https://clipspec-dev.azurefd.net//businessaccounts#/',
    businessOverview : 'https://clipspec-dev.azurefd.net//businessaccounts#/25d4f4ca-32a1-43dc-9500-1c0707cc6c74',
    builder : 'https://clipspec-dev.azurefd.net//businessaccounts#/25d4f4ca-32a1-43dc-9500-1c0707cc6c74',
    builderOverview : 'https://clipspec-dev.azurefd.net//businessaccounts#/25d4f4ca-32a1-43dc-9500-1c0707cc6c74/builder/315bbfd3-59b8-4bbb-a911-e207348dfcaf',
    productDetail : 'https://clipspec-dev.azurefd.net//masterproducts#/05a3f4e5-0e18-406e-ab4f-b4e80f8690a4/ZFREMOTE',
    productBuilderDetail : 'https://clipspec-dev.azurefd.net//builderproducts#/315bbfd3-59b8-4bbb-a911-e207348dfcaf/products/1d71c598-2329-43d5-ad46-e7e25499cb01/RJ6%2F20PL',
    surcharges: 'https://clipspec-dev.azurefd.net//mastersurcharges#/',
    doLogin : 'https://clipspec-dev.azurefd.net//account/dologin',
    projectOverview: 'https://clipspec-dev.azurefd.net//projects#/projects/8b187e1e-1b56-405f-a7fb-53c8dbfa1496',
    bom: 'https://clipspec-dev.azurefd.net//billofmaterials#/bill-of-materials/8b187e1e-1b56-405f-a7fb-53c8dbfa1496',
    exportPdf: 'https://clipspec-dev.azurefd.net//billofmaterials#/pdf-export/8b187e1e-1b56-405f-a7fb-53c8dbfa1496',
    editMode:'https://clipspeccom-dev.azurewebsites.net/floorplaneditor#/consultation-mode/add0ab8e-48f8-4d0e-90f5-247eb1813244/04735b16-1f72-4590-b0bd-72da56924894'
}


export const defaultPageLoadItems = 12
export const singleElementIsAppear = 1
