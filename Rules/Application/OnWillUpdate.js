/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/capmdk/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/capmdk/Actions/com_sap_mdk_cap/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}