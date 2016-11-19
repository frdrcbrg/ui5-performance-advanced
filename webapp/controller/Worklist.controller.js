sap.ui.define([
		"myapp/controller/BaseController",
		"myapp/model/formatter"
	], function (BaseController, formatter) {
		"use strict";

		return BaseController.extend("myapp.controller.Worklist", {

			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			/**
			 * Called when the worklist controller is instantiated.
			 * @public
			 */
			onInit : function () {

			}
		});
	}
);