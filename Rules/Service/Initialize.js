export default function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _com_sap_mdk_cap = context.executeAction('/capmdk/Actions/com_sap_mdk_cap/Service/InitializeOffline.action');

    //You can add more service initialize actions here

    return Promise.all([_com_sap_mdk_cap]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/capmdk/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}