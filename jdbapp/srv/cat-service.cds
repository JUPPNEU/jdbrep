using kont.officesupplies as officesupplies from '../db/schema';

service CatalogService {
 //@odata.draft.enabled : false
 entity Products as projection on officesupplies.Products;
 entity Suppliers as projection on officesupplies.Suppliers;
};