/** * Describe this function... * 
 * @param {IClientAPI} context */
export default function Customers_DeleteConfirmation(context) {
        
    return context.executeAction('/capmdk/Actions/DeleteCurrEmployeeData.action').then(
        (result) => {
                
                if (result.data) {
                        return context.
                            executeAction
                            ('/capmdk/Actions/DeleteEmployeeSrv.action').
                            then
                            ((success) => Promise.
                                resolve
                                (success), (failure) => Promise.
                                    reject
                                    ('Delete entity failed ' + failure));
                    } else {
                        return Promise.
                            reject
                            ('User Deferred');
                    }
            }
        );
}