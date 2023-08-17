using kont.officesupplies as officesupplies from '../db/schema';

service CatalogService {
 @odata.draft.enabled :true 
 entity Suppliers @(restrict : [
 { grant : [ 'READ' ], to : [ 'Vendor' ] },
 { grant : [ '*' ], to : [ 'ProcurementManager' ] }
 ])as projection on officesupplies.Suppliers;
 entity Products @(restrict : [
 { grant : [ 'READ' ], to : [ 'Vendor' ] },
 { grant : [ '*' ], to : [ 'ProcurementManager' ] } 
 ])as projection on officesupplies.Products;

};