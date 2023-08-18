sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'kontkprodns/jetfiori1/test/integration/FirstJourney',
		'kontkprodns/jetfiori1/test/integration/pages/ProductsList',
		'kontkprodns/jetfiori1/test/integration/pages/ProductsObjectPage',
		'kontkprodns/jetfiori1/test/integration/pages/Products_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, Products_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('kontkprodns/jetfiori1') + '/index.html'
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