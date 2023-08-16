sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'jdb/officesupplies/josfiori/test/integration/FirstJourney',
		'jdb/officesupplies/josfiori/test/integration/pages/ProductsList',
		'jdb/officesupplies/josfiori/test/integration/pages/ProductsObjectPage',
		'jdb/officesupplies/josfiori/test/integration/pages/Products_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, Products_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('jdb/officesupplies/josfiori') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage,
					onTheProducts_textsObjectPage: Products_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);