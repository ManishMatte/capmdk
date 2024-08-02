(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/capmdk/i18n/i18n.properties":
/*!*******************************************************!*\
  !*** ./build.definitions/capmdk/i18n/i18n.properties ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let capmdk_actions_application_appupdate_action = __webpack_require__(/*! ./capmdk/Actions/Application/AppUpdate.action */ "./build.definitions/capmdk/Actions/Application/AppUpdate.action")
let capmdk_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./capmdk/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/capmdk/Actions/Application/AppUpdateFailureMessage.action")
let capmdk_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./capmdk/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/capmdk/Actions/Application/AppUpdateProgressBanner.action")
let capmdk_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./capmdk/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/capmdk/Actions/Application/AppUpdateSuccessMessage.action")
let capmdk_actions_application_logout_action = __webpack_require__(/*! ./capmdk/Actions/Application/Logout.action */ "./build.definitions/capmdk/Actions/Application/Logout.action")
let capmdk_actions_application_navtoabout_action = __webpack_require__(/*! ./capmdk/Actions/Application/NavToAbout.action */ "./build.definitions/capmdk/Actions/Application/NavToAbout.action")
let capmdk_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./capmdk/Actions/Application/NavToActivityLog.action */ "./build.definitions/capmdk/Actions/Application/NavToActivityLog.action")
let capmdk_actions_application_navtosupport_action = __webpack_require__(/*! ./capmdk/Actions/Application/NavToSupport.action */ "./build.definitions/capmdk/Actions/Application/NavToSupport.action")
let capmdk_actions_application_onwillupdate_action = __webpack_require__(/*! ./capmdk/Actions/Application/OnWillUpdate.action */ "./build.definitions/capmdk/Actions/Application/OnWillUpdate.action")
let capmdk_actions_application_reset_action = __webpack_require__(/*! ./capmdk/Actions/Application/Reset.action */ "./build.definitions/capmdk/Actions/Application/Reset.action")
let capmdk_actions_application_resetmessage_action = __webpack_require__(/*! ./capmdk/Actions/Application/ResetMessage.action */ "./build.definitions/capmdk/Actions/Application/ResetMessage.action")
let capmdk_actions_application_usermenupopover_action = __webpack_require__(/*! ./capmdk/Actions/Application/UserMenuPopover.action */ "./build.definitions/capmdk/Actions/Application/UserMenuPopover.action")
let capmdk_actions_closecreateemployeepage_action = __webpack_require__(/*! ./capmdk/Actions/CloseCreateEmployeePage.action */ "./build.definitions/capmdk/Actions/CloseCreateEmployeePage.action")
let capmdk_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./capmdk/Actions/CloseModalPage_Cancel.action */ "./build.definitions/capmdk/Actions/CloseModalPage_Cancel.action")
let capmdk_actions_closemodalpage_complete_action = __webpack_require__(/*! ./capmdk/Actions/CloseModalPage_Complete.action */ "./build.definitions/capmdk/Actions/CloseModalPage_Complete.action")
let capmdk_actions_closepage_action = __webpack_require__(/*! ./capmdk/Actions/ClosePage.action */ "./build.definitions/capmdk/Actions/ClosePage.action")
let capmdk_actions_closeupdatedetailspage_action = __webpack_require__(/*! ./capmdk/Actions/CloseUpdateDetailsPage.action */ "./build.definitions/capmdk/Actions/CloseUpdateDetailsPage.action")
let capmdk_actions_com_sap_mdk_cap_service_closeoffline_action = __webpack_require__(/*! ./capmdk/Actions/com_sap_mdk_cap/Service/CloseOffline.action */ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/CloseOffline.action")
let capmdk_actions_com_sap_mdk_cap_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./capmdk/Actions/com_sap_mdk_cap/Service/CloseOfflineFailureMessage.action */ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/CloseOfflineFailureMessage.action")
let capmdk_actions_com_sap_mdk_cap_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./capmdk/Actions/com_sap_mdk_cap/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/CloseOfflineSuccessMessage.action")
let capmdk_actions_com_sap_mdk_cap_service_downloadoffline_action = __webpack_require__(/*! ./capmdk/Actions/com_sap_mdk_cap/Service/DownloadOffline.action */ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/DownloadOffline.action")
let capmdk_actions_com_sap_mdk_cap_service_downloadstartedmessage_action = __webpack_require__(/*! ./capmdk/Actions/com_sap_mdk_cap/Service/DownloadStartedMessage.action */ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/DownloadStartedMessage.action")
let capmdk_actions_com_sap_mdk_cap_service_initializeoffline_action = __webpack_require__(/*! ./capmdk/Actions/com_sap_mdk_cap/Service/InitializeOffline.action */ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/InitializeOffline.action")
let capmdk_actions_com_sap_mdk_cap_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./capmdk/Actions/com_sap_mdk_cap/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/InitializeOfflineFailureMessage.action")
let capmdk_actions_com_sap_mdk_cap_service_syncfailuremessage_action = __webpack_require__(/*! ./capmdk/Actions/com_sap_mdk_cap/Service/SyncFailureMessage.action */ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/SyncFailureMessage.action")
let capmdk_actions_com_sap_mdk_cap_service_syncstartedmessage_action = __webpack_require__(/*! ./capmdk/Actions/com_sap_mdk_cap/Service/SyncStartedMessage.action */ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/SyncStartedMessage.action")
let capmdk_actions_com_sap_mdk_cap_service_uploadoffline_action = __webpack_require__(/*! ./capmdk/Actions/com_sap_mdk_cap/Service/UploadOffline.action */ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/UploadOffline.action")
let capmdk_actions_createemployeefailmsg_action = __webpack_require__(/*! ./capmdk/Actions/CreateEmployeeFailMsg.action */ "./build.definitions/capmdk/Actions/CreateEmployeeFailMsg.action")
let capmdk_actions_createemployeesrv_action = __webpack_require__(/*! ./capmdk/Actions/CreateEmployeeSrv.action */ "./build.definitions/capmdk/Actions/CreateEmployeeSrv.action")
let capmdk_actions_deletecurremployeedata_action = __webpack_require__(/*! ./capmdk/Actions/DeleteCurrEmployeeData.action */ "./build.definitions/capmdk/Actions/DeleteCurrEmployeeData.action")
let capmdk_actions_deleteemployeefailmsg_action = __webpack_require__(/*! ./capmdk/Actions/DeleteEmployeeFailMsg.action */ "./build.definitions/capmdk/Actions/DeleteEmployeeFailMsg.action")
let capmdk_actions_deleteemployeesrv_action = __webpack_require__(/*! ./capmdk/Actions/DeleteEmployeeSrv.action */ "./build.definitions/capmdk/Actions/DeleteEmployeeSrv.action")
let capmdk_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./capmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/capmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let capmdk_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./capmdk/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/capmdk/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let capmdk_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./capmdk/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/capmdk/Actions/ErrorArchive/NavToErrorArchive_List.action")
let capmdk_actions_genericbannermessage_action = __webpack_require__(/*! ./capmdk/Actions/GenericBannerMessage.action */ "./build.definitions/capmdk/Actions/GenericBannerMessage.action")
let capmdk_actions_genericmessagebox_action = __webpack_require__(/*! ./capmdk/Actions/GenericMessageBox.action */ "./build.definitions/capmdk/Actions/GenericMessageBox.action")
let capmdk_actions_genericnavigation_action = __webpack_require__(/*! ./capmdk/Actions/GenericNavigation.action */ "./build.definitions/capmdk/Actions/GenericNavigation.action")
let capmdk_actions_generictoastmessage_action = __webpack_require__(/*! ./capmdk/Actions/GenericToastMessage.action */ "./build.definitions/capmdk/Actions/GenericToastMessage.action")
let capmdk_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./capmdk/Actions/Logging/LogUploadFailure.action */ "./build.definitions/capmdk/Actions/Logging/LogUploadFailure.action")
let capmdk_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./capmdk/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/capmdk/Actions/Logging/LogUploadSuccessful.action")
let capmdk_actions_logging_uploadlog_action = __webpack_require__(/*! ./capmdk/Actions/Logging/UploadLog.action */ "./build.definitions/capmdk/Actions/Logging/UploadLog.action")
let capmdk_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./capmdk/Actions/Logging/UploadLogProgress.action */ "./build.definitions/capmdk/Actions/Logging/UploadLogProgress.action")
let capmdk_actions_navtocreateemployee_action = __webpack_require__(/*! ./capmdk/Actions/NavToCreateEmployee.action */ "./build.definitions/capmdk/Actions/NavToCreateEmployee.action")
let capmdk_actions_navtoemployeedetails_action = __webpack_require__(/*! ./capmdk/Actions/NavToEmployeeDetails.action */ "./build.definitions/capmdk/Actions/NavToEmployeeDetails.action")
let capmdk_actions_navtolistpage1_action = __webpack_require__(/*! ./capmdk/Actions/NavToListPage1.action */ "./build.definitions/capmdk/Actions/NavToListPage1.action")
let capmdk_actions_navtolistpage_action = __webpack_require__(/*! ./capmdk/Actions/NavToListPage.action */ "./build.definitions/capmdk/Actions/NavToListPage.action")
let capmdk_actions_navtoupdateempdetailspage_action = __webpack_require__(/*! ./capmdk/Actions/NavToUpdateEmpDetailsPage.action */ "./build.definitions/capmdk/Actions/NavToUpdateEmpDetailsPage.action")
let capmdk_actions_updateempfailuremsg_action = __webpack_require__(/*! ./capmdk/Actions/UpdateEmpFailureMsg.action */ "./build.definitions/capmdk/Actions/UpdateEmpFailureMsg.action")
let capmdk_actions_updateemployeesrv_action = __webpack_require__(/*! ./capmdk/Actions/UpdateEmployeeSrv.action */ "./build.definitions/capmdk/Actions/UpdateEmployeeSrv.action")
let capmdk_actions_validationfailure_action = __webpack_require__(/*! ./capmdk/Actions/ValidationFailure.action */ "./build.definitions/capmdk/Actions/ValidationFailure.action")
let capmdk_globals_application_appdefinition_version_global = __webpack_require__(/*! ./capmdk/Globals/Application/AppDefinition_Version.global */ "./build.definitions/capmdk/Globals/Application/AppDefinition_Version.global")
let capmdk_globals_application_applicationname_global = __webpack_require__(/*! ./capmdk/Globals/Application/ApplicationName.global */ "./build.definitions/capmdk/Globals/Application/ApplicationName.global")
let capmdk_globals_application_supportemail_global = __webpack_require__(/*! ./capmdk/Globals/Application/SupportEmail.global */ "./build.definitions/capmdk/Globals/Application/SupportEmail.global")
let capmdk_globals_application_supportphone_global = __webpack_require__(/*! ./capmdk/Globals/Application/SupportPhone.global */ "./build.definitions/capmdk/Globals/Application/SupportPhone.global")
let capmdk_i18n_i18n_properties = __webpack_require__(/*! ./capmdk/i18n/i18n.properties */ "./build.definitions/capmdk/i18n/i18n.properties")
let capmdk_jsconfig_json = __webpack_require__(/*! ./capmdk/jsconfig.json */ "./build.definitions/capmdk/jsconfig.json")
let capmdk_pages_application_about_page = __webpack_require__(/*! ./capmdk/Pages/Application/About.page */ "./build.definitions/capmdk/Pages/Application/About.page")
let capmdk_pages_application_support_page = __webpack_require__(/*! ./capmdk/Pages/Application/Support.page */ "./build.definitions/capmdk/Pages/Application/Support.page")
let capmdk_pages_application_useractivitylog_page = __webpack_require__(/*! ./capmdk/Pages/Application/UserActivityLog.page */ "./build.definitions/capmdk/Pages/Application/UserActivityLog.page")
let capmdk_pages_createemployee_page = __webpack_require__(/*! ./capmdk/Pages/createEmployee.page */ "./build.definitions/capmdk/Pages/createEmployee.page")
let capmdk_pages_empdetails_page = __webpack_require__(/*! ./capmdk/Pages/EmpDetails.page */ "./build.definitions/capmdk/Pages/EmpDetails.page")
let capmdk_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./capmdk/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/capmdk/Pages/ErrorArchive/ErrorArchive_Detail.page")
let capmdk_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./capmdk/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/capmdk/Pages/ErrorArchive/ErrorArchive_List.page")
let capmdk_pages_listdata_page = __webpack_require__(/*! ./capmdk/Pages/listData.page */ "./build.definitions/capmdk/Pages/listData.page")
let capmdk_pages_main_page = __webpack_require__(/*! ./capmdk/Pages/Main.page */ "./build.definitions/capmdk/Pages/Main.page")
let capmdk_pages_updateempdetails_page = __webpack_require__(/*! ./capmdk/Pages/UpdateEmpDetails.page */ "./build.definitions/capmdk/Pages/UpdateEmpDetails.page")
let capmdk_rules_application_appupdatefailure_js = __webpack_require__(/*! ./capmdk/Rules/Application/AppUpdateFailure.js */ "./build.definitions/capmdk/Rules/Application/AppUpdateFailure.js")
let capmdk_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./capmdk/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/capmdk/Rules/Application/AppUpdateSuccess.js")
let capmdk_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./capmdk/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/capmdk/Rules/Application/ClientIsMultiUserMode.js")
let capmdk_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./capmdk/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/capmdk/Rules/Application/GetClientSupportVersions.js")
let capmdk_rules_application_getclientversion_js = __webpack_require__(/*! ./capmdk/Rules/Application/GetClientVersion.js */ "./build.definitions/capmdk/Rules/Application/GetClientVersion.js")
let capmdk_rules_application_onwillupdate_js = __webpack_require__(/*! ./capmdk/Rules/Application/OnWillUpdate.js */ "./build.definitions/capmdk/Rules/Application/OnWillUpdate.js")
let capmdk_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./capmdk/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/capmdk/Rules/Application/ResetAppSettingsAndLogout.js")
let capmdk_rules_deleteemployeerule_js = __webpack_require__(/*! ./capmdk/Rules/DeleteEmployeeRule.js */ "./build.definitions/capmdk/Rules/DeleteEmployeeRule.js")
let capmdk_rules_errorarchive_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./capmdk/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js */ "./build.definitions/capmdk/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js")
let capmdk_rules_idvalidation_js = __webpack_require__(/*! ./capmdk/Rules/IDValidation.js */ "./build.definitions/capmdk/Rules/IDValidation.js")
let capmdk_rules_logging_loglevels_js = __webpack_require__(/*! ./capmdk/Rules/Logging/LogLevels.js */ "./build.definitions/capmdk/Rules/Logging/LogLevels.js")
let capmdk_rules_logging_settracecategories_js = __webpack_require__(/*! ./capmdk/Rules/Logging/SetTraceCategories.js */ "./build.definitions/capmdk/Rules/Logging/SetTraceCategories.js")
let capmdk_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./capmdk/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/capmdk/Rules/Logging/SetUserLogLevel.js")
let capmdk_rules_logging_togglelogging_js = __webpack_require__(/*! ./capmdk/Rules/Logging/ToggleLogging.js */ "./build.definitions/capmdk/Rules/Logging/ToggleLogging.js")
let capmdk_rules_logging_tracecategories_js = __webpack_require__(/*! ./capmdk/Rules/Logging/TraceCategories.js */ "./build.definitions/capmdk/Rules/Logging/TraceCategories.js")
let capmdk_rules_logging_userlogsetting_js = __webpack_require__(/*! ./capmdk/Rules/Logging/UserLogSetting.js */ "./build.definitions/capmdk/Rules/Logging/UserLogSetting.js")
let capmdk_rules_service_initialize_js = __webpack_require__(/*! ./capmdk/Rules/Service/Initialize.js */ "./build.definitions/capmdk/Rules/Service/Initialize.js")
let capmdk_services_com_sap_mdk_cap_service = __webpack_require__(/*! ./capmdk/Services/com_sap_mdk_cap.service */ "./build.definitions/capmdk/Services/com_sap_mdk_cap.service")
let capmdk_styles_styles_css = __webpack_require__(/*! ./capmdk/Styles/Styles.css */ "./build.definitions/capmdk/Styles/Styles.css")
let capmdk_styles_styles_json = __webpack_require__(/*! ./capmdk/Styles/Styles.json */ "./build.definitions/capmdk/Styles/Styles.json")
let capmdk_styles_styles_less = __webpack_require__(/*! ./capmdk/Styles/Styles.less */ "./build.definitions/capmdk/Styles/Styles.less")
let capmdk_styles_styles_nss = __webpack_require__(/*! ./capmdk/Styles/Styles.nss */ "./build.definitions/capmdk/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	capmdk_actions_application_appupdate_action : capmdk_actions_application_appupdate_action,
	capmdk_actions_application_appupdatefailuremessage_action : capmdk_actions_application_appupdatefailuremessage_action,
	capmdk_actions_application_appupdateprogressbanner_action : capmdk_actions_application_appupdateprogressbanner_action,
	capmdk_actions_application_appupdatesuccessmessage_action : capmdk_actions_application_appupdatesuccessmessage_action,
	capmdk_actions_application_logout_action : capmdk_actions_application_logout_action,
	capmdk_actions_application_navtoabout_action : capmdk_actions_application_navtoabout_action,
	capmdk_actions_application_navtoactivitylog_action : capmdk_actions_application_navtoactivitylog_action,
	capmdk_actions_application_navtosupport_action : capmdk_actions_application_navtosupport_action,
	capmdk_actions_application_onwillupdate_action : capmdk_actions_application_onwillupdate_action,
	capmdk_actions_application_reset_action : capmdk_actions_application_reset_action,
	capmdk_actions_application_resetmessage_action : capmdk_actions_application_resetmessage_action,
	capmdk_actions_application_usermenupopover_action : capmdk_actions_application_usermenupopover_action,
	capmdk_actions_closecreateemployeepage_action : capmdk_actions_closecreateemployeepage_action,
	capmdk_actions_closemodalpage_cancel_action : capmdk_actions_closemodalpage_cancel_action,
	capmdk_actions_closemodalpage_complete_action : capmdk_actions_closemodalpage_complete_action,
	capmdk_actions_closepage_action : capmdk_actions_closepage_action,
	capmdk_actions_closeupdatedetailspage_action : capmdk_actions_closeupdatedetailspage_action,
	capmdk_actions_com_sap_mdk_cap_service_closeoffline_action : capmdk_actions_com_sap_mdk_cap_service_closeoffline_action,
	capmdk_actions_com_sap_mdk_cap_service_closeofflinefailuremessage_action : capmdk_actions_com_sap_mdk_cap_service_closeofflinefailuremessage_action,
	capmdk_actions_com_sap_mdk_cap_service_closeofflinesuccessmessage_action : capmdk_actions_com_sap_mdk_cap_service_closeofflinesuccessmessage_action,
	capmdk_actions_com_sap_mdk_cap_service_downloadoffline_action : capmdk_actions_com_sap_mdk_cap_service_downloadoffline_action,
	capmdk_actions_com_sap_mdk_cap_service_downloadstartedmessage_action : capmdk_actions_com_sap_mdk_cap_service_downloadstartedmessage_action,
	capmdk_actions_com_sap_mdk_cap_service_initializeoffline_action : capmdk_actions_com_sap_mdk_cap_service_initializeoffline_action,
	capmdk_actions_com_sap_mdk_cap_service_initializeofflinefailuremessage_action : capmdk_actions_com_sap_mdk_cap_service_initializeofflinefailuremessage_action,
	capmdk_actions_com_sap_mdk_cap_service_syncfailuremessage_action : capmdk_actions_com_sap_mdk_cap_service_syncfailuremessage_action,
	capmdk_actions_com_sap_mdk_cap_service_syncstartedmessage_action : capmdk_actions_com_sap_mdk_cap_service_syncstartedmessage_action,
	capmdk_actions_com_sap_mdk_cap_service_uploadoffline_action : capmdk_actions_com_sap_mdk_cap_service_uploadoffline_action,
	capmdk_actions_createemployeefailmsg_action : capmdk_actions_createemployeefailmsg_action,
	capmdk_actions_createemployeesrv_action : capmdk_actions_createemployeesrv_action,
	capmdk_actions_deletecurremployeedata_action : capmdk_actions_deletecurremployeedata_action,
	capmdk_actions_deleteemployeefailmsg_action : capmdk_actions_deleteemployeefailmsg_action,
	capmdk_actions_deleteemployeesrv_action : capmdk_actions_deleteemployeesrv_action,
	capmdk_actions_errorarchive_errorarchive_syncfailure_action : capmdk_actions_errorarchive_errorarchive_syncfailure_action,
	capmdk_actions_errorarchive_navtoerrorarchive_detail_action : capmdk_actions_errorarchive_navtoerrorarchive_detail_action,
	capmdk_actions_errorarchive_navtoerrorarchive_list_action : capmdk_actions_errorarchive_navtoerrorarchive_list_action,
	capmdk_actions_genericbannermessage_action : capmdk_actions_genericbannermessage_action,
	capmdk_actions_genericmessagebox_action : capmdk_actions_genericmessagebox_action,
	capmdk_actions_genericnavigation_action : capmdk_actions_genericnavigation_action,
	capmdk_actions_generictoastmessage_action : capmdk_actions_generictoastmessage_action,
	capmdk_actions_logging_loguploadfailure_action : capmdk_actions_logging_loguploadfailure_action,
	capmdk_actions_logging_loguploadsuccessful_action : capmdk_actions_logging_loguploadsuccessful_action,
	capmdk_actions_logging_uploadlog_action : capmdk_actions_logging_uploadlog_action,
	capmdk_actions_logging_uploadlogprogress_action : capmdk_actions_logging_uploadlogprogress_action,
	capmdk_actions_navtocreateemployee_action : capmdk_actions_navtocreateemployee_action,
	capmdk_actions_navtoemployeedetails_action : capmdk_actions_navtoemployeedetails_action,
	capmdk_actions_navtolistpage1_action : capmdk_actions_navtolistpage1_action,
	capmdk_actions_navtolistpage_action : capmdk_actions_navtolistpage_action,
	capmdk_actions_navtoupdateempdetailspage_action : capmdk_actions_navtoupdateempdetailspage_action,
	capmdk_actions_updateempfailuremsg_action : capmdk_actions_updateempfailuremsg_action,
	capmdk_actions_updateemployeesrv_action : capmdk_actions_updateemployeesrv_action,
	capmdk_actions_validationfailure_action : capmdk_actions_validationfailure_action,
	capmdk_globals_application_appdefinition_version_global : capmdk_globals_application_appdefinition_version_global,
	capmdk_globals_application_applicationname_global : capmdk_globals_application_applicationname_global,
	capmdk_globals_application_supportemail_global : capmdk_globals_application_supportemail_global,
	capmdk_globals_application_supportphone_global : capmdk_globals_application_supportphone_global,
	capmdk_i18n_i18n_properties : capmdk_i18n_i18n_properties,
	capmdk_jsconfig_json : capmdk_jsconfig_json,
	capmdk_pages_application_about_page : capmdk_pages_application_about_page,
	capmdk_pages_application_support_page : capmdk_pages_application_support_page,
	capmdk_pages_application_useractivitylog_page : capmdk_pages_application_useractivitylog_page,
	capmdk_pages_createemployee_page : capmdk_pages_createemployee_page,
	capmdk_pages_empdetails_page : capmdk_pages_empdetails_page,
	capmdk_pages_errorarchive_errorarchive_detail_page : capmdk_pages_errorarchive_errorarchive_detail_page,
	capmdk_pages_errorarchive_errorarchive_list_page : capmdk_pages_errorarchive_errorarchive_list_page,
	capmdk_pages_listdata_page : capmdk_pages_listdata_page,
	capmdk_pages_main_page : capmdk_pages_main_page,
	capmdk_pages_updateempdetails_page : capmdk_pages_updateempdetails_page,
	capmdk_rules_application_appupdatefailure_js : capmdk_rules_application_appupdatefailure_js,
	capmdk_rules_application_appupdatesuccess_js : capmdk_rules_application_appupdatesuccess_js,
	capmdk_rules_application_clientismultiusermode_js : capmdk_rules_application_clientismultiusermode_js,
	capmdk_rules_application_getclientsupportversions_js : capmdk_rules_application_getclientsupportversions_js,
	capmdk_rules_application_getclientversion_js : capmdk_rules_application_getclientversion_js,
	capmdk_rules_application_onwillupdate_js : capmdk_rules_application_onwillupdate_js,
	capmdk_rules_application_resetappsettingsandlogout_js : capmdk_rules_application_resetappsettingsandlogout_js,
	capmdk_rules_deleteemployeerule_js : capmdk_rules_deleteemployeerule_js,
	capmdk_rules_errorarchive_errorarchive_checkforsyncerror_js : capmdk_rules_errorarchive_errorarchive_checkforsyncerror_js,
	capmdk_rules_idvalidation_js : capmdk_rules_idvalidation_js,
	capmdk_rules_logging_loglevels_js : capmdk_rules_logging_loglevels_js,
	capmdk_rules_logging_settracecategories_js : capmdk_rules_logging_settracecategories_js,
	capmdk_rules_logging_setuserloglevel_js : capmdk_rules_logging_setuserloglevel_js,
	capmdk_rules_logging_togglelogging_js : capmdk_rules_logging_togglelogging_js,
	capmdk_rules_logging_tracecategories_js : capmdk_rules_logging_tracecategories_js,
	capmdk_rules_logging_userlogsetting_js : capmdk_rules_logging_userlogsetting_js,
	capmdk_rules_service_initialize_js : capmdk_rules_service_initialize_js,
	capmdk_services_com_sap_mdk_cap_service : capmdk_services_com_sap_mdk_cap_service,
	capmdk_styles_styles_css : capmdk_styles_styles_css,
	capmdk_styles_styles_json : capmdk_styles_styles_json,
	capmdk_styles_styles_less : capmdk_styles_styles_less,
	capmdk_styles_styles_nss : capmdk_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Application/AppUpdateFailure.js":
/*!************************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Application/AppUpdateFailure.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/capmdk/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Application/AppUpdateSuccess.js":
/*!************************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Application/AppUpdateSuccess.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/capmdk/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/capmdk/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Application/ClientIsMultiUserMode.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Application/ClientIsMultiUserMode.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Application/GetClientSupportVersions.js":
/*!********************************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Application/GetClientSupportVersions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Application/GetClientVersion.js":
/*!************************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Application/GetClientVersion.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Application/OnWillUpdate.js":
/*!********************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Application/OnWillUpdate.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
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

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Application/ResetAppSettingsAndLogout.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/capmdk/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/DeleteEmployeeRule.js":
/*!**************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/DeleteEmployeeRule.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customers_DeleteConfirmation)
/* harmony export */ });
/** * Describe this function... * 
 * @param {IClientAPI} context */
function Customers_DeleteConfirmation(context) {
        
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

/***/ }),

/***/ "./build.definitions/capmdk/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js":
/*!***************************************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
    context.count('/capmdk/Services/com_sap_mdk_cap.service', 'ErrorArchive', '').then(errorCount => {
        if (errorCount > 0) {
            return context.getPageProxy().executeAction('/capmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function() {
                return Promise.reject(false);
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/IDValidation.js":
/*!********************************************************!*\
  !*** ./build.definitions/capmdk/Rules/IDValidation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IDValidation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function IDValidation(clientAPI) {

    if (clientAPI.evaluateTargetPath('#Control:FCID/#Value') === undefined || clientAPI.evaluateTargetPath('#Control:FCID/#Value') === null || clientAPI.evaluateTargetPath('#Control:FCID/#Value') === '') {
        //If email value does not contain @ display a validation failure message to the end-user
        clientAPI.executeAction('/capmdk/Actions/ValidationFailure.action');
    } else {
        //If @ is present in the email value, return true to indicate validation is successful
        return true;
    }
}



/***/ }),

