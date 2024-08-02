/**
 * Describe this function...
 * @param {IClientAPI} context
 */
export default function CheckForSyncError(context) {
    context.count('/capmdk/Services/com_sap_mdk_cap.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/capmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}