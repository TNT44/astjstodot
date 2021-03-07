/*
12/12/2019

*/
/**
 * Comparaison de chaine.
 */
var comparerChaine = function(string_a, string_b)
{
    /* Expected Returns:

 0:  exact match

-1:  string_a < string_b

 1:  string_a > string_b

 */
    return string_a.localeCompare(string_b);

}

/**
 * Comparaison de chaine.
 */
var estidentique = function(string_a, string_b)
{
    /* Expected Returns:

 0:  exact match

-1:  string_a < string_b

 1:  string_a > string_b

 */
    var rep = string_a.localeCompare(string_b);
    if (rep == 0) return true;
    return false;
}

module.exports = {
    comparerChaine :comparerChaine,
    estidentique : estidentique

}