/***/ "./build.definitions/capmdk/Rules/Logging/LogLevels.js":
/*!*************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Logging/LogLevels.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Logging/SetTraceCategories.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Logging/SetTraceCategories.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Logging/SetUserLogLevel.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Logging/SetUserLogLevel.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Logging/ToggleLogging.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Logging/ToggleLogging.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Logging/TraceCategories.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Logging/TraceCategories.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Logging/UserLogSetting.js":
/*!******************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Logging/UserLogSetting.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/capmdk/Rules/Service/Initialize.js":
/*!**************************************************************!*\
  !*** ./build.definitions/capmdk/Rules/Service/Initialize.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {

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

/***/ }),

/***/ "./build.definitions/capmdk/Styles/Styles.css":
/*!****************************************************!*\
  !*** ./build.definitions/capmdk/Styles/Styles.css ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/capmdk/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/capmdk/Styles/Styles.less":
/*!*****************************************************!*\
  !*** ./build.definitions/capmdk/Styles/Styles.less ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/capmdk/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/capmdk/Styles/Styles.nss":
/*!****************************************************!*\
  !*** ./build.definitions/capmdk/Styles/Styles.nss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/capmdk/Pages/Application/About.page":
/*!***************************************************************!*\
  !*** ./build.definitions/capmdk/Pages/Application/About.page ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/capmdk/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/capmdk/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/capmdk/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/capmdk/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/capmdk/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/capmdk/Pages/Application/Support.page":
/*!*****************************************************************!*\
  !*** ./build.definitions/capmdk/Pages/Application/Support.page ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/capmdk/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/capmdk/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/capmdk/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"disclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/capmdk/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/capmdk/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/capmdk/Pages/Application/UserActivityLog.page":
/*!*************************************************************************!*\
  !*** ./build.definitions/capmdk/Pages/Application/UserActivityLog.page ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/capmdk/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/capmdk/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/capmdk/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/capmdk/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/capmdk/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/capmdk/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/capmdk/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/capmdk/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/capmdk/Pages/EmpDetails.page":
/*!********************************************************!*\
  !*** ./build.definitions/capmdk/Pages/EmpDetails.page ***!
  \********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ProfileHeader","_Name":"SectionProfileHeader0","Visible":true,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ProfileHeader":{"DetailImage":"res://contact.png","DetailImageIsCircular":true,"Headline":"{empname}","Subheadline":"{empid}","Description":""}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{city}","_Name":"KeyValue0","KeyName":"City","Visible":true},{"Value":"{street}","_Name":"KeyValue1","KeyName":"Street","Visible":true},{"Value":"{state}","_Name":"KeyValue3","KeyName":"State","Visible":true},{"Value":"{zip}","_Name":"KeyValue2","KeyName":"Zip","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}}]}],"_Type":"Page","_Name":"EmpDetails","Caption":"Employee Details","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/capmdk/Actions/NavToUpdateEmpDetailsPage.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/capmdk/Rules/DeleteEmployeeRule.js"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/capmdk/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/capmdk/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/capmdk/Pages/ErrorArchive/ErrorArchive_List.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/capmdk/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/capmdk/Services/com_sap_mdk_cap.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"none","OnPress":"/capmdk/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/capmdk/Pages/Main.page":
/*!**************************************************!*\
  !*** ./build.definitions/capmdk/Pages/Main.page ***!
  \**************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton0","Title":"Button","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"res://mdk_logo.png","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/capmdk/Actions/NavToListPage1.action"}],"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"}}]}],"_Type":"Page","_Name":"Main","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/capmdk/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/capmdk/Pages/UpdateEmpDetails.page":
/*!**************************************************************!*\
  !*** ./build.definitions/capmdk/Pages/UpdateEmpDetails.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"{empid}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCID","IsVisible":true,"Separator":true,"Caption":"ID","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"{empname}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCName","IsVisible":true,"Separator":true,"Caption":"Employee Name","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"{city}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCity","IsVisible":true,"Separator":true,"Caption":"City","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"{state}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCState","IsVisible":true,"Separator":true,"Caption":"State","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"{street}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCStreet","IsVisible":true,"Separator":true,"Caption":"Street","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"{zip}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCZip","IsVisible":true,"Separator":true,"Caption":"Zip","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true}],"Layout":{"NumberOfColumns":1}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"UpdateEmpDetails","Caption":"Update Employee Details","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Cancel","SystemItem":"Cancel","Icon":"sap-icon://cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/capmdk/Actions/CloseUpdateDetailsPage.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/capmdk/Actions/UpdateEmployeeSrv.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/capmdk/Pages/createEmployee.page":
/*!************************************************************!*\
  !*** ./build.definitions/capmdk/Pages/createEmployee.page ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCID","IsVisible":true,"Separator":true,"Caption":"ID*","PlaceHolder":"PlaceHolder","AlternateInput":"None","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCName","IsVisible":true,"Separator":true,"Caption":"Name","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCStreet","IsVisible":true,"Separator":true,"Caption":"Street","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCity","IsVisible":true,"Separator":true,"Caption":"City","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCZip","IsVisible":true,"Separator":true,"Caption":"Zip","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCState","IsVisible":true,"Separator":true,"Caption":"State","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true}],"Layout":{"NumberOfColumns":1}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"createEmployee","Caption":"New Employee","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/capmdk/Actions/CloseCreateEmployeePage.action"},{"_Name":"ActionBarItem2","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/capmdk/Actions/CreateEmployeeSrv.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/capmdk/Pages/listData.page":
/*!******************************************************!*\
  !*** ./build.definitions/capmdk/Pages/listData.page ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ContactCell","Target":{"Service":"/capmdk/Services/com_sap_mdk_cap.service","EntitySet":"Employee"},"_Name":"SectionContactCell0","Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"Visible":true,"ContextMenu":{"PerformFirstActionWithFullSwipe":true},"DetailImage":"res://contact.png","Headline":"{empname}","Subheadline":"{empid}","Description":"","OnPress":"/capmdk/Actions/NavToEmployeeDetails.action"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50}}]}],"_Type":"Page","_Name":"listData","Caption":"listData","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/capmdk/Actions/NavToCreateEmployee.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"capmdk","Version":"/capmdk/Globals/Application/AppDefinition_Version.global","MainPage":"/capmdk/Pages/Main.page","OnLaunch":"/capmdk/Rules/Service/Initialize.js","OnWillUpdate":"/capmdk/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/capmdk/Rules/Service/Initialize.js","Styles":"/capmdk/Styles/Styles.less","Localization":"/capmdk/i18n/i18n.properties","StyleSheets":{"Styles":{"css":"/capmdk/Styles/Styles.css","ios":"/capmdk/Styles/Styles.nss","android":"/capmdk/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/AppUpdate.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/AppUpdate.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/capmdk/Rules/Application/AppUpdateFailure.js","OnSuccess":"/capmdk/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/AppUpdateFailureMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/AppUpdateFailureMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/AppUpdateProgressBanner.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/AppUpdateProgressBanner.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/capmdk/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/AppUpdateSuccessMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/AppUpdateSuccessMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/Logout.action":
/*!********************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/Logout.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/NavToAbout.action":
/*!************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/NavToAbout.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/capmdk/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/NavToActivityLog.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/NavToActivityLog.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/capmdk/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/NavToSupport.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/NavToSupport.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/capmdk/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/OnWillUpdate.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/OnWillUpdate.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/Reset.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/Reset.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/ResetMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/ResetMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/capmdk/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Application/UserMenuPopover.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Application/UserMenuPopover.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/capmdk/Actions/com_sap_mdk_cap/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/capmdk/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/capmdk/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/capmdk/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/capmdk/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/capmdk/Actions/Application/Logout.action","Title":"Logout","Visible":"/capmdk/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/CloseCreateEmployeePage.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/CloseCreateEmployeePage.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","ActionResult":{"_Name":"CloseCreateEmployeePage"},"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"NavigateBackToPage":"listData"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/CloseModalPage_Cancel.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/CloseModalPage_Cancel.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/CloseModalPage_Complete.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/CloseModalPage_Complete.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":true}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/ClosePage.action":
/*!***********************************************************!*\
  !*** ./build.definitions/capmdk/Actions/ClosePage.action ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/CloseUpdateDetailsPage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/CloseUpdateDetailsPage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","ActionResult":{"_Name":"CloseUpdateDetailsPage"},"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/CreateEmployeeFailMsg.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/CreateEmployeeFailMsg.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CreateEmployeeFailMsg"},"Message":"Failed - {#ActionResults:CreateEmployeeSrv/error}","Title":"Create Employee","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/CreateEmployeeSrv.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/CreateEmployeeSrv.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"CreateEmployeeSrv"},"OnFailure":"/capmdk/Actions/CreateEmployeeFailMsg.action","OnSuccess":"/capmdk/Actions/CloseModalPage_Complete.action","ValidationRule":"/capmdk/Rules/IDValidation.js","Target":{"Service":"/capmdk/Services/com_sap_mdk_cap.service","EntitySet":"Employee"},"Properties":{"empid":"#Control:FCID/#Value","empname":"#Control:FCName/#Value","street":"#Control:FCStreet/#Value","city":"#Control:FCCity/#Value","state":"#Control:FCState/#Value","zip":"#Control:FCZip/#Value"}}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/DeleteCurrEmployeeData.action":
/*!************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/DeleteCurrEmployeeData.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"DeleteCurrEmployeeData"},"Message":"Are you sure you want to delete?","Title":"Warning!!!","OKCaption":"Ok","CancelCaption":"Cancel"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/DeleteEmployeeFailMsg.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/DeleteEmployeeFailMsg.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"DeleteEmployeeFailMsg"},"Message":"Failed to delete the employee data - {#ActionResults:DeleteEmployeeSrv/error}","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/DeleteEmployeeSrv.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/DeleteEmployeeSrv.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DeleteEntity","ActionResult":{"_Name":"DeleteEmployeeSrv"},"OnFailure":"/capmdk/Actions/DeleteEmployeeFailMsg.action","OnSuccess":"/capmdk/Actions/CloseModalPage_Complete.action","Target":{"Service":"/capmdk/Services/com_sap_mdk_cap.service","EntitySet":"Employee","ReadLink":"{@odata.readLink}"}}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/capmdk/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/capmdk/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/capmdk/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/GenericBannerMessage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/GenericBannerMessage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/GenericMessageBox.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/GenericMessageBox.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/GenericNavigation.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/GenericNavigation.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/capmdk/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/GenericToastMessage.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/GenericToastMessage.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Logging/LogUploadFailure.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Logging/LogUploadFailure.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Logging/LogUploadSuccessful.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Logging/LogUploadSuccessful.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Logging/UploadLog.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Logging/UploadLog.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/capmdk/Actions/Logging/LogUploadFailure.action","OnSuccess":"/capmdk/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/Logging/UploadLogProgress.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/Logging/UploadLogProgress.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/capmdk/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/NavToCreateEmployee.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/NavToCreateEmployee.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCreateEmployee"},"PageToOpen":"/capmdk/Pages/createEmployee.page"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/NavToEmployeeDetails.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/NavToEmployeeDetails.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToEmployeeDetails"},"PageToOpen":"/capmdk/Pages/EmpDetails.page"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/NavToListPage.action":
/*!***************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/NavToListPage.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToListPage"},"PageToOpen":"/capmdk/Pages/listData.page"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/NavToListPage1.action":
/*!****************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/NavToListPage1.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToListPage1"},"PageToOpen":"/capmdk/Pages/listData.page"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/NavToUpdateEmpDetailsPage.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/NavToUpdateEmpDetailsPage.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToUpdateEmpDetailsPage"},"PageToOpen":"/capmdk/Pages/UpdateEmpDetails.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/UpdateEmpFailureMsg.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/UpdateEmpFailureMsg.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"UpdateEmpFailureMsg"},"Message":"Failed to update employee details - {#ActionResults:UpdateEmployeeSrv/error}","Title":"Update Employee","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/UpdateEmployeeSrv.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/UpdateEmployeeSrv.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"UpdateEmployeeSrv"},"OnFailure":"/capmdk/Actions/UpdateEmpFailureMsg.action","OnSuccess":"/capmdk/Actions/CloseModalPage_Complete.action","Target":{"Service":"/capmdk/Services/com_sap_mdk_cap.service","EntitySet":"Employee","ReadLink":"{@odata.readLink}"},"Properties":{"id":"{id}","empid":"#Control:FCID/#Value","empname":"#Control:FCName/#Value","street":"#Control:FCStreet/#Value","city":"#Control:FCCity/#Value","state":"#Control:FCState/#Value","zip":"#Control:FCZip/#Value"}}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/ValidationFailure.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/ValidationFailure.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ValidationFailure"},"Message":"Please fill the mandatory fields","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/CloseOffline.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/CloseOffline.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/capmdk/Services/com_sap_mdk_cap.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/capmdk/Actions/com_sap_mdk_cap/Service/CloseOfflineSuccessMessage.action","OnFailure":"/capmdk/Actions/com_sap_mdk_cap/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/CloseOfflineFailureMessage.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/CloseOfflineFailureMessage.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/CloseOfflineSuccessMessage.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/CloseOfflineSuccessMessage.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/DownloadOffline.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/DownloadOffline.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/capmdk/Services/com_sap_mdk_cap.service","DefiningRequests":[{"Name":"Employee","Query":"Employee"},{"Name":"Scans","Query":"Scans"},{"Name":"testDetails","Query":"testDetails"},{"Name":"Users","Query":"Users"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/capmdk/Actions/com_sap_mdk_cap/Service/SyncFailureMessage.action","OnSuccess":"/capmdk/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/DownloadStartedMessage.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/DownloadStartedMessage.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/capmdk/Actions/com_sap_mdk_cap/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/InitializeOffline.action":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/InitializeOffline.action ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/capmdk/Services/com_sap_mdk_cap.service","DefiningRequests":[{"Name":"Employee","Query":"Employee"},{"Name":"Scans","Query":"Scans"},{"Name":"testDetails","Query":"testDetails"},{"Name":"Users","Query":"Users"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/capmdk/Actions/com_sap_mdk_cap/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/InitializeOfflineFailureMessage.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/InitializeOfflineFailureMessage.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/SyncFailureMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/SyncFailureMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/SyncStartedMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/SyncStartedMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/capmdk/Actions/com_sap_mdk_cap/Service/UploadOffline.action","OnFailure":"/capmdk/Actions/com_sap_mdk_cap/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/UploadOffline.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/capmdk/Actions/com_sap_mdk_cap/Service/UploadOffline.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/capmdk/Services/com_sap_mdk_cap.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/capmdk/Actions/com_sap_mdk_cap/Service/DownloadStartedMessage.action","OnFailure":"/capmdk/Actions/com_sap_mdk_cap/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/capmdk/Globals/Application/AppDefinition_Version.global":
/*!***********************************************************************************!*\
  !*** ./build.definitions/capmdk/Globals/Application/AppDefinition_Version.global ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/capmdk/Globals/Application/ApplicationName.global":
/*!*****************************************************************************!*\
  !*** ./build.definitions/capmdk/Globals/Application/ApplicationName.global ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/capmdk/Globals/Application/SupportEmail.global":
/*!**************************************************************************!*\
  !*** ./build.definitions/capmdk/Globals/Application/SupportEmail.global ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/capmdk/Globals/Application/SupportPhone.global":
/*!**************************************************************************!*\
  !*** ./build.definitions/capmdk/Globals/Application/SupportPhone.global ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/capmdk/Services/com_sap_mdk_cap.service":
/*!*******************************************************************!*\
  !*** ./build.definitions/capmdk/Services/com_sap_mdk_cap.service ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"com.sap.mdk.cap","OfflineEnabled":false,"SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/capmdk/Styles/Styles.json":
/*!*****************************************************!*\
  !*** ./build.definitions/capmdk/Styles/Styles.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/capmdk/jsconfig.json":
/*!************************************************!*\
  !*** ./build.definitions/capmdk/jsconfig.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map