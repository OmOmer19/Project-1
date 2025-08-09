//predefining some list of vendors
const vendors = [
    {
        id:'v1',
        name:'ShopEase',
        email:'shop@vendor.com'
    },
    {
        id:'v2',
        name:'MegaDeals',
        email:'mega@vendor.com'
    },
    {
        id:'v3',
        name:'EliteMart',
        email:'elite@vendor.com'
    },
    {
        id:'v4',
        name:'GlobalBazaar',
        email:'global@vendor.com'
    }
]

// this logic will assign vendors round robin to products

 const mapVendorsToProducts = (products) =>{
    return products.map((product,index) => {
        const vendor = vendors[index % vendors.length]
        return {...product,vendor}
    })
}
export default mapVendorsToProducts