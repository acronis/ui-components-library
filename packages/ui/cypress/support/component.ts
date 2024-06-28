// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue';

// Ensure global styles are loaded
import '../../src/styles/public/acronis.css';

// Example use:
// cy.mount(MyComponent)
import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command';

Cypress.Commands.add('mount', mount);

addMatchImageSnapshotCommand();

// can also add any default options to be used
// by all instances of `matchImageSnapshot`
addMatchImageSnapshotCommand({
  failureThreshold: 0.2,
});
