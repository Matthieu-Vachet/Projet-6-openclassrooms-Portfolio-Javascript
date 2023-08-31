# Pages

Si vous avez des règles de style spécifiques à certaines pages, il peut être pertinent de les ranger dans un dossier pages/ dédié. Souvent, la page d’accueil possède des éléments spécifiques et un style customisé par rapport au reste du site, dans ce cas un fichier _home.scss pourra regrouper l’ensemble de ces règles. Une landing page, une page de contact ou une page de téléchargement sont d’autres exemples qui ont couramment un style suffisamment différent du reste du site pour justifier l’utilisation d’un fichier dédié.

_home.scss
_contact.scss
...


Un point d’attention : puisque ces styles sont pertinents uniquement sur les pages en question, il est parfois préférable de ne pas utiliser de fichiers partiels, afin de ne pas compiler ces styles dans le fichier CSS principal de votre site. Une bonne pratique serait au contraire de les compiler chacun dans un fichier dédié et d’uniquement les importer dans les pages nécessaires. Par exemple, le fichier home.scss pourra être compilé en home.css et n’être importé que dans votre page index.html.

