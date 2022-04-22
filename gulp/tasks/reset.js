import del from 'del'

const reset = (done) => {
   del(app.path.build.js).then().catch(console.error)
   del(app.path.build.img).then().catch(console.error)
   del(app.path.build.img).then().catch(console.error)
   del(app.path.build.css).then().catch(console.error)
   del(`${app.path.buildFolder}/*.html`).then().catch(console.error)
   del(app.path.build.files).then().catch(console.error)
   del(app.path.build.fonts).then().catch(console.error)

   done()
}

export default reset
