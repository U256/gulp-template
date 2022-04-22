import del from 'del'

const reset = () => del(app.path.buildFolder)

export default reset
