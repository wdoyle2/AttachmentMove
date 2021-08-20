const Delay = (ms) => new Promise(res => setTimeout(res, ms));

RegisterNuiCallbackType('np-props-move:triggerAttachment') // register the type
// register a magic event name
on('__cfx_nui:np-props-move:triggerAttachment', async (data, cb) => {
    emit("np-props:clearProps");
    Delay(200);
    emit("np-props:attachProp", data.objectName, data.boneName, data.pos.x, data.pos.y, data.pos.z, data.rot.x, data.rot.y, data.pos.z, true)
});


RegisterNuiCallbackType('np-props-move:clearAttach') // register the type
// register a magic event name
on('__cfx_nui:np-props-move:clearAttach', (data, cb) => {
    emit("np-props:clearProps");
});

