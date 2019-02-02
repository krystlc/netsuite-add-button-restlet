/**
 *
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 *
 */
define([], function() {
  function myBeforeLoad(context) {
    if (context.type == context.UserEventType.VIEW) {
      var form = context.form
      var record = context.newRecord
      var customField = record.getText('') // your custom field id
      if (customField === '') { // add value; button only appears if customField's value equals this
        form.addButton({
          id: 'custpage_contract_approve_button',
          label: 'Get Contract Approved',
          functionName: 'buttonfxn()'
        }) 
        form.clientScriptModulePath = './client.js' // or whever you place the script
      }
    }
  }
  return {
    beforeLoad: myBeforeLoad
  }
})
