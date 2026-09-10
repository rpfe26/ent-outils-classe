# ENT — Outils de la classe

Landing page sobre qui référence tous les outils numériques utilisables en classe.
Affichage sans distraction, pensé pour l'efficacité pédagogique et la lecture facilitée
(dyslexie, basse vision).

## Aperçu

Une page unique, statique, sans dépendance à installer :

- **28 outils** rangés en **9 catégories** : organisation, travail de classe,
  communication, sciences & maths, langues & lettres, créativité, code & numérique,
  évaluation & révisions, ressources & culture.
- **Recherche instantanée**, insensible aux accents et à la casse
  (`EVALUATION` trouve « Évaluation »).
- **Filtres par catégorie**, cumulables avec la recherche.
- **Réglages d'affichage** mémorisés sur l'appareil :
  taille du texte, contraste renforcé, mode lecture facilitée, thème clair / sombre.

## Accessibilité

- Police **Atkinson Hyperlegible**, conçue pour distinguer les caractères souvent
  confondus (`l` / `I` / `1`, `O` / `0`).
- Mode **lecture facilitée** : espacement des lettres, des mots et interlignes augmenté.
- **Mode contraste renforcé** et thème sombre.
- La couleur n'est jamais seule porteuse d'information : chaque teinte est doublée
  d'un libellé écrit.
- Ligne de texte limitée, pas de justification, structure sémantique, lien d'évitement,
  focus visible, `prefers-reduced-motion` respecté.

## Utilisation

Aucune installation. Ouvrir `index.html` dans un navigateur.

Pour servir la page localement :

```bash
python3 -m http.server 8011
# puis ouvrir http://localhost:8011
```

## Structure

| Fichier       | Rôle                                       |
| ------------- | ------------------------------------------ |
| `index.html`  | structure et contenu de la page            |
| `styles.css`  | mise en forme et réglages d'accessibilité  |
| `app.js`      | liste des outils, recherche, filtres, thème |

## Personnalisation

Dans `app.js` :

- la constante `TOOLS` : noms, descriptions et **URL réelles de l'ENT** ;
- la constante `CATEGORIES` : libellés, couleurs et icônes.

Dans `index.html` : le nom de l'établissement, de la classe, et la section « Besoin d'aide ».

## Notes

Les polices sont chargées depuis Google Fonts. Hors connexion, la page s'affiche
normalement avec les polices système de repli.
