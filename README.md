# FTC Smart Classroom — Frontend MVP

Dashboard multi-salles React + TypeScript + Vite, avec thèmes clair/sombre et télémétrie **entièrement simulée**.

## Windows / VS Code

1. Installer Node.js LTS.
2. Extraire le dossier.
3. Ouvrir un terminal PowerShell dans ce dossier.
4. `npm install`
5. `npm run dev`
6. Ouvrir l'adresse locale indiquée par Vite (souvent http://localhost:5173).

## Vérification

`npm run build`

## Limites

Aucun matériel, broker MQTT, backend ni base de données ne sont connectés. Les valeurs, états de connexion et historiques sont simulés en mémoire et réinitialisés au rechargement. La structure du payload s'inspire de la fiche technique FTC Smart Classroom. Le mouvement PIR n'est pas un comptage de personnes, et le niveau sonore est relatif, pas en dBA.
