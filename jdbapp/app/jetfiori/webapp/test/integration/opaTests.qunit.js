sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'kont/officesupplies/jetfiori/test/integration/FirstJourney',
		'kont/officesupplies/jetfiori/test/integration/pages/ProductsList',
		'kont/officesupplies/jetfiori/test/integration/pages/ProductsObjectPage',
		'kont/officesupplies/jetfiori/test/integration/pages/Products_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, Products_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('kont/officesupplies/jetfiori') + '/index.html'
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