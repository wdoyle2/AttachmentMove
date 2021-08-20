
RegisterNuiCallbackType('np-props-move:triggerAttachment') // register the type
// register a magic event name
on('__cfx_nui:np-props-move:triggerAttachment', (data, cb) => {
    emit("np-props:attachProp", data.objectName, data.boneName, data.pos.x, data.pos.y, data.pos.z, data.rot.x, data.rot.y, data.pos.z, true)
});
