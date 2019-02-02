/**
 *@NApiVersion 2.x
 *@NScriptType Restlet
 *@author Alex Valle
 * Jan 2019
 */
define(['N/record'], function(record) {
  function getRecord(context) {
    log.debug('GET', context)
    try {
      var project = record.load({
        type: context.record_type,
        id: context.id
      })
      var payload = project.toJSON()
      return payload.fields
    } catch (err) {
      return err
    }
  }
  function updateRecord(context) {
    try {
      log.debug('POST', context)
        var project = record.load({
          type: context.record_type,
          id: context.record_id
        })
        project.setValue({
          fieldId: context.field_id,
          value: context.value
        }).save()
        log.debug('SET VALUE', project.getValue(context.field_id))
        return 'Success! Field updated'
    } catch (err) {
      log.debug('POST ERROR', err)
      return err
    }
  }
  return {
    get: getRecord,
    post: updateRecord
  }
})
