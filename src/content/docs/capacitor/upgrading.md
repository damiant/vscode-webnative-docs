---
title: Upgrading
description: Upgrading Capacitor
contributors:
  - dtarnawsky
---

Capacitor will require a migration between major versions. To do this:
- Click `Packages` > `@Capacitor`.
- Click 💡 and answer yes to migrating.

:::tip
When major versions of Capacitor are released this extension will also update and suggest the migration under `Recommendations`.
:::

Migration will first search for all Capacitor plugins that require upgrading as well and will warn you if there are ones that are not compatible yet. It will then run migration scripts on your iOS and Android native projects and finally update all dependencies.

## Minor Upgrades

You can upgrade minor versions of Capacitor by:
- Click `Packages` > `@Capacitor`.
- Click 💡 and answer yes to upgrading.