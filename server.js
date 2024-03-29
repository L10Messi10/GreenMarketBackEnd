var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('TBL_Users'); // Create a table for 'Book' with default settings
mobileApp.tables.add('TBL_Category'); // Create a table for 'Book' with default settings
mobileApp.tables.add('TBL_Units');// Create a table for 'unit table' with default settings
mobileApp.tables.add('TBL_Products');
mobileApp.tables.add('TBL_Orders');
mobileApp.tables.add('TBL_Order_Details');
mobileApp.tables.add('V_Orders');
mobileApp.tables.add('V_Confirmed_Orders');
mobileApp.tables.add('TBL_MarketStatus');
mobileApp.tables.add('V_Categories_Display');
mobileApp.tables.add('TBL_Feedback');
mobileApp.tables.add('TBL_SystemUsers');
mobileApp.tables.add('TBL_Addresses');
mobileApp.tables.add('TBL_Riders');
mobileApp.tables.add('TBL_Delivery');
mobileApp.tables.add('V_Delivery');
mobileApp.tables.add('TBL_OrderTracking');
mobileApp.tables.add('V_OrderTracking');
mobileApp.tables.add('V_Orders_Report');
mobileApp.tables.add('TBL_MarketLocation');
mobileApp.tables.add('TBL_DeliveryFee');
mobileApp.tables.add('TBL_OrderHistory');
mobileApp.tables.add('V_CategoriesForWPF');
mobileApp.tables.add('V_CategoriesForWPF_Display');
mobileApp.tables.add('TBL_Token');
mobileApp.tables.add('TBL_Login');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
