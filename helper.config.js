export default function(Handlebars) {
    Handlebars.registerHelper( 'capitalize', function( value ) {
        return value.toUpperCase()
    });
}