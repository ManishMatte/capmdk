/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function IDValidation(clientAPI) {

    if (clientAPI.evaluateTargetPath('#Control:FCID/#Value') === undefined || clientAPI.evaluateTargetPath('#Control:FCID/#Value') === null || clientAPI.evaluateTargetPath('#Control:FCID/#Value') === '') {
        //If email value does not contain @ display a validation failure message to the end-user
        clientAPI.executeAction('/capmdk/Actions/ValidationFailure.action');
    } else {
        //If @ is present in the email value, return true to indicate validation is successful
        return true;
    }
}

