app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {

    function template(seccion, vista) {
	    let obj = {
	        name: seccion + vista,
	        files: [ 'js/' + seccion + '/frags/' + vista + '.js' ]
	    }
	    return obj
	}



    $ocLazyLoadProvider.config({
        debug: true,
        modules: [
            template('main', 'home'),
           
            template('admin', 'home'),

            template('admin', 'categorias'),
            template('admin', 'categoria'),

            template('admin', 'conceptos'),
            template('admin', 'concepto'),

            template('admin', 'proyectos'),
            template('admin', 'proyecto'),

            template('admin', 'prospecto'),
            
            template('admin', 'testimonio'),
            template('admin', 'clientes'),
            template('admin', 'cliente'),



            template('admin', 'templates'),
            template('admin', 'template'),
            template('admin', 'nuevotemplate'),

            template('admin', 'servicio'),
            template('admin', 'limite'),
            template('admin', 'cotizador'),
            template('admin', 'menuproyectos'),

            
            


        ]
    });
}]);
